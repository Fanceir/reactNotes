import React, { Component } from "react";

export class MainProduct extends Component {
    constructor() {
        super();
        console.log("MainProduct constructor");
        this.state = {
            banners: ["新的歌曲", "新的专辑", "新的MV"],
            products: ["推荐商品1", "推荐商品2", "推荐商品3"],
        };
    }
    render() {
        return (
            <div className="main">
                <div>
                    <h2>最新音乐</h2>
                    <div>
                        {this.state.banners.map((item, index) => {
                            return <div key={index}>{item}</div>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainProduct;
