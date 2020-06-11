import React, { Component, useContext } from 'react';
import { NavigationBar } from '../components/navbar';
import { Photo } from '../components/photo';
import { UserContext } from '../App';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount = () => {
        // console.log("username: ", this.props.location.state.name)
        fetch("http://localhost:3001/photos")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    photos: data,
                })
            })
    }

    render() {
        //const userInfo = useContext(UserContext);
        return (
            <div style={{ backgroundColor: '#ebf2f9' }}>
                <NavigationBar />
                <div className="photoRow">
                    {
                        this.state.photos.map((photo) => (
                            < Photo key={photo._id} photo={photo} />
                        ))
                    }
                </div>
            </div>);
    }
}

export { Home };
