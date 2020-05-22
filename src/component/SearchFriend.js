import React, { Component } from 'react';
import { FormControl, InputGroup } from '../../node_modules/react-bootstrap';
import { MdSearch } from 'react-icons/md';

class SearchFriend extends Component {
    state = {}

    handleChange = (event) => {
        this.props.updateSearched(event.target.value)
    }

    render() {
        return (
            <InputGroup className="col-sm-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" ><MdSearch /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder={ this.props.placeholder }
                aria-label={ this.props.ariaLabel }
                aria-describedby="basic-addon1"
                value={this.state.value}
                onChange={ this.handleChange }
                />
            </InputGroup>
        )
    }
}

export default SearchFriend;