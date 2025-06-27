'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { useState, useEffect } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  //mounting check to prevent hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
