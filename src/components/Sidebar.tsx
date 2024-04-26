import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiStackFill, RiStackLine, RiLinksLine } from "react-icons/ri";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { RiSettings3Line, RiSettings3Fill } from "react-icons/ri";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

type Props = {
    active: string
};

function Sidebar({ active }: Props) {
  const links = [
    {
      active: "Home",
      icon: AiOutlineHome,
      activeIcon: AiFillHome,
      link: "/dashboard"
    },
    {
      active: "Transactions",
      icon: RiStackLine,
      activeIcon: RiStackFill,
      link: "/dashboard/transactions"

    },
    {
      active: "Payment links",
      icon: RiLinksLine,
      activeIcon: RiLinksLine,
      link: "/dashboard/payment-links"
    },
    {
      active: "Customers",
      icon: HiOutlineUserGroup,
      activeIcon: HiUserGroup,
      link: "/dashboard/customers"

    },
    {
      active: "Settings",
      icon: RiSettings3Line,
      activeIcon: RiSettings3Fill,
      link: "/dashboard/settings"

    },
  ];
  return (
    <Box pr={"2em"} width={"300px"} height={"100vh"}>
      <Box my={"2em"}>
        {
            links.map(
                _ => <SidebarLink active={_.active} activeIcon={_.activeIcon} icon={_.icon} isActive={active === _.active} link={_.link} />
            )
        }
      </Box>
    </Box>
  );
}

function SidebarLink(props: { active: string, activeIcon: IconType, icon: IconType, isActive: boolean, link: string }){

    const Icon = props.isActive ? props.icon : props.icon;

    const navigate = useNavigate();

    return(
        <Box mb={"2em"} onClick={()=> navigate(props.link)} color={"#808080"}>
            <HStack borderRadius={"2px"} _hover={{ bgColor: "rgba(119, 149, 206, 0.16)", color: "brand.primary" }}  p={"5px 4px"} {...( props.isActive ? { bgColor: "rgba(119, 149, 206, 0.16)", color: "brand.primary" } : {})}  color={ props.isActive ? "brand.primary" : ""} fontSize={"16px"}>
                <Icon  />
                <Text >{props.active}</Text>
            </HStack>
        </Box>
    )

}  

export default Sidebar;
