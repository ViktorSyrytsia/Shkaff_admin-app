import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Spinner from '../Spinner/';

import './style.scss';

const List = ({ items, isLoading, onSelectItem, onDeleteItem }) => {

        const ItemContent = ({ name, id }) => (
                <div className='list-item-content'>
                        <div className='list-item-content-name'>{name}</div>
                        <div className='list-item-content-buttons'>
                                <Button variant="outline-warning" onClick={() => onSelectItem(id)}>Редагувати</Button>
                                <Button variant="outline-danger" onClick={() => onDeleteItem(id, name)}>Видалити</Button>
                        </div>
                </div >
        );

        return (
                <div className='list-container'>      {
                        isLoading ? <Spinner /> :
                                <>
                                        <ListGroup>
                                                {items.length > 0 ?
                                                        items.map(item =>
                                                                <ListGroup.Item
                                                                        key={item.id}><ItemContent
                                                                                id={item.id}
                                                                                name={item.name} />
                                                                </ListGroup.Item>)
                                                        : 'Немає жодної категорії'}
                                        </ListGroup>
                                </>


                }

                </div>
        )
}

export default List
