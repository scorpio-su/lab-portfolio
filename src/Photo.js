import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLang } from "./LanguageContext";
import { content, t } from "./i18n/content";
import EnglishNotice from "./i18n/EnglishNotice";

function Box(props) {
  const { name, content: body } = props;
  return (
    <article class="photo-card">
      <div class="photo-placeholder" aria-hidden="true">
        <i class="bi bi-image"></i>
      </div>
      <h2 class="h5">{name}</h2>
      <p class="mb-0 theme-muted">{body}</p>
    </article>
  );
}

function ContainerWithBox({ props }) {
  return (
    <div class="row g-4">
      {props.map((data) => (
        <div key={data.index} class="col-md-4">
          <Box name={data.name} content={data.content} />
        </div>
      ))}
    </div>
  );
}

function Photo() {
  const { lang } = useLang();
  const datas = [
    { index: 1, name: "123", content: "123" },
    { index: 2, name: "124", content: "124" },
    { index: 3, name: "124", content: "124" },
    { index: 4, name: "124", content: "124" },
  ];
  return (
    <div class="page-shell container">
      <header class="page-hero">
        <h1>{t(content.photo.title, lang)}</h1>
      </header>
      <EnglishNotice />
      <ContainerWithBox props={datas} />
    </div>
  );
}

export default Photo;
