import { storyblokEditable } from "@storyblok/react";
 
export default function Feature({ blok }: any) {
  return (
    <div {...storyblokEditable(blok)} className="col-12 col-md-4">
      <h3>{blok.name}</h3>
    </div>
  );
}