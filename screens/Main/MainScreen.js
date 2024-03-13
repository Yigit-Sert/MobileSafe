import React from 'react';
import { Box, VStack, Button } from 'native-base';
const MainScreens = ({ navigation }) => {
    return (
        <Box flex={1} bg="white">
            <VStack p={5} space={5} justifyContent="space-between" borderTopWidth={1} borderColor="muted.800">
                <Button colorScheme={'primary'} onPress={() => navigation.navigate('Sales')}>Sales</Button>
                <Button colorScheme={'primary'} onPress={() => navigation.navigate('Payment')}>Payment</Button>
                <Button colorScheme={'primary'} onPress={() => navigation.navigate('Product')}>Product</Button>
                <Button colorScheme={'primary'} onPress={() => navigation.navigate('Settings')}>Settings</Button>
                <Button colorScheme={'primary'} onPress={() => navigation.navigate('Report')}>Report</Button>
                <Button colorScheme={'warning'} onPress={() => navigation.navigate('QRCodeScanner')}>QRCodeScanner</Button>
            </VStack>
        </Box>
    );
};

export default MainScreens;