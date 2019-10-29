import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/action';

const SmurfForm = props => {

    const [smurf, setSmurf] = useState({name: '', height: '', age: ''})

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addSmurf({
            ...smurf, 
            age: parseInt(smurf.age, 10)
        })
        setSmurf({name: '', height: '', age: ''})
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Smurf name' name='name' value={smurf.name} onChange={handleChange}/>
            <input type='text' placeholder='Smurf height' name='height' value={smurf.height} onChange={handleChange}/>
            <input type='text' placeholder='Smurf age' name='age' value={smurf.age} onChange={handleChange}/>
            <button>Submit Smurf</button>
        </form>
    )
}

const mapStateToProps = state => ({
    addSmurf: state.addSmurf
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
