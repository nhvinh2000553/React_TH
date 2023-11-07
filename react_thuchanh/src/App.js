import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./containers/user";
import Home from "./containers/Home";
import Menu from "./containers/menu";
import AddProducts from "./containers/addproduct";
import * as React from "react";
import { Link } from "react-router-dom";

// import createBrowserRouter from ""

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/user"} element={<User />} />
          <Route path={"/addproduct"} element={<AddProducts />} />
        </Routes>
      </Router>
      
    </>
  );
}


export default (App);