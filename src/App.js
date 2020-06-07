import React, { Component } from 'react';
import Header from './component/layout/Header';
import SideBar from './component/layout/SideBar';
import Friend from './component/Friend';
import SaveFriend from './component/SaveFriend';
import List from './component/List';
import Routine from './component/Routine';
import SaveRoutine from './component/SaveRoutine';
import Home from './component/Home';

import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

export default class App extends Component {
  state = {
    friends: [{
      id:1,
      firstName: "juan",
      lastName: "castro",
      age: 26
    },
    {
      id:2,
      firstName: "alan",
      lastName: "castro",
      province: "Catamarca",
      gender: 1,
      age: 26
    },
    {
      id:3,
      firstName: "sol",
      lastName: "souto",
      age: 26
    }],
    routines: [
      {
        id: 1,
        name: "first ",
        description: "aerobic 3 days by week",
        type: "aerobic",
        exercises: [
          {
            id: 1,
            name: "pecho plano",
            series: 3,
            repetitions: 20
          }
        ]
      }
    ]
  }

  deleteFriend = (id) => {
    this.setState({ friends: [...this.state.friends.filter(friend => friend.id !== id)] });
  }

  addFriend = (friend) => {
    this.setState({ friends: [...this.state.friends, friend] });
  }

  updateFriend = (newFriend) => {
    this.setState({ friends: this.state.friends.map(friend => {
      if (friend.id === newFriend.id) {
        friend = newFriend
      }
      return friend;
      })
    });
  }

  getFriendTitles = () => {
    return(
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    )
  }

  getNewFriend = (friend, delFriend) => {
    return(
      <Friend key={ friend.id } friend={ friend } delFriend={ delFriend }/>
    )
  }

  deleteRoutine = (id) => {
    this.setState({ routines: [...this.state.routines.filter(routine => routine.id !== id)] });
  }

  getRoutineTitles = () => {
    return(
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>
    )
  }

  getNewRoutine = (routine, delRoutine) => {
    return (
      <Routine key={ routine.id } routine={ routine } delRoutine={ delRoutine }/>
    )
  }

  render() {
    return (
      <div>
        <Header/>
        <SideBar/>
        <div className="items-container">
          <BrowserRouter>
            <Route exact path="/home" render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )} />
            <Route exact path="/friends" render={props => (
                <React.Fragment>
                  <List 
                  items={ this.state.friends } 
                  deleteItem={ this.deleteFriend } 
                  searchedField={ 'firstName' }
                  searchPlaceholder={ 'First Name' }
                  searchAriaLabel={ 'First Name' }
                  url={'/friends/create'}
                  getTitles={ this.getFriendTitles }
                  getNewItem={ this.getNewFriend } 
                  />
                </React.Fragment>
              )} />
              <Route exact path="/friends/create" render={props => (
                <React.Fragment>
                  <SaveFriend friend={{}} saveFriend={ this.addFriend }/>
                </React.Fragment>
              )} />
              <Route exact path="/friends/update" render={props => (
                <React.Fragment>
                  <SaveFriend friend={props.location.aboutProps !== undefined ? props.location.aboutProps.friend : {}}
                  saveFriend={ this.updateFriend }/>
                </React.Fragment>
              )} />
              <Route exact path="/routines" render={props => (
                <React.Fragment>
                  <List 
                  items={ this.state.routines } 
                  deleteItem={ this.deleteRoutine } 
                  searchedField={ 'name' }
                  searchPlaceholder={ 'Name' }
                  searchAriaLabel={ 'Name' }
                  url={'/routines/create'}
                  getTitles={ this.getRoutineTitles }
                  getNewItem={ this.getNewRoutine } 
                  />
                </React.Fragment>
              )} />
              <Route exact path="/routines/create" render={props => (
                <React.Fragment>
                  <SaveRoutine />
                </React.Fragment>
              )} />
              <Route exact path="/routines/update" render={props => (
                <React.Fragment>
                  <SaveRoutine />
                </React.Fragment>
              )} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
