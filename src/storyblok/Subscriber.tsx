import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

type SubscriberProp = {
  blok: {
    details: any[]
  };
}

export default function Subscriber({blok}: SubscriberProp) {
  let componentStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "30px 0"
  };

  return (
    <div style={componentStyle} {...storyblokEditable(blok)}>
      {blok.details.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}