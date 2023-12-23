import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { InfoOutlineIcon, ChevronDownIcon } from "@chakra-ui/icons";

const OverView = () => {
  return (
    <>
      <Flex padding={"10px 30px 0px 30px"} justifyContent={"space-between"} marginTop={'50px'}>
        <Text fontSize={"20px"}>Overview</Text>
        <Flex border={"1px"} padding={"2px"} borderColor={"gray.500"}>
          <Text color={"gray.500"}>Last Month</Text>
          <Icon
            fontSize={"20px"}
            as={ChevronDownIcon}
            boxSize={6}
            color={"gray.500"}
          />
        </Flex>
      </Flex>
      <Flex padding={"30px"}>
        <Box
          width="33%"
          height="150px"
          marginRight="4"
          borderRadius={"8"}
          padding={"10px"}
        >
          <HStack spacing={4}>
            <Text>Next Payout</Text>
            <Icon as={InfoOutlineIcon} boxSize={4} />
          </HStack>
          <Text fontSize={"32px"}>₹92,312.20</Text>
          <Text fontSize={"13px"}>Next Payout Date Today 4.00pm </Text>
          <Text color={"#146EB4"} fontSize={"13px"}>
            <a href="#">View 13 Orders</a>
          </Text>
        </Box>
        <Box
          width="33%"
          height="150px"
          marginRight="4"
          borderRadius={"8"}
          padding={"10px"}
        >
          <HStack spacing={4}>
            <Text>Next Payout</Text>
            <Icon as={InfoOutlineIcon} boxSize={4} />
          </HStack>
          <Text fontSize={"32px"}>₹92,312.20</Text>
          <Text fontSize={"13px"} color={"white"}>
            Next Payout Date Today 4.00pm{" "}
          </Text>
          <Text color={"#146EB4"} fontSize={"13px"}>
            <a href="#">View 13 Orders</a>
          </Text>
        </Box>
        <Box
          width="33%"
          height="150px"
          marginRight="4"
          borderRadius={"8"}
          padding={"10px"}
        >
          <HStack spacing={4}>
            <Text>Amount Processed</Text>
            <Icon as={InfoOutlineIcon} boxSize={4} />
          </HStack>
          <Text fontSize={"32px"}>₹92,312.20</Text>
          <Text fontSize={"13px"} color={"white"}>
            Next Payout Date Today 4.00pm{" "}
          </Text>
          <Text color={"#146EB4"} fontSize={"13px"}>
            <a href="#">View 13 Orders</a>
          </Text>
        </Box>
      </Flex>
    </>
  );
};

const ContentBox = () => {
  return (
    <Box width="100%" overflowY="auto" height="100vh">
      <OverView />
      <Text fontSize={"20px"} padding={"30px"} fontWeight={"500"} marginTop={'-40px'}>
        Transaction | This Month
      </Text>
      <HStack spacing={5} padding={"40px"} marginTop={"-30px"}>
        <Button _hover={{ bgColor: "#146EB4", color: "white" }} borderRadius={'40px'}>
          Payouts (22)
        </Button>
        <Button _hover={{ bgColor: "#146EB4", color: "white" }} borderRadius={'40px'}>
          Refund (6)</Button>
      </HStack>
    </Box>
  );
};

export default ContentBox;
