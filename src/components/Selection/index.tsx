import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { autoDetectDeviceConverter } from "@utils/StyleConverter";

import {
  SelectionProps,
  LowTriangleContainerProps
  // @ts-ignore
} from "./typing.d.ts";

const { px2vw } = autoDetectDeviceConverter();


function LowTriangle({ className }: LowTriangleContainerProps) {
  const LowTriangleContainer = styled.span`
    right: ${px2vw(18.5)};
  `;

  return (
    <LowTriangleContainer className={className}>
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 7.5L0.102887 0.750001L7.89711 0.750001L4 7.5Z"
          fill="#0D0B0C"
        />
      </svg>
    </LowTriangleContainer>
  )
}

export default function Selection({ defaultText }: SelectionProps) {
  const [selected, setSelected] = useState<Array<any>>();
  const SelectionButton = styled.button`
    border-radius: ${px2vw(6)};
  `;



  const DefaultSelectionText = styled.span`
    margin-left: ${px2vw(16)};
    color: #0d0b0c;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(23)};
  `;

  const DropdownItems = styled.div`
    width: 100%;
    height: 200%;
  `

  const Item = styled.a`
    width: 100%;
    height: ${px2vw(34)};
    color: #0d0b0c;
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: ${px2vw(16)};
    line-height: ${px2vw(23)};
  `

  return (
    <>
      <SelectionButton className="relative round-lg text-left bg-white w-full">
        <DefaultSelectionText className="block truncate">
          {defaultText}
        </DefaultSelectionText>
        <LowTriangle className="flex absolute inset-y-0 items-center" />
      </SelectionButton>
      <DropdownItems className="flex flex-col flex-nowrap absolute outline-show rounded-md shadow-lg bg-white" >
        <div className="flex items-center">
          <Item href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >{defaultText}</Item>
          <LowTriangle className="absolute" />
        </div>
        <Item href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >test</Item>
      </DropdownItems>
    </>
  );
}
