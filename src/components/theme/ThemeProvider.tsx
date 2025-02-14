import { ThemeProvider as BasicThemeProvider } from "next-themes"
import { PropsWithChildren } from "react"

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <BasicThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BasicThemeProvider>
  )
}
