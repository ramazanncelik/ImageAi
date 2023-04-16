import Link from "next/link";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <Link href="https://github.com/ramazanncelik" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/ramazan-%C3%A7elik-590592231/" target="_blank">
            <LinkedinIcon />
          </Link>
          <p>
            Made by <b>Ramazan Çelik</b>
            <br />
            and, built with <b>Next.js</b>
          </p>
        </footer>
      );
}

export default Footer;