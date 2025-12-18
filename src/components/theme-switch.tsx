import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/switch";
import { Skeleton } from "@heroui/skeleton";
import { SunIcon, MoonIcon } from "@/components/icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Skeleton className="h-6 w-12 rounded-full" isLoaded={mounted} />
    );
  }

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      color="primary"
      size="md"
      thumbIcon={({isSelected, className}) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
    />
  )
};

export { ThemeSwitch };