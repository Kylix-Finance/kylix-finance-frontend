'use client'

import { useTheme } from 'next-themes'
import { useCallback } from 'react'
import { Theme } from '~/types'

export function useThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const switchTheme = useCallback((theme: Theme) => setTheme(theme), [setTheme])

  return {
    theme: resolvedTheme as Theme | undefined,
    switchTheme,
  }
}