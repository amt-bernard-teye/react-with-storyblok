import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export default function Page({blok}: any) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body 
        ? blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid}/>
        ))
        : null}
    </main>
  );
}