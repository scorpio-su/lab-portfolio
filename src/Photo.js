import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Box(props) {
  const { name, content } = props;
  return (
    <div class="bg-light me-md-3 pt-3 px-1 pt-md-3 px-md-3 text-center overflow-hidden">
      <div class="my-1 p-1">
        <h2 class="display-5">{name}</h2>
        <p class="lead">{content}</p>
      </div>
      <div
        class="bg-body shadow-sm mx-auto"
        style={{
          width: "100%",
          height: "250px",
          "border-radius": "2px 2px 0 0",
        }}
      ></div>
    </div>
  );
}

function ContainerWithBox({ props }) {
  return (
    <div class="container">
      <div class="row">
        {props.map((data) => (
          <div key={data.index} class="col-md-4">
            <Box name={data.name} content={data.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Photo() {
  const datas = [
    { index: 1, name: "123", content: "123" },
    { index: 2, name: "124", content: "124" },
    { index: 3, name: "124", content: "124" },
    { index: 4, name: "124", content: "124" },
  ];
  return <ContainerWithBox props={datas} />;
}

export default Photo;
