import React, { useState } from 'react';
import { View, Text, Image, Button } from 'native-base';

const RandomProductViewer = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const product = data[randomIndex];
    setSelectedProduct(product);
  };

  return (
    <View p={4} alignItems='center'>
      <Button onPress={getRandomProduct}>Show Random Product</Button>

      {selectedProduct && (
        <View mt={4}>
          <Text>Name: {selectedProduct.name}</Text>
          <Text>Price: {selectedProduct.price}</Text>
          <Text>Quantity: {selectedProduct.quantity}</Text>
          <Text>Tax: {selectedProduct.tax}</Text>
          <Image
            source={{ uri: selectedProduct.image }}
            alt='Product Image'
            size='xl'
            mt={4}
          />
        </View>
      )}
    </View>
  );
};

const App = () => {
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

  return (
    <View flex={1} justifyContent='center' alignItems='center'>
      <RandomProductViewer data={data} />
    </View>
  );
};

export default App;
