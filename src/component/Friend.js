import React, { Component } from 'react'
import { Button } from '../../node_modules/react-bootstrap';
import PropsTypes from 'prop-types'
import { Link } from 'react-router-dom';

class Friend extends Component {
    render() {
        const { id, firstName, lastName, age } = this.props.friend;
        return (
            <tr>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <Button variant="waring" onClick={ this.props.delFriend.bind(this, id) } ><i className="fa fa-trash"></i></Button>
                    <Link to={{
                    pathname: '/friends/update',
                    aboutProps: {
                        friend: this.props.friend
                    }
                    }}>
                        <Button variant="waring" ><i className="fa fa-pencil"></i></Button>
                    </Link>
                </td>
            </tr>
        );
    }
}

Friend.PropsType = {
    friend: PropsTypes.object.isRequired,
    delFriend: PropsTypes.func.isRequired
}

export default Friend;