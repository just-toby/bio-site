import { Box, Link, Text } from "@chakra-ui/layout";
import { FC, ReactElement, ReactNode, useState } from "react";

export type LinkButtonSize = "small" | "medium";

export interface LinkButtonProps {
  icon: ReactElement;
  title?: string;
  isExternal?: boolean;
  linkUrl?: string;
  size?: LinkButtonSize;
}

const LinkButton: FC<LinkButtonProps> = (props: LinkButtonProps) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={props.linkUrl}
      isExternal={props.isExternal}
      _visited={{ textDecoration: "none" }}
      _hover={{ textDecoration: "none" }}
      _active={{ textDecoration: "none" }}
      textDecoration="none"
      _focus={{
        outline: "none",
        border: "none",
      }}
    >
      <Box
        height={props.size === "small" ? "6rem" : "8rem"}
        display="flex"
        flexDir="row"
        borderRadius="4rem"
        opacity={hover ? 0.8 : 1}
        border={hover ? "1px solid white" : "1px solid black"}
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="2rem"
        paddingRight="2rem"
        cursor="pointer"
      >
        {props.icon}
        {hover && props.title != null ? (
          <Text
            fontSize="2xl"
            fontWeight="bold"
            marginLeft="2rem"
            textDecoration="none"
          >
            {props.title}
          </Text>
        ) : null}
      </Box>
    </Link>
  );
};

export default LinkButton;
