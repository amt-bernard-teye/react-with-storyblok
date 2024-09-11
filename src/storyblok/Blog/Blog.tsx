import { Link } from "react-router-dom";

import styles from "./Blog.module.css";

export default function Blog({ blok }: any) {
  let description = blok.description.length > 200 ? `${blok.description.substr(0, 200)}...` : blok.description;

  return (
    <div className={styles.blog}>
      <img className={styles.blogImage} src={blok.banner.filename} alt={blok.banner.alt} />
      <p>
        <strong className="text-dark fs-semibold d-inline-block me-3">{ blok.category }</strong>
        <small>{ blok.date }</small>
      </p>
      <h3>{blok.title}</h3>
      <p>{description}</p>
      <Link to="/blog/23">Read More</Link>
    </div>
  );
}