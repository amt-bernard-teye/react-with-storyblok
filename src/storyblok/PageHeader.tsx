import { storyblokEditable } from "@storyblok/react";

export default function PageHeader({blok}: any) {
  return (
    <section style={{
      backgroundColor: "var(--bs-gray-100)",
      padding: "100px 0"
    }} {...storyblokEditable(blok)}>
      <div className="container text-center">
        <p style={{textTransform: "uppercase"}}><strong>{blok.sub_title}</strong></p>
        <h1 style={{
          fontSize: "3em"
        }}>{blok.main_title}</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <p>{blok.info}</p>
          </div>
        </div>
      </div>
    </section>
  );
}