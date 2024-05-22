import React from "react";
import Image from "next/image";
import "./BadgeCardSpe.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

interface Props {
  perf: string;
  power: string;
  emission: string;
  colorText: string;
}

function BadgeCardSpe({ perf, power, emission, colorText }: Props) {
  return (
    <div className="flex gap-4">
      <Badge variant="outline" className={`${colorText}`}>
        {" "}
        <div className="flex gap-2 items-center">
          {" "}
          <Image
            src="/Images/pageinfo/engine2.svg"
            alt="carsvg"
            width={20}
            height={20}
          />{" "}
          {power}
        </div>
      </Badge>
      <Badge variant="outline" className={`${colorText}`}>
      <div className="flex gap-2 items-center">
          {" "}
          <Image
            src="/Images/pageinfo/perf2.svg"
            alt="carsvg"
            width={20}
            height={20}
          />{" "}
          {perf}
        </div>
      </Badge>
      <Badge variant="outline" className={`${emission} ${colorText}`}>
      <div className="flex gap-2 items-center">
          {" "}
          <Image
            src="/Images/pageinfo/leaf2.svg"
            alt="carsvg"
            width={20}
            height={20}
          />{" "}
          {emission}
        </div>
      </Badge>
    </div>
  );
}

export default BadgeCardSpe;
