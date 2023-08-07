import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function List(props) {
  const { items, type } = props;

  const listItems = items.map((item, index) => <li key={index}>{item}</li>);

  const list = type === "ol" ? <ol>{listItems}</ol> : <ul>{listItems}</ul>;

  return (
    <div
      class="fw-normal"
      style={{ "text-align": "left", wordWrap: "break-word" }}
    >
      {list}
    </div>
  );
}

function Map() {
  return (
    <div class="col-md-6">
      <div
        class="h-100 p-5 text-bg-dark rounded-3"
        style={{ "text-align": "left" }}
      >
        <h2>Google map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.263524166201!2d121.24207061508383!3d24.95714724752174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346822143fff78e7%3A0x151567d0dbb4a0d9!2sCollege%20Of%20Engineering!5e0!3m2!1sen!2stw!4v1678670971487!5m2!1sen!2stw"
          width="500"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </div>
  );
}

function Content() {
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
      <div
        class="h-100 p-5 border rounded-3 mx-auto"
        style={{ "text-align": "left" }}
      >
        <h2>聯絡我們</h2>
        <List items={content_en} type="ul" />
        <hr />
        <List items={content_tw} type="ul" />
      </div>
    </div>
  );
}

function About() {
  return (
    <div class="row align-items-md-stretch my-2 mx-auto">
      <Map />
      <Content />
    </div>
  );
}

export default About;
