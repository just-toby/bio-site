import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React, { FC } from "react";
import { CornerUpLeft, Facebook, Linkedin, Send, Twitter } from "react-feather";
import PageContainer from "../components/PageContainer";
import LinkButton from "../components/LinkButton";
import {
  FACEBOOK_URL,
  LINKED_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  URBIT_ID,
} from "../utils/constants";
import BackButton from "../components/BackButton";

const Socials: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <Box
        display="flex"
        flexDir="row"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        <LinkButton
          key="twitter"
          icon={<Twitter color="black" size="4rem" />}
          linkUrl={TWITTER_URL}
          isExternal={true}
        />
        <LinkButton
          key="facebook"
          icon={<Facebook color="black" size="4rem" />}
          linkUrl={FACEBOOK_URL}
          isExternal={true}
        />
        <LinkButton
          key="linkedin"
          icon={<Linkedin color="black" size="4rem" />}
          linkUrl={LINKED_URL}
          isExternal={true}
        />
        <LinkButton
          key="telegram"
          icon={<Send color="black" size="4rem" />}
          linkUrl={TELEGRAM_URL}
          isExternal={true}
        />
        <LinkButton
          key="urbit"
          title={URBIT_ID}
          icon={
            <Image
              src="sigil.png"
              height="4rem"
              width="4rem"
              borderRadius="2rem"
            />
          }
        />
      </Box>
    </PageContainer>
  );
};

export default Socials;
