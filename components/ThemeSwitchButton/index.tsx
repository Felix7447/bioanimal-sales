import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SunIcon } from "@/assets/icons/SunIcon";

export const ThemeSwitchComponent = () => {
  return (
    <Switch
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
