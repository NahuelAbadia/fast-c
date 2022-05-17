import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./Layout.css";
import { ChildrenProp } from "../interfaces/interface";
import NavBar from "../components/Navbar";


const Layout = ({ children }: ChildrenProp)=> {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <NavBar/>
      <div className={"nav-bar navi-bar"}>
      <div className="">
        <div className={""}>
          <h1>Shipment Search</h1>
        </div>
        <div className={""}>
          <span>Shipment number</span>
        </div>
      </div>
      <textarea rows={7} cols={25} className={"m-auto"} style={{overflowY: "scroll", resize: "none"}}></textarea>
      <h2 className={""}>Status</h2>
      <Row className={""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2' name=" Auto Tendered" id="AutoTendered" />
          </div>
          <div className='col'>
              <label htmlFor="AutoTendered">AutoTendered</label>
          </div>
      </Row>
      <Row className={""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2' name="Closed" id="Closed" />
          </div>
          <div className='col'>
              <label htmlFor="Closed">Closed</label>
          </div>
      </Row>
      <Row className={""}>
          <div className='col-1'>
              <input type="checkbox" className='mt-2 mb-3' name="BOL" id="BOL"/>
          </div>
          <div className='col'>
              <label htmlFor="BOL">BOL</label>
          </div>
      </Row>

      <label htmlFor="ShipDate" className={""}>Ship Date</label>
      <input type="text" name="ShipDate" id="ShipDate" className={""}/>

      <label htmlFor="CreatedDate" className={""}>Created Date</label>
      <input type="text" name="CreatedDate" id="CreatedDate" className={""}/>

      <label htmlFor="ShipmentTerms" className={""}>Shipment Terms</label>
      <select name="ShipmentTerms" id="ShipmentTerms" className={""}>
          <option value=""></option>
      </select>
      {children}
    </div>
    </>
    
  );
};

export default Layout;
