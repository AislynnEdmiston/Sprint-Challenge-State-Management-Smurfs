import React from 'react'
import { connect } from 'react-redux';
import Smurf from './Smurf'
import { getSmurfs } from '../actions/action'
import SmurfForm from './SmurfForm';

const SmurfList = (props) => {
    const fetchSmurfs = event => {
        event.preventDefault();
        props.getSmurfs()
    }

    return (
        <div>
            <SmurfForm />
            <button onClick={fetchSmurfs}>Fetch Smurfs</button>
            {props.smurfs.map(smurf => 
                <Smurf  smurf={smurf}/>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
