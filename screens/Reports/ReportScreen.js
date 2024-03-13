import React from "react";
import { Box, VStack, HStack, Button } from "native-base";

const ReportScreen = () => {
    return (
      <Box flex={1}>
          <VStack p={5} space={5} justifyContent="space-between" borderTopWidth={1} borderColor="muted.800">
            <Button colorScheme="info">Previous Sales</Button>
            <Button colorScheme="info">Initial User List</Button>
            <Button colorScheme="info">Campaigns</Button>
            <Button colorScheme="info">Transactions</Button>
            <Button colorScheme="info">Unsent Saless</Button>
          </VStack>
      </Box>
    );
  };
  
  

export default ReportScreen;
