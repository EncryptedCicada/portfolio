export const BackgroundBlooms = () => {
  
  return (
    <>
      <div 
        aria-hidden="true" 
        className="fixed opacity-40 dark:opacity-50 -top-[30%] -right-[70%] sm:-top-[60%] sm:-right-[90%] md:-top-[100%] md:-right-[90%] lg:-top-[130%] lg:-right-[80%] z-0 pointer-events-none"
      >
        <img 
          src="/bloom_top.svg" 
          className="relative z-10 transition-opacity duration-300 w-[800px] h-[800px] sm:w-[1400px] sm:h-[1400px] md:w-[2000px] md:h-[2000px] lg:w-[3000px] lg:h-[3000px]"
          alt="top background bloom"
        />
      </div>
      
      <div 
        aria-hidden="true"
        className="fixed opacity-70 dark:opacity-50 -bottom-[30%] -left-[70%] sm:-bottom-[60%] sm:-left-[90%] md:-bottom-[100%] md:-left-[90%] lg:-bottom-[130%] lg:-left-[30%] z-0 pointer-events-none"
      >
        <img 
          src="/bloom_bottom.svg" 
          className="relative z-10 transition-opacity duration-300 w-[800px] h-[800px] sm:w-[1400px] sm:h-[1400px] md:w-[2000px] md:h-[2000px] lg:w-[2500px] lg:h-[2500px]"
          alt="bottom background bloom"
        />
      </div>
    </>
  );
};
