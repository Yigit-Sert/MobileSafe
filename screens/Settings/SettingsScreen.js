import React from "react";
import { Box, VStack, HStack, Button } from "native-base";

const Example = () => {
    return (
      <Box flex={1}>
          <VStack p={5} space={5} justifyContent="space-between" borderTopWidth={1} borderColor="muted.800">
            <Button colorScheme="warning">Theme</Button>
            <Button colorScheme="warning">Language Setting</Button>
            <Button colorScheme="warning">Printer Test</Button>
            <Button colorScheme="warning">Manuel Synchronization</Button>
          </VStack>
      </Box>
    );
  };
  
  

export default Example;
