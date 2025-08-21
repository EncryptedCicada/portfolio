"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { LandingCard } from "@/components/landing-card";
import { MatrixRain } from "@/components/matrix-rain";
import { useTheme } from "next-themes"; // If using next-themes

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Your Matrix rain configuration
  const matrixConfig = {
    density: {
      activeColumns: 20,    // Adjust based on your preference
      trailLength: 12,      // How many characters follow the lead
      columnSpacing: 28     // Space between columns
    },
    speed: 110,            // Speed of character printing (ms)
    colors: {
      light: {
        primary: '#059669',   // Emerald-600 for HeroUI theme compatibility
        secondary: '#047857', // Emerald-700
        background: '#ffffff' // White background
      },
      dark: {
        primary: '#00ff41',   // Classic Matrix green
        secondary: '#008f11', // Darker Matrix green
        background: '#000000' // Black background
      }
    }
  };

  return (
    <>
      {/* Matrix Rain Background */}
      <MatrixRain config={matrixConfig} isDark={isDark} />
      
      {/* Your existing content - now with relative positioning and higher z-index */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-top gap-4 py-8 md:py-10">
        <LandingCard />
      </section>
    </>
  );
}