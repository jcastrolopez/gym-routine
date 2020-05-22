import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../node_modules/react-bootstrap';
import PropsTypes from 'prop-types'

class Routine extends Component {
    render() {
        const { id, name, type} = this.props.routine;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>
                    <Button variant="waring" onClick={ this.props.delRoutine.bind(this, id) } ><i className="fa fa-trash"></i></Button>
                    <Link to={{
                    pathname: '/routines/update',
                    aboutProps: {
                        routine: this.props.routine
                    }
                    }}>
                        <Button variant="waring" ><i className="fa fa-pencil"></i></Button>
                    </Link>
                </td>
            </tr>
        );
    }
}

Routine.PropsType = {
    routine: PropsTypes.object.isRequired,
    delRoutine: PropsTypes.func.isRequired
}

export default Routine;