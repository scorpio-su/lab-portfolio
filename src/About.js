import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLang } from "./LanguageContext";
import { content, t } from "./i18n/content";

function List(props) {
  const { items, type } = props;

  const listItems = items.map((item, index) => (
    <li class="contact-item" key={index}>
      <i class="bi bi-dot" aria-hidden="true"></i>
      <span>{item}</span>
    </li>
  ));

  const list =
    type === "ol" ? (
      <ol class="list-unstyled mb-0">{listItems}</ol>
    ) : (
      <ul class="list-unstyled mb-0">{listItems}</ul>
    );

  return <div class="fw-normal">{list}</div>;
}

function Map() {
  const { lang } = useLang();
  return (
    <div class="col-md-6">
      <div class="lab-card">
        <i class="bi bi-geo-alt icon-burst" aria-hidden="true"></i>
        <h2>{t(content.about.mapTitle, lang)}</h2>
        <iframe
          class="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.263524166201!2d121.24207061508383!3d24.95714724752174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346822143fff78e7%3A0x151567d0dbb4a0d9!2sCollege%20Of%20Engineering!5e0!3m2!1sen!2stw!4v1678670971487!5m2!1sen!2stw"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </div>
  );
}

function ContactBlock() {
  const { lang } = useLang();
  const content_en = [
    "Advanced Digital Smart Manufacturing Lab",
    "ADDRESS: 320314 No. 200, Zhongbei Rd., Zhongli Dist., Taoyuan City",
    "Phone Number: (03)265-4320 Lab: (03)265-4340",
    "E-mail: harrywey@cycu.edu.tw",
  ];
  const content_tw = [
    "數位先進智能製造實驗室",
    "地址: 320314 桃園市中壢區中北路200號 工學613室",
    "電話: (03)265-4320 實驗室: (03)265-4340",
  ];

  return (
    <div class="col-md-6">
      <div class="contact-card">
        <i class="bi bi-chat-dots icon-burst" aria-hidden="true"></i>
        <h2 class="lab-card-title">{t(content.about.title, lang)}</h2>
        <List items={lang === "en" ? content_en : content_tw} type="ul" />
      </div>
    </div>
  );
}

function About() {
  const { lang } = useLang();
  return (
    <div class="page-shell container">
      <header class="page-hero">
        <h1>{t(content.about.title, lang)}</h1>
      </header>
      <div class="row align-items-md-stretch g-4">
        <Map />
        <ContactBlock />
      </div>
    </div>
  );
}

export default About;
