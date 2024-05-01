import {
  Box,
  Flex,
  FormControl,
  chakra,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { RiFilter2Fill, RiFilter3Line } from "react-icons/ri";
import { transactions } from "../../utils/sample_data";
import { formatCurrency } from "../../utils/currency";
import formatDate from "../../utils/formatDate";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import PaginationControl from "../../components/Pagination";

type Props = {};

function Transactions({}: Props) {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  return (
    <DashboardLayout active="Transactions" activeChild="">
      <Box padding={"32px 0px 32px 32px"} width={"100%"}>
        <Heading fontSize={"30px"}>Transactions</Heading>
        <Box my={"1em"}>
          <HStack
            color={"brand.primary"}
            cursor={"pointer"}
            onClick={() => setShowFilterOptions((_) => !_)}
          >
            <Text color={"brand.gray-6"}>
              {showFilterOptions
                ? "Close filter options"
                : "Show filter options"}
            </Text>
            {!showFilterOptions && <RiFilter3Line />}
          </HStack>
          <Box
            overflowY={"hidden"}
            height={showFilterOptions ? "180px" : 0}
            transition={"ease-in .3s"}
          >
            <Flex mt={"1em"} width={"600px"} justifyContent={"space-between"}>
              <FormControl width={"45%"}>
                <FormLabel fontWeight={"extrabold"} fontSize={"14px"}>
                  Status
                </FormLabel>
                <Select>
                  <option value="All">All</option>
                  <option value="Successful">Successful</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                </Select>
              </FormControl>
              <FormControl width={"45%"}>
                <FormLabel fontWeight={"extrabold"} fontSize={"14px"}>
                  Payment provider
                </FormLabel>
                <Select>
                  <option value="All">All</option>
                  <option value="Paystack">Paystack</option>
                  <option value="Flutterwave">Flutterwave</option>
                  <option value="Korapay">Korapay</option>
                </Select>
              </FormControl>
            </Flex>
            <HStack my={"1em"}>
              <Button variant={"primary"}>Apply filter</Button>
              <Button>Clear</Button>
            </HStack>
          </Box>
        </Box>
        <Box>
          <TableContainer
            border={"1px solid #EAECF0"}
            padding={"0"}
            borderRadius={"8px"}
            overflowX={"hidden"}
          >
            <Table variant="simple" overflowX={"hidden"}>
              <Thead bgColor={"#EAECF0"} color={"brand.black"}>
                <Tr>
                  <Th
                    fontSize={"14px"}
                    textTransform={"none"}
                    color={"brand.black"}
                  >
                    Transaction referece
                  </Th>
                  <Th
                    fontSize={"14px"}
                    textTransform={"none"}
                    color={"brand.black"}
                  >
                    Customer Name
                  </Th>
                  <Th
                    fontSize={"14px"}
                    textTransform={"none"}
                    color={"brand.black"}
                  >
                    Amount
                  </Th>
                  <Th
                    fontSize={"14px"}
                    textTransform={"none"}
                    color={"brand.black"}
                  >
                    Status
                  </Th>
                  <Th
                    fontSize={"14px"}
                    textTransform={"none"}
                    color={"brand.black"}
                  >
                    Payment provider
                  </Th>
                  <Th
                    fontSize={"14px"}
                    textTransform={"none"}
                    color={"brand.black"}
                  >
                    Time
                  </Th>
                </Tr>
              </Thead>
              <Tbody fontSize={"12px"}>
                {transactions.map((trx) => (
                  <Tr>
                    <Td>{trx.transaction_reference}</Td>
                    <Td>{trx.customer_name}</Td>
                    <Td>{formatCurrency(trx.amount)}</Td>
                    <Td><TransactionStatus status={trx.status} /></Td>
                    <Td><PaymentProvider provider={trx.payment_provider} /></Td>
                    <Td>{formatDate(trx.time)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <PaginationControl />
      </Box>
    </DashboardLayout>
  );
}

function TransactionStatus( props: { status: string } ){

    const statusColors = {
      Completed: {
        color: "#409261",
        fade: "#EDFFF3",
      }, // Faded green
      Pending: {
        color: "#D18A32",
        fade: "#FAF3EA",
      }, // Faded gray
      Failed: { color: "#D14532", fade: "#FFF3F2" }, // Faded red
    };

    const status = statusColors[props.status as keyof typeof statusColors];

    return(
        <Button fontSize={"12px"} fontWeight={"extrabold"} border={`1px solid ${status.color}`} width={"100px"} bgColor={ status.fade } color={status.color} size={"sm"}>{capitalizeFirstLetter(props.status) }</Button>
    )

}

function PaymentProvider( props: { provider: string }) {

    const providerHash = {
        korapay: "https://res.cloudinary.com/dles2mycv/image/upload/v1714090013/KRP_t1ecyy.webp",
        flutterwave: "https://res.cloudinary.com/dles2mycv/image/upload/v1714090013/flw_q51n8f.png",
        paystack: "https://res.cloudinary.com/dles2mycv/image/upload/v1714090014/pst_kes4px.jpg"
    }

    return (
      <Button
        aria-label=""
        size={"sm"}
        width={"120px"}
        fontSize={"12px"}
        rightIcon={<Image borderRadius={"5px"} width={"20px"} src={providerHash[props.provider as keyof typeof providerHash]} />}
      >
        { capitalizeFirstLetter(props.provider) }
      </Button>
    );
}

export default Transactions;
