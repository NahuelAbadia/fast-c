import React from 'react'
import Navbar from '../components/Navbar';
import { ChildrenProp } from '../interfaces/interface'

const Layout = ({ children }: ChildrenProp) => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex flex-row w-100 bg-danger"
        style={{ height: "92.5vh" }}
      >
        <div
          className="bg-primary"
          style={{ width: "240px" }}
        >
          <h1 className="fs-6 text-center">Sidebar</h1>
          <h2>fast c</h2>
        </div>
        <div
          className="bg-dark"
          style={{ width: "1680px" }}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout