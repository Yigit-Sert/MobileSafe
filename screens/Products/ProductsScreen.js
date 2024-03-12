import React from "react";
import { VStack, Input, Ionicons, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";

function SearchBar() {
    return (
        <VStack my="4" space={5} w="100%" maxW="300px" divider={
            <Box px="2">
            </Box>}>
            <VStack w="100%" space={5} alignSelf="center">
                <Input placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" />} />
            </VStack>
            <Box w="100%" alignSelf="center">
                <Text fontSize="sm" bg={'grey'} color="black.200">Search for products</Text>
            </Box>
        </VStack>
    );
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <SearchBar />
            </Center>
        </NativeBaseProvider>
    );
};
