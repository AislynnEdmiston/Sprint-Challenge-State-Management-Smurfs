import React from 'react'
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/action'

const SmurfList = (props) => {
    const fetchSmurfs = event => {
        event.preventDefault();
        props.getSmurfs
    }

    return (
        <div>
            {props.smurfs.map(smurf => (
                <div>
                <h3>{smurf.name}</h3>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
