import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Container maxW="1230px" style={{ backgroundColor: "white" }} padding="0px">
      <Flex
        style={{
          backgroundColor: "#9fa7ab",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
        paddingBottom="14px"
        paddingTop="14px"
        paddingRight="24px"
        paddingLeft="24px"
        justifyContent={"center"}
      >
        <Text fontSize="2xl" marginRight="38px" color="white">
          Đăng ký nhận bản tin{" "}
        </Text>
        <InputGroup style={{ maxWidth: "635px" }}>
          <Input
            size="md"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            background="white"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box></Box>
    </Container>
  );
};

export default Footer;
