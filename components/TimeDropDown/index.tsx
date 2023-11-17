import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { View } from "@/types";
import { dateRange } from "@/utils/dateRanges";

interface Props {
  changeTime: (view: View) => void
}

export const TimeDropDown = ({ changeTime }: Props) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["day"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleChange = (keys: any) => {
    const time: View['time'] = keys.currentKey
    const range = dateRange[`${time}`]
    setSelectedKeys(new Set([time]))
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
        <DropdownItem key="day">Day</DropdownItem>
        <DropdownItem key="week">Week</DropdownItem>
        <DropdownItem key="month">Month</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
