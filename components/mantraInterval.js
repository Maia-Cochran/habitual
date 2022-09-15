// import React, { useState, useEffect } from "react";
// import { Box, FlatList, NativeBaseProvider, Text } from "react-native";

// const mantraData = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     const resp = await fetch("http://localhost:3001/mantra");
//     const data = await resp.json();
//     setData(data);
//     setLoading(false);
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
//         {item}
//       </Box>
//     );
//   };
//   useEffect(() => {
//     fetchData();
//     const dataInterval = setInterval(() => fetchData(), 5 * 1000);
  
//     return () => clearInterval(dataInterval);
//   }, []);


//   return (
//     <NativeBaseProvider>
     
//       <Box> Fetch API</Box>
//         {loading && <Box>Loading..</Box>}
//         {data && (
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         )}

//     </NativeBaseProvider>
//   );
//   }

// export default mantraData