import { useLocation } from "react-router-dom";
import { useStoryblok, StoryblokComponent } from "@storyblok/react";

import Spinner from "../components/molecules/Spinner/Spinner";

export default function Blogs() {
  const { pathname } = useLocation();
  const slug = pathname.replace("/", "");
  const story = useStoryblok(slug, {version: "draft"});

  if (!story || !story.content) {
    return <Spinner />;
  }

  return <StoryblokComponent blok={story.content} />
}