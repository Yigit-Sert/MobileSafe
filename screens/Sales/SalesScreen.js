import React, { useState, useEffect } from "react";
import { Box, FlatList, HStack, VStack, Text, Checkbox, Avatar, Spacer, Button, Center } from "native-base";

const Example = ({ navigation }) => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Product 1",
      price: "10.00 TL",
      quantity: 1,
      tax: 0.18, // 18% VAT
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Product 2",
      price: "15.00 TL",
      quantity: 2,
      tax: 0.08, // 8% VAT
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Product 3",
      price: "20.00 TL",
      quantity: 1,
      tax: 0.15, // 15% VAT
      image: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      name: "Product 4",
      price: "25.00 TL",
      quantity: 3,
      tax: 0.12, // 12% VAT
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      name: "Product 5",
      price: "12.47 TL",
      quantity: 2,
      tax: 0.10, // 10% VAT
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPriceSelected, setTotalPriceSelected] = useState(0);
  const [totalPriceAll, setTotalPriceAll] = useState(0);

  const handleCheckboxChange = (id, price) => {
    const isSelected = selectedItems.includes(id);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }

    setTotalPriceSelected(isSelected ? totalPriceSelected - price : totalPriceSelected + price);
  };

  useEffect(() => {
    const totalAll = data.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotalPriceAll(totalAll);
  }, [data]);

  return (
    <Box flex={1}>
      <FlatList
        data={data}
        p={5}
        renderItem={({ item }) => (
          <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Center>
                <Checkbox value={selectedItems.includes(item.id)} onChange={() => handleCheckboxChange(item.id, parseFloat(item.price))} />
              </Center>
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

      {/* Bottom Bars */}
      <HStack space={2} p={1} borderTopWidth={1} borderColor="muted.800">
        <VStack>
          <HStack w={80} space={2} p={1} bg="gray.200" borderTopWidth={1} borderColor="muted.800">
            <Text>Total Price (Selected): ${totalPriceSelected.toFixed(2)}</Text>
          </HStack>
          <HStack w={80} space={2} p={1} bg="gray.300" borderTopWidth={1} borderColor="muted.800">
            <Text>Total Price (All): ${totalPriceAll.toFixed(2)}</Text>
          </HStack>
        </VStack>
        <Button w={20} p={1} onPress={() => navigation.navigate('Payment')} colorScheme="info">
          PAYMENT
        </Button>
      </HStack>

      {/* Bottom Buttons */}
      <HStack space={2} p={1} borderTopWidth={1} borderColor="muted.800">
        <Button flex={1} colorScheme="primary" onPress={() => alert(`QR Scanner button pressed`)}>
          QR Scanner
        </Button>
        <Button flex={1} colorScheme="secondary" onPress={() => alert(`Categories button pressed`)}>
          Categories
        </Button>
      </HStack>
      <HStack p={1}>
        <Button flex={1} colorScheme="info" onPress={() => alert(`Show More button pressed`)}>
          Show More
        </Button>
      </HStack>
    </Box>
  );
};

export default Example;
