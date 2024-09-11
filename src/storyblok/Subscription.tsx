import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Subscription({blok}: any) {
  let subscription = {
    padding: "100px 0",
    backgroundColor: "var(--color-primary)"
  }
  
  let container = {
    width: "500px",
    margin: "auto"
  };

  return (
    <section style={subscription} {...storyblokEditable(blok)}>
      <div style={container}>
        {blok.details.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        <p className="text-center text-white">{blok.info}</p>
      </div>
    </section>
  );
}