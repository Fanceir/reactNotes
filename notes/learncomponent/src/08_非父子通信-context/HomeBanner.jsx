import React from "react";
import ThemeContext from "./context/theme-context";
const HomeBanner = () => {
    return (
        <div>
            HomeBanner
            User
            <ThemeContext.Consumer>
                {(value) => {
                    return <div>HomeBanner:{value.color}</div>;
                }}
            </ThemeContext.Consumer>
        </div>
    );
};

export default HomeBanner;
