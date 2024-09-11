import { StoryblokComponent, useStoryblok } from "@storyblok/react";

export default function IndexPage() {
  const slug = "home";
  const story = useStoryblok(slug, {version: "draft"});

  if (!story || !story.content) {
    return <p>Loading...</p>;
  }

  return <StoryblokComponent blok={story.content} />
}