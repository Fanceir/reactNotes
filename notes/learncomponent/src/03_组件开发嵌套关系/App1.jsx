import React, { Component } from "react";
import Header from "./c-cpns/Header";
import Footer from "./c-cpns/Footer";
import Photo from "./c-cpns/Photo";
export class App1 extends Component {
    render() {
        return (
            <div>
                <Footer />
                <Header />
                <Photo />
            </div>
        );
    }
}

export default App1;
