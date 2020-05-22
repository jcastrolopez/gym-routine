import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import SearchFriend from './SearchFriend';

class List extends Component {
    state = {
        searched: ''
      }
    
      updateSearched = (newSearched) => {
        this.setState({searched: newSearched})
      }
    
      render() {
        const items = this.props.items.filter(item => item[this.props.searchedField].startsWith(this.state.searched))
        return(
          <div className="abm-container">
            <div className="action-container">
              <div className="action-container-left">
                <SearchFriend searched={ this.state.searched } placeholder={this.props.searchPlaceholder} ariaLabel={this.props.searchAriaLabel} updateSearched={ this.updateSearched }/>
              </div>
              <div className="action-container-right">
                <Button href={this.props.url} variant="warning">New</Button>
              </div>
            </div>
            <Table striped hover>
              <thead>
                { this.props.getTitles() }
              </thead>
              <tbody>
                { items.map((item) => this.props.getNewItem(item, this.props.deleteItem)) }
              </tbody>
            </Table>
          </div>
        );
      }
}

export default List;