import { Box, Flex, Text } from "@chakra-ui/react";
import "./App.css";
import Event from "./Event";

function App() {
  return (
    <Box
      minHeight="90vh"
      margin="0 auto"
      maxWidth="1170px"
      width="90vw"
      textAlign="center"
      marginTop="5rem"
      mb="5rem"
      pt="5rem"
      pb="1.5rem"
      pl="2rem"
      pr="2rem"
      borderRadius="0.25rem"
      boxShadow="0 5px 15px rgba(0, 0, 0, 0.4)"
      bg="whiteAlpha.400"
    > 
      <Event />
    </Box>
  );
}

export default App;
