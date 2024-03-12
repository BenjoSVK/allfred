import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Grid,
  Box,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import Navbar from "./containers/Navbar/Navbar";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/people/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok, please try again later."
          );
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData.results); // For debugging purposes
      })
      .catch((error) => {
        setError(error); // Handle any errors
      })
      .finally(() => {
        setLoading(false); // Loading is complete
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Display the name if it exists in the fetched data
  return (
    <Box>
      <Navbar />
      <Flex justify="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap={6}
          px="25px"
          py="15px"
        >
          {data.results.map((item, id) => (
            <Card
              maxW="sm"
              bg="white"
              key={id.toString()}
              borderRadius="xl"
              borderBottom="8px"
              borderColor="blackAlpha.300"
              overflow="hidden"
            >
              <CardBody>
                <Image
                  src={`https://starwars-visualguide.com/assets/img/characters/${
                    id + 1
                  }.jpg`}
                  alt={item.name}
                  fit='cover'
                  borderRadius="md"
                  roundedBottom="md"
                  maxW={{
                    base: "100%",
                    xl: "100%",
                  }}
                ></Image>
                <CardFooter px="0" alignItems="center" py="0" paddingTop="10px">
                  <Heading
                    flexWrap="wrap"
                    size="md"
                    pr="5px"
                    alignItems="center"
                  >
                    {item.name || "Name not available"}
                  </Heading>
                  <Spacer />
                  <Button
                    leftIcon={<ViewIcon />}
                    variant="ghost"
                    colorScheme="blackAlpha"
                    size="md"
                    iconSpacing="0"
                    rounded="full"
                  />
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}

export default App;
