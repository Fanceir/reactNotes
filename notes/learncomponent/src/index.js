import React from "react";
import ReactDOM from "react-dom/client";
// import App from './01_类组件与函数式组件/App_class.jsx';
// import App111 from './01_类组件与函数式组件/App_func.jsx';
import App from "./02_组件的生命周期函数/App.jsx";
import HelloWorld from "./02_组件的生命周期函数/Helloworld.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([<HelloWorld />, <App />]);
