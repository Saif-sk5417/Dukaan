import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { InfoOutlineIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { GoHome } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { TbDiscount2 } from "react-icons/tb";
import { BsLightning } from "react-icons/bs";
import { IoColorPaletteOutline ,IoStatsChartSharp  } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiSquaresFourDuotone ,PiSpeakerSimpleHigh } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { LuRectangleHorizontal } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
const sidebarData = [
  { icon: GoHome, Name: "Home" },
  { icon: CgNotes, Name: "Oders" },
  { icon: PiSquaresFourDuotone, Name: "Products" },
  { icon: CiDeliveryTruck, Name: "Delivery" },
  { icon: PiSpeakerSimpleHigh, Name: "Marketing" },
  { icon: IoStatsChartSharp , Name: "Analytics" },
  { icon: LuRectangleHorizontal, Name: "Payouts" },
  { icon: TbDiscount2, Name: "Discounts" },
  { icon: FiUsers, Name: "Audience" },
  { icon: IoColorPaletteOutline, Name: "Appearance" },
  { icon: BsLightning, Name: "Pulgins" },
];

const SideTab = ({ icon, name }) => {
  return (
    <Flex
      marginTop={"15px"}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Icon as={icon} boxSize={5} color="white" />
      <Text
        fontSize={"14px"}
        color={"white"}
        marginLeft={"10px"}
        fontWeight="light"
        marginTop={"-2px"}
      >
        {name}
      </Text>
    </Flex>
  );
};

const LastTab = () => {
  return (
    <Box  width={"100%"} height={"65px"} marginTop={"120px"} bgColor={'#353C53'} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Flex align="center" justifyContent={"space-between"} spacing={4} padding={"3px 4px"}>
        <Box >
          <Icon as={CiWallet} boxSize={6} color="white" />
        </Box>
        <Flex flexDirection="column" marginLeft={"10px"} fontWeight={'light'}>
          <Text color="white" fontSize="16px">
            Available Balance
          </Text>
          <Text fontSize="12px" color="white" fontWeight={'light'}>
            <a href="" style={{ textDecoration: "underline" }}>
              22,0101
            </a>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const UserBox = () => {
  return (
    <Flex align="center" justify="start" spacing={4}>
      <Image
        boxSize="40px"
        borderRadius={"4px"}
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Flex flexDirection="column" marginLeft={"10px"}>
        <Text color="white" fontSize="16px">
          Andrew
        </Text>
        <Text fontSize="13px" color="white">
          <a href="" style={{ textDecoration: "underline" }}>
            Visit site
          </a>
        </Text>
      </Flex>
      <Box marginLeft={"40px"}>
        <Icon as={ChevronDownIcon} boxSize={6} color="white" />
      </Box>
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <Box
      width="208px"
      backgroundColor="#353C53"
      height="100vh"
      padding={"16px 10px"}
    >
      <UserBox />
      <Box marginTop={"20px"}>
        {sidebarData.map((ele) => {
          return <SideTab icon={ele.icon}name={ele.Name} />;
        })}
      </Box>
      <LastTab />
    </Box>
  );
};

export default Sidebar;
