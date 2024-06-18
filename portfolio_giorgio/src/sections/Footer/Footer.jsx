import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <>
      <section className={styles.container}>
        <hr />
        <p>&copy; 2024 Giorgio Guadagno. <br />
        All rights reserved 
        </p>
      </section>
    </>
  )
}

export default Footer;