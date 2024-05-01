import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

function PaginationControl({}: Props) {
  return (
    <HStack width={"fit-content"} my={"3em"} mx={"auto"} color={"#808080"}>
      <IconButton
        aria-label=""
        bgColor={"transparent"}
        border="1px solid #808080"
        borderRadius={"50px"}
        icon={<ChevronLeftIcon />}
        size={"sm"}
        //   isDisabled={Math.max(page, 1) === 1}
        //   onClick={() => setPage((page: number) => page - 1)}
      />
      <HStack mx={"1em"}>
        <IconButton
          aria-label=""
          borderRadius={"50px"}
          bgColor={"brand.primary"}
          color={"white"}
          size="sm"
          icon={<Text fontSize={"12px"}>1</Text>}
        />
        <IconButton
          aria-label=""
          borderRadius={"50px"}
          bgColor={"transparent"}
          size="sm"
          icon={<Text fontSize={"12px"}>3</Text>}
        />
        <IconButton
          aria-label=""
          borderRadius={"50px"}
          bgColor={"transparent"}
          size="sm"
          icon={<Text fontSize={"12px"}>...</Text>}
        />
        <IconButton
          aria-label=""
          borderRadius={"50px"}
          bgColor={"transparent"}
          size="sm"
          icon={<Text fontSize={"12px"}>23</Text>}
        />
      </HStack>
      <IconButton
        aria-label=""
        bgColor={"transparent"}
        border="1px solid #808080"
        borderRadius={"50px"}
        icon={<ChevronRightIcon />}
        size={"sm"}
        //   onClick={() => setPage((page: number) => page + 1)}
        //   isDisabled={Math.min(page * limit, count) === count}
      />
    </HStack>
  );
}

export default PaginationControl;
