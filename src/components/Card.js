import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="#ffffff" borderRadius={15}>
      <Image src={imageSrc} alt={"image"} borderRadius={15} />
      <VStack padding={10} display="flex" alignItems="sefl-start">
        <Heading color="black" fontSize="xl">{title}</Heading>
        <Text color="gray.500">{description}</Text>
        <HStack>
          <Text color="black">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#000"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
