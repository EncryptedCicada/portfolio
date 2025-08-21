import { useEffect, useRef } from 'react';

interface MatrixRainConfig {
  density: {
    activeColumns: number;
    trailLength: number;
    columnSpacing: number;
  };
  speed: number;
  text: {
    fontSize: number;
  };
  colors: {
    light: {
      primary: string;
      secondary: string;
      background: string;
    };
    dark: {
      primary: string;
      secondary: string;
      background: string;
    };
  };
}

interface MatrixRainProps {
  config?: Partial<MatrixRainConfig>;
  isDark?: boolean;
  className?: string;
}

const defaultConfig: MatrixRainConfig = {
  density: {
    activeColumns: 15,
    trailLength: 8,
    columnSpacing: 25
  },
  speed: 120,
  text: {
    fontSize: 14
  },
  colors: {
    light: {
      primary: '#22c55e',
      secondary: '#16a34a',
      background: '#f8fafc'
    },
    dark: {
      primary: '#00ff41',
      secondary: '#008f11',
      background: '#0a0a0a'
    }
  }
};

const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';

interface Drop {
  columnIndex: number;
  x: number;
  y: number;
  leadChar: string;
  trailChars: string[];
  lastUpdate: number;
  speed: number;
}

const getResponsiveFontSize = () => {
  if (typeof window === 'undefined') return 14;
  
  const width = window.innerWidth;
  if (width < 640) return 12;      // sm
  if (width < 768) return 14;      // md  
  if (width < 1024) return 16;     // lg
  return 18;                       // xl+
};

export const MatrixRain: React.FC<MatrixRainProps> = ({ 
  config = {}, 
  isDark = true, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const dropsRef = useRef<Drop[]>([]);
  const columnsRef = useRef<number[]>([]);
  const lastTimeRef = useRef<number>(0);
  
  const finalConfig: MatrixRainConfig = {
    density: { ...defaultConfig.density, ...config.density },
    speed: config.speed ?? defaultConfig.speed,
    text: { ...defaultConfig.text, ...config.text },
    colors: {
      light: { ...defaultConfig.colors.light, ...config.colors?.light },
      dark: { ...defaultConfig.colors.dark, ...config.colors?.dark }
    }
  };

  const currentColors = isDark ? finalConfig.colors.dark : finalConfig.colors.light;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const charHeight = finalConfig.text.fontSize * 1.2;

    const calculateColumns = () => {
      const availableWidth = canvas.width;
      const effectiveSpacing = finalConfig.density.columnSpacing;
      return Math.floor(availableWidth / effectiveSpacing);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const totalColumns = calculateColumns();
      columnsRef.current = Array.from({ length: totalColumns }, (_, i) => i);
      dropsRef.current = [];
      
      const shuffledColumns = [...columnsRef.current].sort(() => Math.random() - 0.5);
      const activeColumnIndices = shuffledColumns.slice(0, Math.min(finalConfig.density.activeColumns, totalColumns));
      
      activeColumnIndices.forEach(columnIndex => {
        const x = columnIndex * finalConfig.density.columnSpacing + (finalConfig.density.columnSpacing / 2);
        
        dropsRef.current.push({
          columnIndex,
          x,
          y: Math.random() * -canvas.height,
          leadChar: matrixChars[Math.floor(Math.random() * matrixChars.length)],
          trailChars: [],
          lastUpdate: 0,
          speed: 0.8 + Math.random() * 0.4
        });
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      
      ctx.fillStyle = currentColors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${finalConfig.text.fontSize}px monospace`;

      dropsRef.current.forEach((drop) => {
        if (currentTime - drop.lastUpdate >= finalConfig.speed * drop.speed) {
          drop.y += charHeight;
          drop.trailChars.unshift(drop.leadChar);
          
          if (drop.trailChars.length > finalConfig.density.trailLength) {
            drop.trailChars.pop();
          }
          
          drop.leadChar = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          drop.lastUpdate = currentTime;
        }

        drop.trailChars.forEach((char, index) => {
          const trailY = drop.y - (charHeight * (index + 1));
          if (trailY > -charHeight && trailY < canvas.height + charHeight) {
            const fadeAmount = 1 - ((index + 1) / (finalConfig.density.trailLength + 1));
            const alpha = Math.max(0.1, fadeAmount);
            
            const r = parseInt(currentColors.secondary.slice(1, 3), 16);
            const g = parseInt(currentColors.secondary.slice(3, 5), 16);
            const b = parseInt(currentColors.secondary.slice(5, 7), 16);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            
            ctx.fillText(char, drop.x, trailY);
          }
        });

        if (drop.y > -charHeight && drop.y < canvas.height + charHeight) {
          ctx.fillStyle = currentColors.primary;
          ctx.fillText(drop.leadChar, drop.x, drop.y);
        }

        if (drop.y > canvas.height + (charHeight * (finalConfig.density.trailLength + 2))) {
          const availableColumns = columnsRef.current.filter(colIndex => 
            !dropsRef.current.some(otherDrop => otherDrop !== drop && otherDrop.columnIndex === colIndex)
          );
          
          if (availableColumns.length > 0) {
            const newColumnIndex = availableColumns[Math.floor(Math.random() * availableColumns.length)];
            drop.columnIndex = newColumnIndex;
            drop.x = newColumnIndex * finalConfig.density.columnSpacing + (finalConfig.density.columnSpacing / 2);
          }
          
          drop.y = Math.random() * -canvas.height;
          drop.leadChar = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          drop.trailChars = [];
          drop.speed = 0.8 + Math.random() * 0.4;
        }
      });

      if (Math.random() > 0.99) {
        const totalColumns = calculateColumns();
        const targetActiveColumns = Math.min(finalConfig.density.activeColumns, totalColumns);
        
        if (dropsRef.current.length < targetActiveColumns) {
          const usedColumns = new Set(dropsRef.current.map(drop => drop.columnIndex));
          const availableColumns = columnsRef.current.filter(colIndex => !usedColumns.has(colIndex));
          
          if (availableColumns.length > 0) {
            const newColumnIndex = availableColumns[Math.floor(Math.random() * availableColumns.length)];
            const x = newColumnIndex * finalConfig.density.columnSpacing + (finalConfig.density.columnSpacing / 2);
            
            dropsRef.current.push({
              columnIndex: newColumnIndex,
              x,
              y: Math.random() * -canvas.height,
              leadChar: matrixChars[Math.floor(Math.random() * matrixChars.length)],
              trailChars: [],
              lastUpdate: currentTime,
              speed: 0.8 + Math.random() * 0.4
            });
          }
        } else if (dropsRef.current.length > targetActiveColumns) {
          const randomIndex = Math.floor(Math.random() * dropsRef.current.length);
          dropsRef.current.splice(randomIndex, 1);
        }
      }

      lastTimeRef.current = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark, finalConfig, currentColors]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 matrix-responsive ${className}`}
      style={{ backgroundColor: currentColors.background }}
    />
  );
};