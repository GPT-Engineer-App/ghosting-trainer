import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";
import { FaHome, FaCog } from "react-icons/fa";

const Navigation = () => {
  return (
    <HStack spacing={4}>
      <Link to="/">
        <Button leftIcon={<FaHome />} colorScheme="teal">
          Home
        </Button>
      </Link>
      <Link to="/configuration">
        <Button leftIcon={<FaCog />} colorScheme="teal">
          Configuration
        </Button>
      </Link>
    </HStack>
  );
};

export default Navigation;
