"use client"

import { Moon, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunMedium className="absolute size-4 rotate-90 scale-0 transition dark:rotate-0 dark:scale-100" />
      <Moon className="size-4 rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0" />
    </Button>
  )
}
