import { Box, HStack, Image, Text, chakra } from "@chakra-ui/react";
import React, { useState } from "react";
import {  ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ active, activeChild }: { active: string, activeChild: string }) {
  const sidebarLinks: SidebarLinkInterface[] = [

    {
      slug: "car-attributes",
      title: "Car Attributes",
      image: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713301/active/steering_t1t2dq.svg",
      activeImage: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713298/active/steering_gzxl0w.svg",
      expandable: true,
      children: [
        {
          title: "Make",
          slug: "make",
        },
        {
          slug: "model",
          title: "Model",
        },
        {
          title: "Series",
          slug: "series",
        },
        {
          title: "Trim",
          slug: "trim"
        },{
          title: "Package",
          slug: "package"
        },{
          title: "Drive Type",
          slug: "drive-type"
        },{
          title: "Body Type",
          slug: "body-type"
        },{
          title: "Body Style",
          slug: "body-style"
        }, {
          title: "Feature",
          slug: "feature"
        },{
          title: "Fuel Type",
          slug: "fuel-type"
        },{
          title: "Inspection Feature",
          slug: "inspection-feature"
        },{
          title: "Transmission",
          slug: "transmission"
        }
      ],
    },

    {
      slug: "car-management",
      title: "Car Management",
      expandable: false,
      children: [],
      image: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713301/active/car_ycqkcj.svg",
      activeImage: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713298/active/car_omjbod.svg",
    },
    {
      slug: "appointment",
      title: "Appointment Management",
      expandable: false,
      children: [],
      image: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713298/active/calender_k0urcj.svg",
      activeImage: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713298/active/calender_v2maf7.svg",
    },
    {
      slug: "order",
      title: "Order Management",
      expandable: false,
      children: [],
      image: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713301/active/order_lpw39t.svg",
      activeImage: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713298/active/order_vw42my.svg",
    },
    {
      slug: "dealership",
      title: "Dealership Management",
      expandable: false,
      children: [],
      image: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713301/active/dealership_meitdh.svg",
      activeImage: "https://res.cloudinary.com/dles2mycv/image/upload/v1706713298/active/dealership_rgf7lf.svg",
    },
  ];
  return (
    <Box pr={"2em"} width={"300px"} height={"100vh"} >
      <Box my={"2em"}>
        {sidebarLinks.map((_) => (
          <SidebarLink active={active} activeChild={activeChild} payload={_} />
        ))}
      </Box>
    </Box>
  );
}

function SidebarLink({ payload, active, activeChild }: { payload: SidebarLinkInterface, active: string, activeChild: string }) {
  const [image, setImage] = useState( active === payload.slug ? payload.activeImage : payload.image);
  
  const [isOpen, setIsOpen] = useState( payload.children.some( _ => _.slug === activeChild ) );
  const navigate = useNavigate()
  return (
    <Box mb={"2em"} color={"#808080"}>
      <HStack
        onClick={() => {
          setIsOpen((_) => !_)
          if( payload.children.length === 0  ) navigate(`/dashboard/${payload.slug}`)
        }}
        onMouseEnter={() => setImage(payload.activeImage as string)}
        onMouseLeave={() => setImage( active !== payload.slug ? payload.image : payload.activeImage )}
        transition={"0.5s ease"}
        cursor={"pointer"}
        p={"5px 4px"}
        {...( payload.slug === active ? { bgColor: "#FFF3F2", color: "brand.primary" } : {})}
        _hover={{ bgColor: "#FFF3F2", color: "brand.primary" }}

        borderRadius={"2px"}
        position={"relative"}
      >
        <Image src={image} />
        <Text fontSize={"14px"}>{payload.title}</Text>
        <Box position={"absolute"} right={2} top={0}>
          {payload.children.length > 0 ? (
            isOpen ? (
              <ChevronUpIcon />
            ) : (
              <ChevronDownIcon />
            )
          ) : null}
        </Box>
      </HStack>
      <Box
        {...(payload.children.length > 0 ? { transition: "0.5s ease" } : {})}
        height={isOpen && payload.children.length > 0 ? "350px" : 0}
        overflowY="hidden"
        transform="translateX(2em)"
        mt=".5em"
      >
        {payload.children.map((item) => (
          <chakra.span onClick={()=> navigate(`/dashboard/attribute/${item.slug}`)} transition={".5s ease"} color={ item.slug === activeChild ? "brand.primary" : "#808080"} _hover={{ color: "brand.primary"}} cursor={"pointer"} mb="1em" fontSize="12px" display="block">
            {item.title}
          </chakra.span>
        ))}
      </Box>
    </Box>
  );
}

interface SidebarLinkInterface {
  slug: string;
  image: string;
  activeImage?: string;
  title: string;
  expandable: boolean;
  children: SidebarLinkChildinterface[];
}

interface SidebarLinkChildinterface
  extends Pick<SidebarLinkInterface, "title" | "slug"> {}
