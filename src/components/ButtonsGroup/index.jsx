import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ButtonsGroup = ({ items, onChange }) => {
        return (
                <ButtonGroup className='list-filter-buttons' aria-label="Basic example">
                        <Button variant='outline-dark' onClick={onChange}>All</Button>
                        {items && items.map(item =>
                                <Button
                                        key={item.id}
                                        variant='outline-dark'
                                        onClick={onChange}>
                                        {item.name}

                                </Button>)}
                </ButtonGroup>
        )
}

export default ButtonsGroup
