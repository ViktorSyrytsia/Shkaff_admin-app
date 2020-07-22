import React, {useState} from 'react'
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap'

const DropdownBar = ({items, selectedValue, setSelectedValue}) => {

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id={`dropdown-variants-${'Secondary'}`}
                variant={'secondary'}
                title={selectedValue || 'Виберіть опцію'}
            >
                {
                    items.map((item, i) => (
                        <Dropdown.Item
                            key={item.id}
                            data-id={item.id}
                            eventKey={i}
                            onSelect={setSelectedValue}>
                            {item.name}
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton>{' '}
        </>
    )
}

export default DropdownBar
