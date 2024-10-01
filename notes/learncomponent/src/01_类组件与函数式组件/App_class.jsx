import React, { Component } from 'react'

function App1() {
  return <h1>Hello, React!</h1>
}
export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "React"
    }
  }


  render() {
    const { name } = this.state
    return (
      <App1 />
    )
    // return ["abc", "def", "ghi"].map((item, index) => {
    //   return <h1 key={index}>{item}</h1>
    // })

    // return [
    //   <h1 key="1">Hello, React!</h1>,
    //   <h2 key="2">Hello, React!</h2>,
    //   <h3 key="3">Hello, React!</h3>
    // ]
    // return "hello world"
  }
}

//定义了一个类组件
export default App
//render是类组件的一个方法，返回一个React元素
//在这里返回了一个h1元素，内容是state中的name属性
// render函数的额返回值
/*
  当render函数被调用的时候会检查this.state和this.props的值，如果有变化，就会重新渲染
  返回react元素
  <div>会
*/