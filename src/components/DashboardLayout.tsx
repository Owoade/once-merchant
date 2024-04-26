import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Sidebar from "./Sidebar";


export default function DashboardLayout({ children, active, activeChild }: { children: React.ReactNode, active: string, activeChild: string }) {
  return (
    <Box>
      <Header
        bgColor={"white"}
        position={"fixed"}
        zIndex={4}
        borderBottom={"1px solid #E4E4E4"}
      />
      <Wrapper>
        <Flex position={"relative"}>
          <Box borderRight={"1px solid #E4E4E4"} pt={"5em"} width={"300px"} position={"fixed"}>
            <Sidebar active={active}  />
          </Box>
          <Box pt={"5em"}  ml={'20em'} width={'100%'} overflowX={'hidden'}>{children}</Box>
        </Flex>
      </Wrapper>
    </Box>
  );
}
