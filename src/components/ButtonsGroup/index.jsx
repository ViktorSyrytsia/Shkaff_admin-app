import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ButtonsGroup = ({ items, onChange }) => {

        const onSelected = (e) => {
                onChange(e);
        }

        return (
                <ButtonGroup className='list-filter-buttons' aria-label="Basic example">
                        <Button variant='outline-dark' onClick={(e) => onSelected(e)}>All</Button>
                        {items && items.map(item =>
                                <Button
                                        key={item.id}
                                        variant={activeClass}
                                        onClick={(e) => onSelected(e)}
                                >
                                        {item.name}


                                </Button>)}
                </ButtonGroup>
        )
}

export default ButtonsGroup
