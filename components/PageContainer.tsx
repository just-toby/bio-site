import { Link } from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import styles from "../styles/Home.module.css";

const PageContainer: FC = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>eddie dugan</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{props.children}</main>

      <footer className={styles.footer}>
        <Link
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="4rem"
          isExternal
          _hover={{ opacity: 0.8 }}
          href="https://www.lostpoets.xyz"
          target="_blank"
          rel="noopener noreferrer"
          fontSize="small"
        >
          Image Source
        </Link>
      </footer>
    </div>
  );
};

export default PageContainer;
