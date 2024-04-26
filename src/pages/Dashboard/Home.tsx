import { Box, Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import DashboardLayout from "../../components/DashboardLayout";
import Chart, { CategoryScale, ChartData } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
Chart.register(CategoryScale);

type Props = {};

function Home({}: Props) {

  return (
    <DashboardLayout active="Home" activeChild="">
      <Box padding={"32px 0px 32px 32px"} width={"100%"}>
        <Heading fontSize={"30px"}>Good morning ☀️</Heading>
        <Text my={"1em"} fontSize={"14px"} color={"brand.gray-6"}>
          Welcome to your dashboard. See a quick summary of your transactions
          below.
        </Text>
        <Box mt={"3em"}>
          <Text fontWeight={"extrabold"} mb="1em">
            Overwiew
          </Text>
          <Flex justifyContent={"space-between"} w={"850px"}>
            <Box
              color={"white"}
              bgColor={"brand.primary"}
              padding={"2em"}
              borderRadius={"8px"}
              border={"1px solid #E4E4E4"}
              width={"400px"}
            >
              <Text color={"whitesmoke"}>Total Revenue</Text>
              <Heading mt={".5em"} fontSize={"30px"}>
                ₦200,000,000.00
              </Heading>
            </Box>
            <Box
              padding={"2em"}
              borderRadius={"8px"}
              border={"1px solid #E4E4E4"}
              width={"400px"}
              position={"relative"}
            >
              <Button
                position={"absolute"}
                size={"sm"}
                right={"2em"}
                variant={"primary"}
              >
                Withdraw
              </Button>
              <Text color={"brand.gray-6"}>Available balance</Text>
              <Heading mt={".5em"} fontSize={"30px"}>
                ₦200,000,000.00
              </Heading>
            </Box>
          </Flex>
        </Box>
        {/* <Box mt={"2em"}>
          <Text fontWeight={"extrabold"} mb="1em">
            Transaction volume
          </Text>
          <Box width={"50%"}>
            <Bar data={chartData} />;
          </Box>
        </Box> */}
      </Box>
    </DashboardLayout>
  );
}

export default Home;
