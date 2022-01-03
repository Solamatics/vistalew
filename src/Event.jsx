import { useState } from "react";
import { data } from "./data";

import { Box, Flex, Text, Image, Button, Grid } from "@chakra-ui/react";

const Event = () => {
  const [people, setPeople] = useState(data);

  const removerPerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <Box>
      <Text textAlign="left" pl="5" mb="5" fontWeight="bold">
        {people.length} birthdays today
      </Text>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <>
            <Grid
              templateColumns="auto 1fr"
              alignItems="center"
              columnGap="0.75rem"
              mb="1.5rem"
              key={id}
            >
              <Image
                mb="5"
                borderRadius="full"
                boxSize="100px"
                src={image}
                alt="name"
                objectFit="cover"
              />
              <Box pl="3">
                <Text fontWeight="bold">{name}</Text>
                <Text>{age} years</Text>
                <Button mb="3" onClick={() => removerPerson(id)}>
                  Delete Person
                </Button>
              </Box>
            </Grid>
          </>
        );
      })}

      <Button onClick={() => setPeople([])}>Clear All</Button>
      <Button ml="3" onClick={() => setPeople(data)}>Refresh</Button>
    </Box>
  );
};

export default Event;
