import React, {useEffect, useState} from 'react'
import {FormControl, InputGroup} from 'react-bootstrap'

const Index = ({sizes, setSizes}) => {
    const [inputFields, setInputFields] = useState([])

    useEffect(() => {
        setInputFields(Object.values(sizes))
    }, [sizes])


    const handleInputChange = (e, idx, key) => {
        const values = [...inputFields];
        values[idx] = +e.target.value;
        setInputFields(values)

        const newSizes = {...sizes}
        newSizes[key] = +e.target.value
        setSizes(newSizes)
    }

    return (
        <div className='list-container'>
            {
                Object.keys(sizes).map((item, i) => {
                    if (item === '__typename') return
                    return (
                        <InputGroup key={item} size='sm' className="mb-3" style={{width: 130}}>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon3">
                                    {item.toLocaleUpperCase()}
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="basic-url" aria-describedby="basic-addon3"
                                         value={inputFields[i] || '0'}
                                         onChange={(e) => handleInputChange(e, i, item)}
                            />
                        </InputGroup>
                    )
                })
            }
        </div>
    )
}

export default Index
