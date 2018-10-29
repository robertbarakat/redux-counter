import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increase, decrease, reset, plusten, minusten } from '../actions/modify';

const ShowCounter = ({ counter, increase, decrease, reset, plusten, minusten }) => (
    <div>
        <p>{counter}</p>
        <button onClick={() => plusten(counter)}>+10</button>
        <button onClick={() => increase(counter)}>+1</button>
        <button onClick={() => decrease(counter)}>-1</button>
        <button onClick={() => minusten(counter)}>-10</button>
        <button onClick={() => reset(counter)}>Reset</button>
    </div>
)

function mstp(state){
    return {counter: state.counter}
}

function mdtp(dispatch){
    return bindActionCreators({increase, decrease, reset, plusten, minusten}, dispatch)
}

export default connect(mstp, mdtp)(ShowCounter)

