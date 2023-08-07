import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* 按鈕會在手機或平板上顯示 */}
      <div
        class="btn btn-primary d-lg-none"
        variant="primary"
        className="d-lg-none"
        onClick={handleToggleSidebar}
      >
        Toggle Sidebar
      </div>

      {/* 顯示側邊欄 */}
      <div className={`sidebar bg-light ${showSidebar ? "show" : ""}`}>
        <div class="container fluid">
          <div class="row">
            <div class="col-xs-12 p-3">
              <h4>Sidebar Title</h4>
              <p>Some content here.</p>
              <p>Some content here.</p>
              <p>Some content here.</p>
              <p>Some content here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
