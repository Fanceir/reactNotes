import React from "react";

import MainBanner from "./MainBanner";
import MainProduct from "./MainProduct";
import MainProductlist from "./MainProductlist";
import Header from "./Header";
import Footer from "./Footer";
import Photo from "./Photo";
class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log("Main constructor");
        this.state = {
            title: "我是Main",
            banners: ["banner1", "banner2", "banner3"],
            prductList: ["product1", "product2", "product3"],
        };
    }
    render() {
        const { title, banners } = this.state;
        return (
            <div>
                <Header />
                <MainBanner banners={banners} title="轮播图" />
                <MainProduct />
                <MainProductlist />
                <Footer />
            </div>
        );
    }
}
export default Main;
