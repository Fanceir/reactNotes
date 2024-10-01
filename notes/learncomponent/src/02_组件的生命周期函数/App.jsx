import React from "react";
import HelloWorld from "./Helloworld";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React",
        };
    }
    switchShow() {
        this.setState({
            isShow: !this.state.isShow,
        });
    }
    render() {
        const { name } = this.state;
        const { isShow } = this.state;
        return (
            <div>
                hhh
                <button onClick={(e) => this.switchShow()}>切换</button>
                {this.state.isShow && <HelloWorld />}
            </div>
        );
    }
}
export default App;
