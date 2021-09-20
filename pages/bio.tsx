import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/layout";
import { UnorderedList } from "@chakra-ui/react";
import React, { FC } from "react";
import BackButton from "../components/BackButton";
import PageContainer from "../components/PageContainer";
import { GOODREADS_URL } from "../utils/constants";

const Bio: FC = () => {
  const listItem = (text: string) => {
    return (
      <ListItem fontSize="xl">
        <Text fontSize="xl">{text}</Text>
      </ListItem>
    );
  };
  return (
    <PageContainer>
      <BackButton />

      <Box
        backgroundImage="url('../public/pak_page.png')"
        backgroundSize="auto 100%"
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        width="100%"
        height="100%"
        border="1px solid black"
        borderRadius="10rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        paddingTop="2rem"
        paddingBottom="2rem"
      >
        <Heading as="h2" size="xl" marginBottom="1rem">
          I am:
        </Heading>
        <OrderedList>
          {listItem("a human living in Seattle")}
          {listItem("a full stack web/mobile software developer")}
          {listItem("a DeFi user and NFT enthusiast")}
          <ListItem fontSize="xl">
            <Text fontSize="xl">
              a{" "}
              <Link href="https://www.chia.net" textDecoration="underline">
                Chia
              </Link>{" "}
              farmer
            </Text>
          </ListItem>
          <ListItem fontSize="xl">
            <Text fontSize="xl">
              excited to{" "}
              <Link href="/social" textDecoration="underline">
                talk to you!
              </Link>
            </Text>
          </ListItem>
        </OrderedList>
        <Heading as="h2" size="xl" marginBottom="1rem" marginTop="4rem">
          I like:
        </Heading>
        <UnorderedList>
          {listItem("climbing, bouldering, hiking, camping")}
          {listItem("gardening, farming")}
          <ListItem fontSize="xl">
            <Text fontSize="xl">
              <Link href={GOODREADS_URL} textDecoration="underline">
                reading
              </Link>
            </Text>
          </ListItem>
          {listItem("building computers, coding")}
        </UnorderedList>
      </Box>
    </PageContainer>
  );
};

export default Bio;
