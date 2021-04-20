import React from "react";
import Counter from "../components/Counter";
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";

const CounterContainer = ({counterNum, increase, decrease}) => {
    return <Counter number={counterNum} onIncrease={increase} onDecrease={decrease}/>;
};


const mapStateToProps = state => ({
    counterNum: state.counter.number
});

const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
