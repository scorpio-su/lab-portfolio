import React from "react";
import { useLang } from "../LanguageContext";
import { content, t } from "./content";

function EnglishNotice() {
  const { lang } = useLang();
  if (lang !== "en") {
    return null;
  }
  return (
    <p class="lang-unavailable" role="status">
      {t(content.unavailable.notice, lang)}
    </p>
  );
}

export default EnglishNotice;
