import { Link } from "react-router-dom";

import styles from "./Button.module.css";

type ButtonProps = {
  blok: {
    btn_text: string;
    btn_variant: "primary" | "secondary";
    btn_type: string;
    btn_link?: string;
  }
}

export default function Button({blok}: ButtonProps) {
  let variant = "";

  if (blok.btn_variant === "primary") {
    variant = styles.btnPrimary;
  }
  else if (blok.btn_variant === "secondary") {
    variant = styles.btnSecondary;
  }

  if (blok.btn_link === "Content") {
    return <Link to="/" className="text-secondary">{blok.btn_text}</Link>
  }

  return (
    <button className={`${styles.btn} ${variant}`}>{ blok.btn_text }</button>
  );
}