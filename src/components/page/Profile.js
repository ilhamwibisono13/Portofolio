import React, {Component} from 'react';
import PersonList from '../PersonList'

class Profile extends Component {
    render() {
        return (
            <div>
                <h2>Halaman Profile</h2>
                <hr/>
                <PersonList/>
            </div>
        );
    }
}

export default Profile;
