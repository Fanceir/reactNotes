import React, { Component } from "react";
import Home from "./Home";
// import HomeInfo from "./HomeInfo";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: { name: "fanceir", age: 18 },
        };
    }

    render() {
        const { info } = this.state;
        return (
            <div>
                <UserContext.Provider>
                    {/* <Home name="fanceir" age={18} /> */}
                    <ThemeContext.Provider value={{ color: "red" }}>
                        <Home {...info} />
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;
