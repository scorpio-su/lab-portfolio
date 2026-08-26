import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLang } from "./LanguageContext";
import { content, t } from "./i18n/content";
import EnglishNotice from "./i18n/EnglishNotice";

function yearFrom(item) {
  const match = item.match(/\b(20\d{2})\b/);
  return match ? match[1] : "";
}

function List(props) {
  const { items, type, status } = props;

  const listItems = items.map((item, index) => (
    <li class="publish-card" key={index}>
      <div class="tag-row mb-2">
        {yearFrom(item) ? (
          <span class="tag-chip publish-meta">{yearFrom(item)}</span>
        ) : null}
        {status ? <span class="tag-chip">{status}</span> : null}
      </div>
      <p class="mb-0">{item}</p>
    </li>
  ));

  const list =
    type === "ol" ? (
      <ol class="list-unstyled d-flex flex-column gap-3 mb-0">{listItems}</ol>
    ) : (
      <ul class="list-unstyled d-flex flex-column gap-3 mb-0">{listItems}</ul>
    );

  return <div class="fw-normal">{list}</div>;
}

function Periodicals() {
  const items = [
    "Shih-Ming Wang; Jia-Xuan Wu; Hariyanto Gunawan; Ren-Qi Tu, “Optimization of Machining Parameters for Corner Accuracy Improvement for WEDM Processing”, 2022, Applied Sciences, vol.12, p.10324-1-10324-20.",
    "Shih-Ming Wang; Chun-Yi Lee; Hariyanto Gunawan; Ren-Qi Tu, “Intelligent Air Cutting Monitoring System for Mlliing Process”, 2022, Applied Sciences, vol.12, p.4137-1-437-16.",
    "Shia-Chung Chen; Han Su; Jibin Jose Mathew; Hariyanto Gunawan; Chun-Wei Huang; Ching-Te Feng, “An Investigation to Reduce the Effect of Moisture on Injection-Molded Parts through Optimization of Plasticization Parameters”, 2022, Applied Sciences, vol.12, p.1410-1-1410-18.",
    "Shih-Ming Wang; Ren-Qi Tu; Hariyanto Gunawan , “In-Process Error-Matching Measurement and Compensation Method for Complex Mating”, 2021, Sensors, vol.21, p.7660-1-7660-19.",
    "Shih-Ming Wang; Chun-Yi Lee; Hariyanto Gunawan; Chin-Cheng Yeh, “On-line Error-matching Measurement and Compensation Method for A Precision Machining Production Line” , 2021 , International Journal of Precision Engineering and Manufacturing-Green Technology, p.493-505.",
    "Shih-Ming Wang; Zhe-Zhi Ye; Hariyanto Gunawan , “Design and Accuracy Analysis of a Micromachine Tool with a Co-Planar Driving Mechanism”, 2021, Applied Sciences, vol.11, p.947-1-947-20.",
    "Shih-Ming Wang; Chun-Yi Lee; Hariyanto Gunawan; Chin-Cheng Yeh, “An Accuracy-Efficiency-Power Consumption Hybrid Optimization Method for CNC Mlliing Process”, 2019, Applied Sciences, vol.9, p.1495-1-1495-20.",
  ];
  return (
    <section>
      <h2 class="section-heading">期刊論文</h2>
      <List items={items} type="ol" status="(SCI期刊)" />
    </section>
  );
}

function Seminar() {
  const items = [
    "Hariyanto Gunawan; Jun-Kai Peng; Shih-Ming Wang; Ren-Qi Tu, “Geometric Accuracy Control of Electrode Discharge Machining Process” , 2022 , The 11th International Multi-Conference on Engineering and Technology Innovation 2022 , 2022 /10 /28 ~ 2022/11 /1 , 中華民國 台灣 .",
    "Hariyanto Gunawan , “Talent Training for Industry 4.0” , 2022 , The 4th Annual Conference of Engineering Implementation on Vocational Education (ACEIVE) 2022 , 2022 /10 /20 ~ 2022 /10 /20 , Republic of Indonesia .",
    "Hariyanto Gunawan; Afrizal Amir; Ren-Qi Tu , “Artificial Neural Network Modeling for Surface Roughness Prediction in Mlliing Machining” , 2022 , 8th INTERNATIONAL CONFERENCE ON ADVANCED ENGINEERING AND TECHNOLOGY , 2022 /5 /20 ~ 2022 /5 /22 , Republic of Korea .",
    "Hariyanto Gunawan; Didik Sugiono; Shih-Ming Wang; Ren-Qi Tu , “Air Cutting Optimization for Mlliing Process” , 2021 , The 10th International Multi-Conference on Engineering and Technology 2021 , 2021 /10 /29 ~ 2021 /11 /2 , 中華民國 台灣 .",
    "Shih-Ming Wang; Ren-Qi Tu; Hariyanto Gunawan , “Assembly Error-mating Measurement and Compensation Method for Machining Production Line” , 2021 , IEEE International Workshop on Metrology for Industry 4.0 & IoT , 2021 /6 /7 ~ 2021 /6 /9 , Italian Republic .",
    "Shih-Ming Wang; Zhe-Zhi Ye; Hariyanto Gunawan , “Accuracy Analysis of the Micro Machine Tool with Co-Planar Driving Mechanism” , 2020 , ASME 2020 15th International Manufacturing Science and Engineering Conference, MSEC 2020 , 2020 /9 /3 ~ 2020 /9 /3 , United States .",
  ];
  return (
    <section class="mt-5">
      <h2 class="section-heading">研討會論文</h2>
      <List items={items} type="ul" />
    </section>
  );
}

function Publish() {
  const { lang } = useLang();
  return (
    <div class="page-shell container">
      <header class="page-hero">
        <h1>{t(content.publish.title, lang)}</h1>
      </header>
      <EnglishNotice />
      <Periodicals />
      <Seminar />
    </div>
  );
}

export default Publish;
