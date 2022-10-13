import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import NAV_ITEMS from "../../Data/NAV_ITEMS";
import { ChevronRightIcon, SearchIcon } from "@chakra-ui/icons";
import DesktopSubNav from "./DesktopSubNav";
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack
      direction={"row"}
      spacing={4}
      flex={{ base: 1 }}
      justify={{ base: "center", md: "start" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child, index) => {
                    return <DesktopSubNav key={index} {...child} />;
                  })}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Stack
        spacing={4}
        flex={{ base: 1 }}
        justify={{ base: "center", md: "start" }}
        align={{ base: "center" }}
      >
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "text"}
            placeholder="Search"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </Stack>
  );
};

export default DesktopNav;
