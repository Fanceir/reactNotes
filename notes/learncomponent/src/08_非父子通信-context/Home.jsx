import React, { Component } from "react";
import HomeInfo from "./HomeInfo";
import HomeBanner from "./HomeBanner";
export class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Home", props);
    }
    render() {
        return (
            <div className="info">
                {Object.entries(this.props).map(([key, value]) => {
                    return (
                        <p key={key}>
                            {key}: {value}
                        </p>
                    );
                })}
                <HomeInfo />
                <HomeBanner />
            </div>
        );
    }
}

export default Home;
