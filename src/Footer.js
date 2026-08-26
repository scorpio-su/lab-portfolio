import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLang } from "./LanguageContext";
import { content, t } from "./i18n/content";
// import { Link } from "react-router-dom";

const RELATED_LINKS = [
  { label: "中原大學機械系 CYME", href: "https://www.cycu-me.org/" },
  { label: "中原大學智慧製造中心 SMC", href: "https://smc.cycu.edu.tw/" },
  { label: "中原大學工學院", href: "https://coie.cycu.edu.tw/" },
  { label: "中原大學 CYCU", href: "https://www.cycu.edu.tw/" },
  { label: "i-Learning", href: "https://ilearning.cycu.edu.tw/" },
  { label: "中原e點靈 iTouch", href: "https://itouch.cycu.edu.tw/" },
];

function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLang();

  return (
    <footer class="site-footer">
      <div class="container">
        <h2>{t(content.footer.related, lang)}</h2>
        <ul class="related-links">
          {RELATED_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p class="site-copy">
          © {year} MECHANICAL ENGINEERING, CHUNG YUAN CHRISTIAN UNIVERSITY. ALL
          RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
