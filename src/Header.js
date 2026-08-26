import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useLang } from "./LanguageContext";
import { content, t } from "./i18n/content";
// import Sidebar from "./Sidebar";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      class="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? t(content.theme.toLight, lang) : t(content.theme.toDark, lang)}
    >
      <i
        class={isDark ? "bi bi-sun" : "bi bi-moon-stars"}
        aria-hidden="true"
      ></i>
    </button>
  );
}

function LanguageToggle() {
  const { lang, toggleLang } = useLang();
  const isEn = lang === "en";

  return (
    <button
      type="button"
      class="theme-toggle lang-toggle"
      onClick={toggleLang}
      aria-pressed={isEn}
      aria-label={isEn ? t(content.lang.toZh, lang) : t(content.lang.toEn, lang)}
    >
      <i class="bi bi-globe" aria-hidden="true"></i>
      <span class="lang-toggle-mark">{t(content.lang.mark, lang)}</span>
    </button>
  );
}

function Header() {
  const { lang } = useLang();

  return (
    <header class="site-header sticky-top py-2">
      <nav
        class="container d-flex flex-column flex-md-row justify-content-between align-items-center site-header-inner"
        aria-label={t(content.nav.menuAria, lang)}
      >
        {/* <button onClick={Sidebar}> */}
        <Link
          class="site-wordmark py-2"
          to="/"
          aria-label={t(content.nav.homeAria, lang)}
        >
          <span class="site-mark" aria-hidden="true">
            <i class="bi bi-gear-wide-connected"></i>
          </span>
          <span class="site-wordmark-text">
            <span class="site-wordmark-zh">{t(content.wordmark.primary, lang)}</span>
            <span class="site-wordmark-en">{t(content.wordmark.secondary, lang)}</span>
          </span>
        </Link>
        {/* </button>{" "} */}
        <div class="site-nav-cluster">
          <div class="site-nav">
            <Link class="site-nav-link" to="/member">
              {t(content.nav.member, lang)}
            </Link>{" "}
            {/* <Link class="py-2 d-none d-md-inline-block" to="/">
          研究方向
        </Link> */}
            {/* <Link class="py-2 d-none d-md-inline-block" to="/project">
          研究計畫
        </Link> */}
            <Link class="site-nav-link" to="/publish">
              {t(content.nav.publish, lang)}
            </Link>
            {/* <Link class="py-2 d-none d-md-inline-block" to="/photo">
          {" "}
          實驗室照片
        </Link> */}
            <Link class="site-nav-link" to="/about">
              {t(content.nav.about, lang)}
            </Link>
          </div>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>{" "}
    </header>
  );
}

export default Header;
