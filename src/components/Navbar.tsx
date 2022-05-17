import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFullscreen, BsFullscreenExit, BsGear } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { CgBell } from "react-icons/cg"
import { MdOutlineGridView } from "react-icons/md"
import eeuu from "../assets/eeuu.png"

const Navbar = () => {

  const [fullScreen, setFullScreen] = useState<boolean>(false)
  const [image, setImage] = useState<any>(BsFullscreen)

  const launchFullScreen = () => {
    setFullScreen(!fullScreen)
    setImage(BsFullscreenExit)
    if (fullScreen === false) {
      document.documentElement.requestFullscreen()
    } else {
      setImage(BsFullscreen)
      document.exitFullscreen()
    }
  }

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column align-content-between" style={{ height: "70px", background: "#38414A" }}>
        <div className="col-4 h-100">
          <div className="d-flex flex-row gap-3 align-items-baseline justify-content-evenly">
            <h5 className="fs-5 text-light">UBOLD</h5>
            <button className="btn btn-transparent fs-3 text-light"><BiMenu /></button>
            <h5 className="fs-6 text-secondary">Create New</h5>
            <h5 className="fs-6 text-secondary">Mega Menu</h5>
          </div>
        </div>
        <div className="col-4 h-100">
          <div className="d-flex flex-row align-items-center justify-content-evenly w-100 h-100">

            <div className="d-flex flex-row align-items-center justify-content-center w-100 h-100">
              <input
                type="text"
                placeholder="Search..."
                className="rounded-pill py-2 px-3"
              />
            </div>

            <div className="d-flex flex-row align-items-center justify-content-evenly w-100 h-100">
              <button
                className="btn btn-transparent text-secondary pb-2"
                onClick={launchFullScreen}
              >
                <span style={{ fontSize: "18px" }}>{image}</span>
              </button>

              <button className="btn btn-transparent text-secondary">
                <MdOutlineGridView size="24px" />
              </button>

              <button className="btn btn-transparent text-secondary">
                <img src={eeuu} alt="bandera" width={27} />
              </button>

              <div
                className="position-relative"
                style={{ cursor: "pointer" }}
              >
                <CgBell
                  size="25px"
                  color="#ADB0B4"
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                </span>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-evenly w-100 h-100">

              <div className="d-flex flex-row align-items-center gap-2 h-100 px-2">
                <img
                  src="https://pbs.twimg.com/profile_images/1397638387901861892/SJ1k1Xyq_400x400.jpg"
                  alt="user"
                  width={32}
                  className="rounded-circle"
                />
                <span className="fs-6 text-secondary">Nahuel <BiChevronDown /></span>
              </div>

              <div className="d-flex align-items-center h-100">
                <h2 className="btn btn-transparent text-secondary fs-4"><BsGear /></h2>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar