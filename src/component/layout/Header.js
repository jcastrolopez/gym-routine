import React from '../../../node_modules/react';
import { Navbar } from '../../../node_modules/react-bootstrap';

export default () => {
    return (
        <Navbar bg="warning">
        <Navbar.Brand href="/">
          <img
            src="/gym_routines_logo.jpg"
            width="60"
            height="40"
            className="d-inline-block align-top"
            alt="Gym Routine logo"
          />
        </Navbar.Brand>
      </Navbar>
    );
}