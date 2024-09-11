import { storyblokEditable } from "@storyblok/react"

export default function Banner({blok}: any) {
  return (
    <section style={{
      backgroundColor: "var(--bs-gray-100)",
      paddingBottom: "100px"
    }} {...storyblokEditable(blok)}>
      <div className="container">
        <div className="rounded overflow-hidden" style={{height: "450px"}}>
          <img src={blok.image.filename} alt="" className="rounded" style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}/>
        </div>
      </div>
    </section>
  );
}