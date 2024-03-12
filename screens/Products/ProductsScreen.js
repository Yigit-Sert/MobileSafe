import React from "react";
import { VStack, Input, FlatList, HStack, Icon, Text, NativeBaseProvider, Center, Box, Avatar, Spacer, Button, Card, Heading } from "native-base";
import { Dimensions } from 'react-native';

function SearchBar() {
  return (
    <VStack my="4" space={5} w="100%" maxW="300px" divider={
      <Box px="2">
      </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" />} />
      </VStack>
    </VStack>
  );
}

export default () => {
  const data = [
    {
      "id": 1,
      "name": "Apple",
      "image": "https://example.com/apple.jpg",
      "price": 1.50,
      "category": "fruit",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Banana",
      "image": "https://example.com/banana.jpg",
      "price": 0.75,
      "category": "fruit",
      "quantity": 20
    },
    {
      "id": 3,
      "name": "Orange",
      "image": "https://example.com/orange.jpg",
      "price": 1.25,
      "category": "fruit",
      "quantity": 15
    },
    {
      "id": 4,
      "name": "Tomato",
      "image": "https://example.com/tomato.jpg",
      "price": 0.50,
      "category": "vegetable",
      "quantity": 25
    },
    {
      "id": 5,
      "name": "Cucumber",
      "image": "https://example.com/cucumber.jpg",
      "price": 0.75,
      "category": "vegetable",
      "quantity": 20
    },
    {
      "id": 6,
      "name": "Lettuce",
      "image": "https://example.com/lettuce.jpg",
      "price": 1.00,
      "category": "vegetable",
      "quantity": 15
    },
    {
      "id": 7,
      "name": "Bread",
      "image": "https://example.com/bread.jpg",
      "price": 2.50,
      "category": "bakery",
      "quantity": 10
    },
    {
      "id": 8,
      "name": "Milk",
      "image": "https://example.com/milk.jpg",
      "price": 3.00,
      "category": "dairy",
      "quantity": 5
    },
    {
      "id": 9,
      "name": "Eggs",
      "image": "https://example.com/eggs.jpg",
      "price": 2.00,
      "category": "dairy",
      "quantity": 12
    },
    {
      "id": 10,
      "name": "Yogurt",
      "image": "https://example.com/yogurt.jpg",
      "price": 1.75,
      "category": "dairy",
      "quantity": 8
    }
  ];

  const screenWidth = Dimensions.get('window').width;
  const desiredCardWidth = screenWidth * 0.9; // Reduce card width by half

  return (
    <NativeBaseProvider>

      <Center>
        <SearchBar />
      </Center>

      <Center>
        <FlatList
          data={data}
          p={5}
          renderItem={({ item }) => (

            <Card style={{ width: desiredCardWidth }}>
              <VStack space={2} alignItems="center">
                <Center>
                  <Avatar size="48px" source={{ uri: item.image }} />
                </Center>
                <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                  {item.name}
                </Text>
                <Text m={2} color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                  Quantity: {item.quantity}
                </Text>
                <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800">
                  Price: {item.price}
                </Text>
                <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800">
                  Category: {item.category}
                </Text>
              </VStack>
            </Card>

          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Center>
    </NativeBaseProvider>

  );
};


/* import React from 'react';
import { FlatList, Box, HStack, Center, Checkbox, Avatar, VStack, Text, Spacer, Button } from 'native-base';

const ProductList = () => {
  const data = [
    {
      "id": 1,
      "name": "Apple",
      "image": "https://example.com/apple.jpg",
      "price": 1.50,
      "category": "fruit",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Banana",
      "image": "https://example.com/banana.jpg",
      "price": 0.75,
      "category": "fruit",
      "quantity": 20
    },
    {
      "id": 3,
      "name": "Orange",
      "image": "https://example.com/orange.jpg",
      "price": 1.25,
      "category": "fruit",
      "quantity": 15
    },
    {
      "id": 4,
      "name": "Tomato",
      "image": "https://example.com/tomato.jpg",
      "price": 0.50,
      "category": "vegetable",
      "quantity": 25
    },
    {
      "id": 5,
      "name": "Cucumber",
      "image": "https://example.com/cucumber.jpg",
      "price": 0.75,
      "category": "vegetable",
      "quantity": 20
    },
    {
      "id": 6,
      "name": "Lettuce",
      "image": "https://example.com/lettuce.jpg",
      "price": 1.00,
      "category": "vegetable",
      "quantity": 15
    },
    {
      "id": 7,
      "name": "Bread",
      "image": "https://example.com/bread.jpg",
      "price": 2.50,
      "category": "bakery",
      "quantity": 10
    },
    {
      "id": 8,
      "name": "Milk",
      "image": "https://example.com/milk.jpg",
      "price": 3.00,
      "category": "dairy",
      "quantity": 5
    },
    {
      "id": 9,
      "name": "Eggs",
      "image": "https://example.com/eggs.jpg",
      "price": 2.00,
      "category": "dairy",
      "quantity": 12
    },
    {
      "id": 10,
      "name": "Yogurt",
      "image": "https://example.com/yogurt.jpg",
      "price": 1.75,
      "category": "dairy",
          "quantity": 8
      }
  ];

  const handleCheckboxChange = (productId, price) => {
    // Implement your checkbox change logic here
  };

  return (
    <FlatList
      data={data}
      p={5}
      renderItem={({ item }) => (
        <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
          <HStack space={[2, 3]} justifyContent="space-between">
            
            <Center>
              <Avatar size="48px" source={{ uri: item.image }} />
            </Center>
            <Center>
              <VStack>
                <Text _dark={{ color: "warmGray.50" }} color="coolGray.800" bold>
                  {item.name}
                </Text>
                <HStack>
                  <Text m={2} color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                    X {item.quantity}
                  </Text>
                  <Text m={2} color="primary.700" _dark={{ color: "warmGray.200" }}>
                    {item.tax}
                  </Text>
                </HStack>
              </VStack>
            </Center>
            <Spacer />
            <Center>
              <Text fontSize="xs" _dark={{ color: "warmGray.50" }} color="coolGray.800" alignSelf="flex-start">
                {item.price}
              </Text>
            </Center>
            <Button size="sm" onPress={() => alert(`Information button pressed for ${item.name}`)}>
              Info
            </Button>
            <Button size="sm" onPress={() => alert(`Delete button pressed for ${item.name}`)} ml={2} colorScheme="danger">
              Delete
            </Button>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ProductList;
 */