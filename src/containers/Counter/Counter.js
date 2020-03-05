import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ActionCreators from '../../action/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //     }
    // }

    render() {
        console.log(this.props.ctr, this.props.results)
        return (
            <React.Fragment>
                <div>
                    <CounterOutput value={this.props.ctr} />
                    <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                    <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                    <CounterControl label="Add 5" clicked={() => this.props.onAdding5(5)} />
                    <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract5(5)} />

                </div>
                <div>
                    <button onClick={() => { this.props.onStoreVal(this.props.ctr) }}>Store Result</button>
                    {this.props.results.length > 0 ? this.props.results.map((value, index) => {
                        return <span key={index} style={{ margin: '10px 10px', display: 'block' }} onClick={() => { this.props.deleteVal(index) }}>{value}</span>
                    }) : null}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(ActionCreators.inc_val()),
        onDecrementCounter: () => dispatch(ActionCreators.dec_val()),
        onAdding5: (val) => dispatch(ActionCreators.add_5(val)),
        onSubtract5: (val) => dispatch(ActionCreators.sub_5(val)),
        deleteVal: (id) => { dispatch(ActionCreators.del_val(id)) },
        onStoreVal: (val) => { dispatch(ActionCreators.store_val(val)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);