import { storyblokEditable } from "@storyblok/react";

type LocatorProps = {
  blok: {
    icon: string;
    title: string;
    description: string;
  }
}

export default function Locator({blok}: LocatorProps) {
  let spanStyle = {
    width: "40px",
    height: "40px",
    display: "inline-block",
    lineHeight: "40px",
    color: "var(--bs-white)"
  };

  return (
    <div className="text-center bg-white rounded py-4" {...storyblokEditable(blok)}>
      <span className="rounded-circle bg-main" style={spanStyle}>
        <i className={`bi bi-${blok.icon}`}></i>
      </span>
      <h6 className="text-main my-3">{blok.title}</h6>
      <small>{blok.description}</small>
    </div>
  );
}