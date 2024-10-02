import React from "react";
import Index from "./nav-bar/index.jsx";

const App = () => {
    return (
        <div>
            <Index>
                <button>按钮</button>
                <div className="item left">左边</div>
                <div className="item center">中间</div>
                <div className="item right">右边</div>
            </Index>
        </div>
    );
};

export default App;
