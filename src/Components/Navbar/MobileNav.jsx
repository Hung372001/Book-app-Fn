import React from "react";

import MobileNavItem from "./MobileNavItem";
import NAV_ITEMS from "../../Data/NAV_ITEMS";
import { Stack, useColorModeValue } from "@chakra-ui/react";
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
