import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class SaveFriend extends Component {
    state = {
        genders: [{id: 1, name: "Male"}, {id: 2, name: "Female"}, {id: 3, name: "Others"}],
        friend: this.props.friend,
        selectedRadio: this.props.friend !== undefined ? this.props.friend.gender : null
    }
     
    selectGender = (gender) => {
        const friend = this.state.friend;
        friend['gender'] = gender.id;
        this.setState({
            selectedRadio: gender.id,
            friend: friend
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveFriend(this.state.friend);
        this.props.history.push('/friends');
    }

    handleChange = (event) => {
        const friend = this.state.friend;
        friend[event.target.name] = event.target.value;
        this.setState({ friend });
    }

    render() {
        return (
            <Form className="add-container" onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        defaultValue={this.state.friend.firstName}
                        value={this.state.value} 
                        name="firstName" 
                        onChange={this.handleChange} 
                        placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.lastName} 
                        value={this.state.value} 
                        name="lastName" 
                        onChange={this.handleChange} 
                        placeholder="Enter last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridProvince">
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.province}  
                        value={this.state.value} 
                        name="province" 
                        onChange={this.handleChange} 
                        placeholder="Buenos Aires"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.city}   
                        value={this.state.value} 
                        name="city" 
                        onChange={this.handleChange} 
                        placeholder="Ciudad Autonoma de Buenos Aires"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.address} 
                        value={this.state.value} 
                        name="address" 
                        onChange={this.handleChange} 
                        placeholder="1234 Street" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.age} 
                        type="number" 
                        value={this.state.value} 
                        name="age" 
                        onChange={this.handleChange} 
                        placeholder="-" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.birthday} 
                        value={this.state.value} 
                        name="birthday" 
                        onChange={this.handleChange} 
                        type="date" />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.height}
                        value={this.state.value} 
                        name="height" 
                        onChange={this.handleChange} 
                        type="number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.weight} 
                        value={this.state.value} 
                        name="weight" 
                        onChange={this.handleChange} 
                        type="number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGender">
                        <Form.Label>Gender</Form.Label>
                        <div className="mb-3">
                            {this.state.genders.map(
                                (gender) => {
                                    return(
                                        <Form.Check
                                        key={gender.id}
                                        custom
                                        inline
                                        label={gender.name}
                                        type="radio"
                                        id={gender.id}
                                        checked = { this.state.selectedRadio === gender.id }
                                        onChange = { this.selectGender.bind(this, gender) }
                                        />
                                    );
                                })}
                        </div>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridRoutine">
                        <Form.Label>Routine</Form.Label>
                        <Form.Control
                        defaultValue={this.state.friend.routine} 
                        value={this.state.value} 
                        name="routine" 
                        onChange={this.handleChange} 
                        as="select" custom>
                            <option>Biceps</option>
                            <option>Triceps</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button variant="warning" type="submit" value="submit">
                    Save
                </Button>
            </Form>
        );
    }
}

//TODO: PropsType

export default withRouter(SaveFriend);