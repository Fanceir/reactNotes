import React, { PureComponent } from "react";
import AddCounter from "./AddCounter";
import SubCounter from "./SubCounter";

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    changeCounter(count) {
        this.setState({
            counter: this.state.counter + count,
        });
    }
    render() {
        const { counter } = this.state;

        return (
            <div>
                <h2>当前计数 :{counter}</h2>
                <AddCounter
                    addClick={(count) => {
                        this.changeCounter(count);
                    }}
                />
                <SubCounter
                    subClick={(count) => {
                        this.changeCounter(-count);
                    }}
                />
            </div>
        );
    }
}
