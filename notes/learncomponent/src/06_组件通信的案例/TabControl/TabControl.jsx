// import React, { Component } from "react";
// import "./TabControl.css";
// export default class TabControl extends Component {
//     constructor() {
//         super();
//         this.state = {
//             currentIndex: 0,
//         };
//     }
//     itemClick(index) {
//         this.setState({
//             currentIndex: index,
//         });
//         this.props.tabClick(index);
//     }
//     render() {
//         const { titles } = this.props;
//         const { currentIndex } = this.state;
//         return (
//             <div className="tab-control">
//                 {titles.map((item, index) => {
//                     return (
//                         <div
//                             className={`item ${
//                                 index === currentIndex ? "active" : ""
//                             }`}
//                             key={item}
//                             onClick={(e) => this.itemClick(index)}
//                         >
//                             <span className="text"> {item}</span>
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }
// }
import React, { useState } from "react";
import "./TabControl.css";

export default function TabControl({ titles, tabClick }) {
    // 使用 useState 替代类组件中的 state
    const [currentIndex, setCurrentIndex] = useState(0);

    // 点击项的处理函数
    const itemClick = (index) => {
        setCurrentIndex(index); // 更新当前选中的 tab 索引
        tabClick(index); // 调用父组件传递的回调函数
    };

    return (
        <div className="tab-control">
            {titles.map((item, index) => {
                return (
                    <div
                        className={`item ${
                            index === currentIndex ? "active" : ""
                        }`}
                        key={item}
                        onClick={() => itemClick(index)}
                    >
                        <span className="text"> {item}</span>
                    </div>
                );
            })}
        </div>
    );
}
