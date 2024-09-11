import { storyblokEditable } from "@storyblok/react"

type FooterProps = {
  blok: {
    copyrights: string;
  }
}

export default function Footer({blok}: FooterProps) {
  return (
    <footer className="text-center py-4" {...storyblokEditable(blok)}>
      <p className="m-0">{blok.copyrights}</p>
    </footer>
  )
}