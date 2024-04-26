import React, { useState } from "react";
import Logo from "../../components/Logo";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Spacer,
  Text,
  chakra,
} from "@chakra-ui/react";

type Props = {};

function SignUp({}: Props) {
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  return (
    <Box width={"100%"} py={"2em"}>
      <Logo my={"1em"} mx="auto" />

      <Box width={{ sm: "400px", base: "90%" }} my={"2em"} mx={"auto"}>
        <Heading textAlign={"center"} fontSize={"25px"} fontWeight={"500"}>
          Create your account
        </Heading>
        <Box my={"2em"}>
          <FormControl mb={"20px"}>
            <FormLabel color={"brand.gray-7"} fontSize={"14px"}>
              Business name
            </FormLabel>
            <Input type="text" placeholder="Enter your business name" />
          </FormControl>
          <FormControl mb={"20px"}>
            <FormLabel color={"brand.gray-7"} fontSize={"14px"}>
              Email
            </FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl mb={"12px"} position={"relative"}>
            <HStack width={"100%"}>
              <FormLabel color={"brand.gray-7"} fontSize={"14px"}>
                Password
              </FormLabel>
            </HStack>
            <Input
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
            />
            <chakra.span
              cursor={"pointer"}
              top="3.2em"
              right={"1em"}
              position={"absolute"}
              fontSize={"12px"}
              onClick={() => setShow((show) => !show)}
              zIndex={20}
            >
              {show ? "Hide" : "Show"}
            </chakra.span>
          </FormControl>

          <Button variant={"primary"} my={"1em"} width={"100%"}>
            Login
          </Button>
          <Text textAlign={"center"}>
            Already have an account?{" "}
            <chakra.span color={"brand.primary"}> Sign in</chakra.span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
