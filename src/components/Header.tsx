import {
  Box,
  BoxProps,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  chakra
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Wrapper from "./Wrapper";

type Props = {};

function Header(props: BoxProps) {
  return (
    <Box {...props} width={"100%"}>
      <Wrapper>
        <Flex width={"100%"} justifyContent={"space-between"} p={"24px 0"}>
          <Logo />
          <Box transform={"translateY(.5em)"}>
          ⭐ Your default currency is <chakra.span fontWeight={"extrabold"}>NGN</chakra.span>
          </Box>
          <HStack>
            <Button
              border={"1px solid #7391C8"}
              bgColor={"white"}
              color={"#7391C8"}
            >
              Go live 🚀
            </Button>
            <Spacer />
            <Image
              w={"32px"}
              src="https://res.cloudinary.com/dles2mycv/image/upload/v1706713836/user-icon_e2z2pf.svg"
            />
          </HStack>
        </Flex>
      </Wrapper>
    </Box>
  );
}

export default Header;
