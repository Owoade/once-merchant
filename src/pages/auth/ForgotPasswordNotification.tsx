import React, { useState } from "react";
import Logo from "../../components/Logo";
import {
  Box,
  Button,
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

function ForgotPasswordNotification({}: Props) {
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  return (
    <Box width={"100%"} py={"2em"}>
      <Logo my={"1em"} mx="auto" />

      <Box width={{ sm: "400px", base: "300px" }} my={"2em"} mx={"auto"}>
        <Text fontSize={"36px"} textAlign={"center"}>📧</Text>
        <Heading textAlign={"center"} fontSize={"25px"} fontWeight={"500"}>
          Check your inbox
        </Heading>
        <Text mt={"1em"} fontSize={"12px"} color={"brand.gray-6"} textAlign={"center"}>
        Please check your email inbox for a verification mail.
        </Text>
        <Box my={"2em"}>
          <Button variant={"primary"} my={"1em"} width={"100%"}>
            Resend mail in
          </Button>

        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPasswordNotification;
