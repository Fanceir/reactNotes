import React, { Component } from "react";
// import Home from "./HomeInfo";
import ThemeContext from "./context/theme-context";
export class HomeInfo extends Component {
    render() {
        return <div>HomeInfo:{this.context.color}</div>;
    }
}
HomeInfo.contextType = ThemeContext;
export default HomeInfo;
