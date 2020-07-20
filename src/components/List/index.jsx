import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'

import './style.scss';

const categories = [
        { name: "Чоловікам", id: "1", image: "https://hips.hearstapps.com/esq.h-cdn.co/assets/15/13/1427301596-mcdonalds-big-mac-apparel-jacket.jpg?resize=480:*" },
        { name: "Жінкам", id: "2", image: "https://hips.hearstapps.com/esq.h-cdn.co/assets/15/13/1427301596-mcdonalds-big-mac-apparel-jacket.jpg?resize=480:*" },
        { name: "Дітям", id: "3", image: "https://hips.hearstapps.com/esq.h-cdn.co/assets/15/13/1427301596-mcdonalds-big-mac-apparel-jacket.jpg?resize=480:*" },
        { name: "Для дому", id: "4", image: "https://hips.hearstapps.com/esq.h-cdn.co/assets/15/13/1427301596-mcdonalds-big-mac-apparel-jacket.jpg?resize=480:*" },
]

const List = ({items}) => {

        const ItemContent = ({ name }) => (
                <div className='list-item-content'>
                        <div className='list-item-content-name'>{name}</div>
                        <div className='list-item-content-buttons'>
                                <Button variant="outline-warning">Редагувати</Button>
                                <Button variant="outline-danger">Видалити</Button>
                        </div>
                </div>
        );

        return (
                <>
                        <Button className='list-add-button' variant="primary">Додати</Button>
                        <ListGroup>
                                {items.length > 0 ?
                                    items.map(item => <ListGroup.Item key={item.id}><ItemContent name={item.name} /></ListGroup.Item>)
                                        : 'Немає жодної категорії'}
                        </ListGroup>
                </>
        )
}

export default List
