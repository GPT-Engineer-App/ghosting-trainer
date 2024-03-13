import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <Button>
        Hello world! <FaPlus />
      </Button>
    </>
  );
};

export default Index;
