import React, { Component } from 'react';
import { Table, Button } from '../../node_modules/react-bootstrap';
import SearchFriend from './SearchFriend';
import Friend from './Friend';
import PropsTypes from 'prop-types'


class Friends extends Component {
  state = {
    searchedFriend: ''
  }

  updateSearchedFriend = (newSearchedFriend) => {
    this.setState({searchedFriend: newSearchedFriend})
  }

  render() {
    const friends = this.props.friends.filter(friend => friend.firstName.startsWith(this.state.searchedFriend))
    return(
      <div className="abm-container">
        <div className="action-container">
          <div className="action-container-left">
            <SearchFriend searchedFriend={ this.state.searchedFriend } updateSearchedFriend={ this.updateSearchedFriend }/>
          </div>
          <div className="action-container-right">
            <Button href="/friends/create" variant="warning">New</Button>
          </div>
        </div>
        <Table striped hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend) => (
                <Friend key={ friend.id } friend={ friend } delFriend={ this.props.delFriend }/>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

Friends.PropsTypes = {
  friends: PropsTypes.array.isRequired,
  delFriend: PropsTypes.func.isRequired
}

export default Friends;

