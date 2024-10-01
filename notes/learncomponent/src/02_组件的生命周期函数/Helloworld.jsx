import React from "react";

class HelloWorld extends React.Component {
    //构造方法 生命周期的第一个方法
    constructor() {
        console.log("hello world构造方法");
        super();
        this.state = {
            message: "Hello, World!",
        };
    }
    changeText() {
        console.log("changeText函数执行了");
        this.setState({
            message: "Hello, React!",
        });
    }
    // 执行render方法
    render() {
        console.log("render函数");
        const { message } = this.state;
        return (
            <div>
                <div>{message}</div>
                <button onClick={(e) => this.changeText()}>改变文本</button>
            </div>
        );
    }
    //组件挂载完成
    componentDidMount() {
        //在这里发送网络请求
        //在这里添加一些订阅
        console.log("hello world ComponentDidMount");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(
            "hello world ComponentDidUpdate",
            prevProps,
            prevState,
            snapshot
        );
    }
    //组件从DOM中被卸载
    componentWillUnmount() {
        console.log("hello world ComponentWillUnmount");
    }

    //生命周期补充 要不要重新执行render函数
    shouldComponentUpdate() {
        console.log("hello world ShouldComponentUpdate");
        return false;
    }
    getSnapshotBeforeUpdate() {
        console.log("hello world getSnapshotBeforeUpdate");
        return null;
    }
}

export default HelloWorld;
