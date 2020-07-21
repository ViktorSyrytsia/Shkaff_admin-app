import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import Spinner from '../Spinner/';

import './style.scss';

const List = ({ items, isLoading, onAddItem, onEditItem, onDeleteItem }) => {


        const ItemContent = ({ name }) => (
                <div className='list-item-content'>
                        <div className='list-item-content-name'>{name}</div>
                        <div className='list-item-content-buttons'>
                                <Button variant="outline-warning" onClick={onEditItem}>Редагувати</Button>
                                <Button variant="outline-danger" onClick={onDeleteItem}>Видалити</Button>
                        </div>
                </div>
        );

        return (
                <>
                        <Button className='list-add-button' variant="primary" onClick={onAddItem}>Додати +</Button>
                        {isLoading ?
                                <Spinner /> :
                                <ListGroup>
                                        {items.length > 0 ?
                                                items.map(item => <ListGroup.Item key={item.id}><ItemContent name={item.name} /></ListGroup.Item>)
                                                : 'Немає жодної категорії'}
                                </ListGroup>}

                </>
        )
}

export default List
