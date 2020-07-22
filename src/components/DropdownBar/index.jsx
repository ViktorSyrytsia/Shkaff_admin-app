import React, {useState} from 'react'
import {DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap'

const DropdownBar = ({items}) => {
    const [selectedValue, setSelectedValue] = useState(null)

   const selectItem = (key, event) => {
        console.dir(event.target)
       setSelectedValue(event.target.innerText)
   }

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
                            onSelect={selectItem}>
                            {item.name}
                        </Dropdown.Item>
                    ))
                }
            </DropdownButton>{' '}
        </>
    )
}

export default DropdownBar
