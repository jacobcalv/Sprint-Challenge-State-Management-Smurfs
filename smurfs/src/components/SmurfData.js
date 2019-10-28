import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getRequest} from '../actions/getRequest'

function SmurfData(props) {
    useEffect(()=>{
        props.getRequest()
    },[])
    console.log(props)
    return (
        <div>
            {props.smurfs && props.smurfs.map((smurf, index) => (
                <div>
                <h1>{smurf.name}</h1>
                <h2>Height: {smurf.height}</h2>
                <h2>Age: {smurf.age}</h2>
                </div>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return{
        smurfs: state.get.smurfs
    }
}

const mapDispatchToProps = {
    getRequest
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SmurfData)

