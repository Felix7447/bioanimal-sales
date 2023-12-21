import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface Props {
  background?: string
  title: string
  sales: number
}

export const CardComponent: React.FC<Props> = ({ background, title, sales }) => {
  return (
    <Card className={`max-w-[240px] w-[30%] text-text`} style={{ backgroundColor: background }}>
      <CardHeader className="flex flex-col gap-3 sm:flex-row">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-center sm:text-left">{title}</p>
        </div>
      </CardHeader>
      <CardBody className="p-0 pb-4 sm:p-2">
        <h4 className="font-bold text-lg text-center sm:ps-4 sm:text-start">
          {sales}
        </h4>
      </CardBody>
    </Card>
  );
}
