"use client"
import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SunIcon } from "@/assets/icons/SunIcon";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitchComponent = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      size="lg"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
    />
  );
}
