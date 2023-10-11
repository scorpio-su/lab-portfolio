import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Member.css";

function List({ listItems, type }) {
  const ListTag = type === "ol" ? "ol" : "ul";

  return (
    <ListTag>
      {listItems.map((item) => (
        <li key={item.id} style={{ "text-align": "left" }}>
          <p class="fw-bolder">
            {item.title}
            <p class="fw-normal">{item.content}</p>
          </p>
        </li>
      ))}
    </ListTag>
  );
}

// // original people function
// function People(props) {
//   const { names, emails, paths } = props;

//   const membersImg = paths.map((path, index) => (
//     <img
//       key={index}
//       class="mx-auto rounded-circle"
//       src={path}
//       flli="none"
//       alt={index}
//     />
//   ));
//   const membersnames = names.map((name, index) => <h4 key={index}>{name}</h4>);

//   const membersEmail = emails.map((email, index) => (
//     <p key={index} class="text-center">
//       <a
//         class="btn btn-dark btn-social mx-2 rounded-circle"
//         href="mailto:{email}"
//         aria-label="Larry Parker Facebook Profile"
//       >
//         <svg
//           class="svg-inline--fa fa-facebook-f"
//           aria-hidden="true"
//           focusable="false"
//           data-prefix="fab"
//           data-icon="facebook-f"
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           data-fa-i2svg=""
//         >
//           <path
//             fill="currentColor"
//             d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
//           />
//         </svg>
//       </a>
//       {email}
//     </p>
//   ));

//   return (
//     <div class="team-member">
//       {membersImg}
//       {membersnames}
//       <p class="text-center">{membersEmail}</p>
//     </div>
//   );
// }

// // 2 version
// function Personv2(props) {
//   const { name, email, path } = props;

//   const membersImg = (
//     <img class="mx-auto rounded-circle" src={path} flli="none" alt={name} />
//   );
//   const membersname = <h4>{name}</h4>;

//   const membersEmail = (
//     <p class="text-center">
//       <a
//         class="btn btn-dark btn-social mx-2 rounded-circle"
//         href={`mailto:${email}`}
//         aria-label="Larry Parker Facebook Profile"
//       >
//         <svg
//           class="svg-inline--fa fa-facebook-f"
//           aria-hidden="true"
//           focusable="false"
//           data-prefix="fab"
//           data-icon="facebook-f"
//           role="img"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 512 512"
//           data-fa-i2svg=""
//         >
//           <path
//             fill="currentColor"
//             d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
//           />
//         </svg>
//       </a>
//       {email}
//     </p>
//   );

//   return (
//     <div class="team-member">
//       {membersImg}
//       {membersname}
//       <p class="text-center">{membersEmail}</p>
//     </div>
//   );
// }

// function Peoplev2(props) {
//   const { datas, ways } = props;
//   return (
//     <div class="row">
//       {datas.map((data) => (
//         <div class={ways}>
//           <Personv2
//             key={data.id}
//             name={data.name}
//             email={data.email}
//             path={data.path}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// function Peoplev3(props) {
//   const { datas, ways } = props;
//   return (
//     <div class={ways}>
//       {datas.map((data) => (
//         <Personv2
//           key={data.id}
//           name={data.name}
//           email={data.email}
//           path={data.path}
//         />
//       ))}
//     </div>
//   );
// }

// version 3

function Person(props) {
  const { name, email, path } = props;

  return (
    <div className="team-member">
      <img className="mx-auto rounded-circle" src={path} alt={name} />
      <h4>{name}</h4>
      <p className="text-center">
        <a
          className="btn btn-dark btn-social mx-2 rounded-circle"
          href={`mailto:${email}`}
          aria-label="Larry Parker Facebook Profile"
        >
          <svg
            className="svg-inline--fa fa-facebook-f"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg>
        </a>
        {email}
      </p>
    </div>
  );
}

// function Peoplev3(props) {
//   const { datas, className } = props;

//   return (
//     <div className={`row ${className}`}>
//       {datas.map((data) => (
//         <div className="col" key={data.id}>
//           <Person {...data} />
//         </div>
//       ))}
//     </div>
//   );
// }

function Peoplev3(props) {
  const { datas, ways } = props;

  const renderFirstPerson = (data) => {
    return (
      <div class="row">
        <div className="col-lg-6">
          <Person {...data} />
        </div>
        <div className="col-lg-6">
          <Introdution />
        </div>
      </div>
    );
  };

  const renderPerson = (data) => {
    return <Person {...data} />;
  };

  return (
    <div className="row">
      {datas.map((data) => (
        <div className={data.id === 0 ? "" : ways}>
          {data.id === 0 ? renderFirstPerson(data) : renderPerson(data)}
        </div>
      ))}
    </div>
  );
}

function Introdution() {
  // const { ways } = props;
  const intro = [
    { index: 1, title: "最高學歷：", content: "中原大學機械工程博士" },
    {
      index: 2,
      title: "研究專長：",
      content:
        "智慧製造、人工智慧、物聯網、大數據分析、工業4.0應用、即時監控、智慧系統平台開發、工具機",
    },
    {
      index: 3,
      title: "聯絡方式：",
      content: "工學613 / 03-2654320 / harrywey@cycu.edu.tw",
    },
    {
      index: 4,
      title: "研究室：",
      content: "先進數位智能製造研究室 / 工學614 / 03-2654340",
    },
  ];
  return <List listItems={intro} type="ul" />;
}

function Professor() {
  const datas = [
    {
      id: 0,
      name: "魏福勝",
      email: "harrywey@cycu.edu.tw",
      path: require("./img/harry.jpeg"),
    },
  ];
  return (
    <Peoplev3 datas={datas} />
    // <Introdution ways="col-lg-6" />
  );
}

function Ph() {
  const datas = [
    {
      id: 1,
      name: "魏英德",
      email: "indrawan.nugrahanto@polinema.ac.id",
      path: require("./img/indrawan.png"),
    },
  ];
  return <Peoplev3 datas={datas} ways="col-lg-12" />;
}

function Master() {
  const datas_6 = [
    {
      id: 1,
      name: "陳兆軒",
      email: "chaoxuan4work@gmail.com",
      path: require("./img/Kevin.png"),
    },
    {
      id: 2,
      name: "蘇正信（蘇信信）",
      email: "10823160@cycu.org.tw",
      path: require("./img/scorpio-su.png"),
    },
  ];
  const datas_4 = [
    {
      id: 1,
      name: "蕭閔駿",
      email: "chowder0820@yahoo.com.tw",
      path: require("./img/minchun.png"),
    },
    {
      id: 2,
      name: "蔡裕傑",
      email: "g10973037@cycu.edu.tw",
      path: require("./img/jason.png"),
    },
    {
      id: 3,
      name: "陳星佑",
      email: "123",
      path: require("./img/logo.png"),
    },
    {
      id: 4,
      name: "毛光偉",
      email: "123",
      path: require("./img/logo.png"),
    },
    {
      id: 5,
      name: "陳冠綦",
      email: "123",
      path: require("./img/logo.png"),
    },
  ];
  return (
    <div>
      <Peoplev3 datas={datas_6} ways="col-lg-6" />
      <Peoplev3 datas={datas_4} ways="col-lg-4" />
    </div>
  );
}

function Member() {
  return (
    <div class="container">
      <div class="text-center p-3">
        <h2 class="section-heading">Professor</h2>
      </div>
      {/* professor */}
      <Professor />
      <hr />
      <div class="text-center p-3">
        <h2 class="section-heading">Ph.D Students</h2>
      </div>
      {/* ph.D students */}
      <Ph />
      <hr />
      <div class="text-center p-3">
        <h2 class="section-heading">Master Students</h2>
      </div>
      <Master />
    </div>
  );
}

export default Member;

// function ImageGallery() {
//   const img = [
//     require("./img/harry.jpeg"),
//     require("./img/2.jpg"),
//     require("./img/3.jpg"),
//     require("./img/4.jpg"),
//     require("./2.jpg"),
//   ];

//   return (
//     <div>
//       {img.map((image, index) => (
//         <img key={index} src={image} alt={`${index}`} />
//       ))}
//     </div>
//   );
// }

// function ImageGallery() {
//   const images = [require("./img/harry.jpeg")];

//   return (
//     <div>
//       <People items={images} name="Harry" email="123" path={images} />
//     </div>
//   );
// }

// function List(props) {
//   const { items, contents, type } = props;

//   const listItems = items.map((item, index) => (
//     <li key={index} class="fw-bolder">
//       {item}
//     </li>
//   ));

//   const Listcontent = contents.map((content, index) => (
//     <li key={index}>{content}</li>
//   ));
//   const list =
//     type === "ol" ? (
//       <ol class="list-unstyled mb-0">
//         {listItems}
//         {Listcontent}
//       </ol>
//     ) : (
//       <ul class="list-styled">
//         {listItems}
//         {Listcontent}
//       </ul>
//     );
//   return <div>{list}</div>;
// }
