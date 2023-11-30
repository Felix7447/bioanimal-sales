import React, { useState, useMemo } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { View } from "@/types";
import { dateRange } from "@/utils/dateRanges";

interface Props {
  changeTime: (view: View) => void
}

const keyNames = {
  "day": "Día",
  "week": "Semana",
  "month": "Mes",
}

export const TimeDropDown = ({ changeTime }: Props) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([keyNames["day"]]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleChange = (keys: any) => {
    const time: View['time'] = keys.currentKey
    const range = dateRange[`${time}`]
    setSelectedKeys(new Set([keyNames[time]]))
    changeTime({ time, range })
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize rounded-lg"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select Unit Time"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleChange}
      >
        <DropdownItem key="day">Día</DropdownItem>
        <DropdownItem key="week">Semana</DropdownItem>
        <DropdownItem key="month">Mes</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
