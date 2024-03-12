import React, { useState, useEffect } from "react";
import { Box, Content, HStack, VStack, Text, Button, Container, Center, ListItem, Form, Item, Input, } from "native-base";

const Example = ({ navigation }) => {


  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPriceSelected, setTotalPriceSelected] = useState(0);
  const [totalPriceAll, setTotalPriceAll] = useState(0);

  const handleCheckboxChange = (id, price) => {
    const isSelected = selectedItems.includes(id);
    /* 
        if (isSelected) {
          setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
        } else {
          setSelectedItems([...selectedItems, id]);
        }
    
        setTotalPriceSelected(isSelected ? totalPriceSelected - price : totalPriceSelected + price); */
  };



  return (
    <Box flex={1}>
      <Box flex={1}>
        <Center>
          <Box p={4} w="full" m={2} bg="white" shadow={2} borderRadius={10}>
            {/* Content */}
            <HStack justifyContent="space-between">
              <VStack>
                <Text fontSize="lg" fontWeight="bold">Document ID: </Text>
              </VStack>
              <VStack>
                <Text>Date: </Text>
                <Text>Time: </Text>
              </VStack>
            </HStack>
            <HStack mt={4} justifyContent="space-between">
              <Text>Product Amount: </Text>
              <Text fontSize="lg" fontWeight="bold">Total Payment: </Text>
            </HStack>
          </Box>
        </Center>

        {/* Bottom Bars */}
        <VStack flex={1} justifyContent="flex-end">
          <HStack space={2} p={1} borderTopWidth={1} borderColor="muted.800">
            <VStack>
              <HStack w={80} space={2} p={1} bg="gray.200" borderTopWidth={1} borderColor="muted.800">
                <Text>Total Price (Selected): ${totalPriceSelected.toFixed(2)}</Text>
              </HStack>
              <HStack w={80} space={2} p={1} bg="gray.300" borderTopWidth={1} borderColor="muted.800">
                <Text>Total Price (All): ${totalPriceAll.toFixed(2)}</Text>
              </HStack>
            </VStack>
            <Button w={20} p={1} onPress={() => alert(`Card button pressed`)} colorScheme="info">
              FINISH DOCUMENT
            </Button>
          </HStack>
        </VStack>

        {/* Bottom Buttons */}
        <HStack space={2} p={1} borderTopWidth={1} borderColor="muted.800">
          <Button flex={1} colorScheme="primary" onPress={() => alert(`Card button pressed`)}>
            Card
          </Button>
          <Button flex={1} colorScheme="secondary" onPress={() => alert(`Cash button pressed`)}>
            Cash
          </Button>
        </HStack>
        <HStack p={1}>
          <Button flex={1} colorScheme="info" onPress={() => alert(`Show More button pressed`)}>
            Show More
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Example;