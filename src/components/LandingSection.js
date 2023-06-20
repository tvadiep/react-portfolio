import React from "react";
import { Avatar, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Diep Tran!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar
      name="Diep Tran"
      src="https://media.licdn.com/dms/image/D5603AQEyAf4455imnQ/profile-displayphoto-shrink_400_400/0/1675432524081?e=1692835200&v=beta&t=p0yf3hFpFHmY92V05Hj5N56YLFIiXLtxTLHeHAJ0d6s"
      size="2xl"
    />
    <Heading size="xs">{greeting}</Heading>
    <Heading size="xl">{bio1}</Heading>
    <Heading size="xl">{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
