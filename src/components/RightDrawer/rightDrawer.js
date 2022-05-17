import React from "react";
import { useSelector } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import { FiSettings, FiMessageSquare, FiBell } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import "./rightDrawer.scss";

const rightDrawer = () => {
  const toggleRightDrawer = useSelector(
    (state) => state.topBar.toggleRightDrawer,
  );

  return (
    <div className="rightdrawer">
      <div className={!toggleRightDrawer ? "d-none" : "right-drawer"}>
        <Tabs
          defaultActiveKey="bookmark"
          id="uncontrolled-tab-example"
          className="d-flex justify-content-between"
        >
          <Tabs.Tab eventKey="bookmark" title={<FaRegBookmark />}>
            <div className="p-3 text-center">
              <span>Bookmarks</span>
            </div>
          </Tabs.Tab>
          <Tabs.Tab eventKey="profile" title={<FiBell />}>
            <div className="p-3 text-center">
              <span>Notifications</span>
            </div>
          </Tabs.Tab>
          <Tabs.Tab eventKey="settings" title={<FiSettings />}>
            <div className="p-3 text-center">
              <span>Settings</span>
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default rightDrawer;
