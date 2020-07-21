import React from 'react';
import { Spinner as LoadingBar } from 'react-bootstrap';

import './style.scss';

const Spinner = () => {
        return (
                <LoadingBar animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                </LoadingBar>
        )
}

export default Spinner
