import React from "react";
import "./counter.css";

const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div className="counter">
            <h1 className="counter-text">{number}</h1>

            <button className="counter-btn" onClick={onDecrease}>- 1</button>
            <button className="counter-btn" onClick={onIncrease}>+ 1</button>
        </div>
    );
};

export default Counter;
