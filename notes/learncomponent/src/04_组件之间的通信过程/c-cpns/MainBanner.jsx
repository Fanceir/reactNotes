import React, { Component } from "react";
import ProperTypes from "prop-types";
class MainBanner extends Component {
    constructor(props) {
        super(props);

        //相当于
        // this.props = props;
        console.log("MainBanner constructor");
    }
    render() {
        console.log(this.props);
        const { title, banners } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <ul>
                    {banners.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
MainBanner.propTypes = {
    title: ProperTypes.string.isRequired,
    banners: ProperTypes.array.isRequired,
};
MainBanner.defaultProps = {
    banners: [],
    title: "我是默认标题",
};
//目前不推荐这么使用推荐使用函数式组件和使用TypeScript
export default MainBanner;
