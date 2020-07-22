import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import './style.scss';

const ButtonsGroup = ({ items, onChange }) => {
        const [radioValue, setRadioValue] = useState('all');
        const onSelected = (e) => {
                onChange(e);
                setRadioValue(e.currentTarget.value)
        }

        return (
                <ButtonGroup className='list-filter-buttons' toggle>
                        <Button
                                  value={'all'}
                                variant={radioValue === 'all' ? "secondary" : "outline-secondary"}
                                onClick={(e) => onSelected(e)}>All

                        </Button>
                        {items.map((item, idx) => (
                                <Button
                                        key={item.id}
                                        variant={radioValue === idx ? "secondary" : "outline-secondary"}
                                        value={idx}
                                        onClick={(e) => onSelected(e)}
                                >
                                        {item.name}
                                </Button>
                        ))}
                </ButtonGroup>
        )
}

export default ButtonsGroup
