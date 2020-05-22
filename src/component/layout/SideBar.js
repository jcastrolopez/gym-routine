import React from '../../../node_modules/react';

export default () => {
    return (
        <div className="sidebar">
            <a href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            <a href="/friends"><i className="fa fa-fw fa-users"></i> Friends</a>
            <a href="/routines"><i className="fa fa-fw fa-list-alt"></i> Routines</a>
        </div>
    );
}