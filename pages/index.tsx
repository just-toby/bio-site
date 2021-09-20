import { Book, Globe, HardDrive, Share2 } from "react-feather";
import { GITHUB_URL, RESUME_URL } from "../utils/constants";
import PageContainer from "../components/PageContainer";
import React from "react";
import LinkButton from "../components/LinkButton";

export default function Home() {
  return (
    <PageContainer>
      <LinkButton
        key="bio"
        title="Bio"
        icon={<Globe color="black" size="4rem" />}
        linkUrl="/bio"
        isExternal={false}
      />
      <LinkButton
        key="resume"
        title="Resume"
        icon={<Book color="black" size="4rem" />}
        linkUrl={RESUME_URL}
        isExternal={true}
      />
      <LinkButton
        key="github"
        title="Github"
        icon={<HardDrive color="black" size="4rem" />}
        linkUrl={GITHUB_URL}
        isExternal={true}
      />
      <LinkButton
        key="social"
        title="Social"
        icon={<Share2 color="black" size="4rem" />}
        linkUrl={"/social"}
        isExternal={false}
      />
    </PageContainer>
  );
}
