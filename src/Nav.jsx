import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import './Nav.css'

export default function Nav() {




    return <>
    <div className="wrapper">
    <header>
    <div className="color">
    <nav id="navbar">
    <div className="ul">
    <Link to="/" id="link">Home</Link>
    <Link to="AdminProfile" id="link">AdminProfile</Link>
    <Link to="Users" id="link">Users</Link>
    <Link to="NotFound" id="link">About</Link>
    </div>
  </nav>
  </div>
  </header>
  </div>
  </>
}