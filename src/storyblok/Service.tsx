import { StoryblokComponent } from "@storyblok/react";

export default function Service({blok}: any) {
  let active = blok.isFirst === "Yes" && "bg-main text-white";
  let className = active 
    ? "rounded px-3 py-4 " + active
    : "px-3 py-4";

  return (
    <div className={className}>
      <h1 className={active ? "text-white" : "text-gray-200"}>{blok.counter}</h1>
      <h6 className={active ? "text-white" : "text-main"}>{blok.title}</h6>
      <p>{blok.description}</p>
      {blok.links.map((blok: any) => {
        return <StoryblokComponent blok={blok} key={blok._uid} />
      })}
    </div>
  );
}