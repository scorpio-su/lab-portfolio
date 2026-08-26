import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLang } from "./LanguageContext";
import { content, t } from "./i18n/content";
// import { Link } from "react-router-dom";

function Home() {
  const { lang } = useLang();

  return (
    <div class="page-shell container">
      <header class="page-hero">
        <p class="page-kicker">{t(content.home.kicker, lang)}</p>
        <h1>{t(content.home.title, lang)}</h1>
      </header>
      <div class="row g-4">
        <div class="col-lg-7">
          <article class="lab-card">
            <i class="bi bi-cpu icon-burst" aria-hidden="true"></i>
            <h2>{t(content.home.introTitle, lang)}</h2>
            <p>{t(content.home.introBody, lang)}</p>
          </article>
        </div>
        <div class="col-lg-5">
          <article class="lab-card">
            <i class="bi bi-person-badge icon-burst" aria-hidden="true"></i>
            <h2>{t(content.home.piTitle, lang)}</h2>
            <p>
              <strong>{t(content.home.degreeLabel, lang)}</strong>
              <br />
              {t(content.home.degreeValue, lang)}
            </p>
            <p>
              <strong>{t(content.home.labLabel, lang)}</strong>
              <br />
              {t(content.home.labValue, lang)}
            </p>
            <p class="intro-kicker">{t(content.home.expertiseLabel, lang)}</p>
            <div class="tag-row">
              {content.home.expertise.map((tag) => (
                <span class="tag-chip" key={tag.en}>
                  {t(tag, lang)}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Home;
