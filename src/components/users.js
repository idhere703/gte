import React from 'react';
import User from './user';
import usersData from '../data/users';

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: usersData.getUsers(),
        };
    }

    render() {
        return (
            <div>
              <ul className="user-section">
                { this.state.users &&
                  this.state.users.map((user, index) => {
                      return (<User key={ `user-${index}` } user={ user }></User>);
                  }) }
              </ul>
            </div>
            );
    }
}

export default Users;