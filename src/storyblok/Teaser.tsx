import { storyblokEditable } from "@storyblok/react";
 
export default function Teaser ({ blok }: any){
  let color = blok.variant === "white" ? "text-white" : "text-main";

  return (
    <h2 {...storyblokEditable(blok)} className={`text-center ${color}`}>
      {blok.headline}
    </h2>
  );
};