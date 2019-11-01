import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getRequest} from '../actions/getRequest'
import {Card} from 'semantic-ui-react'
import styled from 'styled-components'

function SmurfData(props) {
    useEffect(()=>{
        props.getRequest()
    },[])
    console.log(props)

    const Image = styled.img`
        height: 20rem;
    `
    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        margin-top: 5rem;
        flex-wrap: wrap;
    `
    const Header = styled.h1`
        text-align: center;
    `
    return (
        <>
        <Header>Your Village</Header>
        <Container>
            {props.smurfs && props.smurfs.map((smurf, index) => (
                <Card>
                    <Image src='http://pngimg.com/uploads/smurf/smurf_PNG35.png' wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{smurf.name}</Card.Header>
                        <Card.Meta>Height: {smurf.height}</Card.Meta>
                        <Card.Description>Age: {smurf.age}</Card.Description>
                    </Card.Content>
                </Card>
            ))}
        </Container>
        </>
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

