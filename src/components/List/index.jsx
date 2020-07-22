import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import Spinner from '../Spinner/';

import './style.scss';

const List = ({items, isLoading, onEditItem, onDeleteItem}) => {

    const ItemContent = ({item}) => {
        const {name, __typename} = item;

        return (
            <div className='list-item-content'>
                <div className='list-item-content-name'>{name}</div>
                {
                    __typename === 'Subcategory' &&
                    <div className='list-item-content-subName'>{item.category.name}</div>
                }
                {
                    __typename === 'Product' &&
                    <div className='list-item-content-subName'>{item.subcategory.name}, {item.category.name}</div>
                }
                <div className='list-item-content-buttons'>
                    <Button variant="outline-warning" onClick={() => onEditItem(item)}>Редагувати</Button>
                    <Button variant="outline-danger" onClick={() => onDeleteItem(item)}>Видалити</Button>
                </div>
            </div>
        )
    };

    return (
        <div className='list-container'>      {
            isLoading ? <Spinner/> :
                <>
                    <ListGroup>
                        {items.length > 0 ?
                            items.map(item => (
                                <ListGroup.Item
                                    key={item.id}>
                                    <ItemContent item={item}/>
                                </ListGroup.Item>))
                            : 'Список порожній'}
                    </ListGroup>
                </>
        }
        </div>
    )
}

export default List
