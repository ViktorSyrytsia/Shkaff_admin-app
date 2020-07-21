import React from 'react'
import { DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap'

const DropdownBar = ({items}) => {

    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                id={`dropdown-variants-${'Secondary'}`}
                variant={'secondary'}
                title={'Secondary'}
            >
                {
                    items.map((item,i) => (
                        <Dropdown.Item eventKey={i}>{item.name}</Dropdown.Item>
                    ))
                }
            </DropdownButton>{' '}
        </>
    )
}

export default DropdownBar
