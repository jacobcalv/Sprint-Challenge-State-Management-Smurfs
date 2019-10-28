import React, {useState} from 'react'
import {connect} from 'react-redux'
import {postRequest} from '../actions/postRequest'


function Form(props) {
    const [smurfName, setSmurfName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    const post = {
        name: smurfName,
        age: age,
        height: height + 'cm'
    }
    const handleName = e => {
        e.preventDefault();
        setSmurfName(e.target.value)
    }
    
    const handleAge = e => {
        e.preventDefault();
        setAge(e.target.value)
    }
    
    const handleHeight = e => {
        e.preventDefault();
        setHeight(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.postRequest(
            post
        );
        setSmurfName('')
        setAge('')
        setHeight('')
    }


    return (
        <form>
            <input
                type='text'
                name='name'
                onChange={handleName}
                placeholder='Type Name Here'
            />
            <input
                type= 'number'
                name='age'
                onChange={handleAge}
                placeholder='Type Age Here'
            />
            <input
                type = 'number'
                number= 'height'
                onChange={handleHeight}
                placeholder='Height in cm'
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}


const mapDispatchToProps = {postRequest}

export default connect(null, mapDispatchToProps)(Form)


