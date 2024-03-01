import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar.jsx';
import { Headline } from './components/Headline.jsx';
import { Filter } from './components/Filter.jsx';
import './App.css';
import { Container, Card, CardBody, CardFooter, Heading, Image, Divider, Grid, Spacer, Flex } from '@chakra-ui/react';


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/people/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok, please try again later.');
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
    <div>
      <Container wd='100%'>
        <Flex>
        <SearchBar />
        <Spacer />
        <Headline />
        <Filter />
        </Flex>
      </Container>
        <Grid templateColumns='repeat(5, 2fr)' gap={6}>
          {data.results.map((item, id) => (
            <Card
              maxW='sm'
              bg='grey.600'>
              <CardBody>
                {/* <div key={index.toString()} /* className={`this`}> */}
                <Image
                  objectFit='cover'
                  src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`}
                  alt={item.name}
                  borderRadius='lg'>
                </Image>
                <Divider />
                <CardFooter>
                  <Heading
                    size='md'>
                    {item.name || 'Name not available'}
                  </Heading>
                </CardFooter>
                {/* </div> */}
              </CardBody>
            </Card>
          ))}
        </Grid>
    </div>
  );
}

export default App;
