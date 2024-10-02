// import React, { Component } from "react";
// import TabControl from "./TabControl/TabControl";

// export class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             titles: ["流行", "新款", "精选"],
//             tabIndex: 0,
//         };
//     }
//     tabClick(tabIndex) {
//         this.setState({
//             tabIndex,
//         });
//     }
//     render() {
//         const { titles, tabIndex } = this.state;
//         return (
//             <div className="app">
//                 <TabControl
//                     titles={titles}
//                     tabClick={(i) => this.tabClick(i)}
//                 />
//                 <h1>{titles[tabIndex]}</h1>
//             </div>
//         );
//     }
// }

// export default App;
import React, { useState } from "react";
import TabControl from "./TabControl/TabControl";

export default function App() {
    // 使用 useState 初始化 titles 和 tabIndex
    const [titles] = useState(["流行", "新款", "精选"]);
    const [tabIndex, setTabIndex] = useState(0);

    // 处理 Tab 点击事件
    const tabClick = (index) => {
        setTabIndex(index);
    };

    return (
        <div className="app">
            <TabControl titles={titles} tabClick={tabClick} />
            <h1>{titles[tabIndex]}</h1>
        </div>
    );
}
