import { Box } from "@chakra-ui/layout";
import React, { FC } from "react";
import { CornerUpLeft } from "react-feather";
import LinkButton from "./LinkButton";

const BackButton: FC = () => {
  return (
    <Box
      position="absolute"
      top="50% - 1.5rem"
      left="2rem"
      _hover={{ opacity: 0.8 }}
    >
      <LinkButton
        key="back"
        icon={<CornerUpLeft color="black" size="2rem" />}
        linkUrl="/"
        isExternal={false}
        size="small"
      />
    </Box>
  );
};

export default BackButton;
