import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
export default function Grid ({ blok }: any) {
  return (
    <section style={{
      backgroundColor: "var(--bs-gray-100)",
      padding: "30px 0"
    }} {...storyblokEditable(blok)}>
      <div className="container">
      <div className="row">
        {blok.columns.map((blok: any) => (
          <div className="col-12 col-md-4" key={blok._uid}>
            <StoryblokComponent blok={blok} />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}