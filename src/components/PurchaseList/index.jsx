import React from 'react'
import { ListGroup} from 'react-bootstrap'
import orderBy from 'lodash/orderBy';

import {Spinner, Time} from '../index';
import {purchaseSumCounter, purchaseStatusVariant} from "../../utils";


import './style.scss';

const PurchaseList = ({ items, isLoading, onSelectItem }) => {

    const ItemContent = ({ item, index }) => {
        const { user, createdAt, products } = item;
        const totalSum = purchaseSumCounter(products)

        return (
            <div className='list-item-content'>
                <div className='list-item-content__index'>{index+1}.</div>
                <div className='list-item-content__name'>{user.name} {user.surname}</div>
                <div className='list-item-content__sum'>{totalSum} UAH</div>
                <Time date={createdAt}/>
            </div>
        )
    };

    return (
        <div className='list-container'>      {
            isLoading ? <Spinner /> :
                <>
                    <ListGroup>
                        {items.length > 0 ?
                            orderBy(items, ['createdAt'], 'desc').map((item, index) => (
                                <ListGroup.Item
                                    key={item.id}
                                    action variant={purchaseStatusVariant(item.status)}
                                    onClick={() => onSelectItem(item)}
                                >
                                    <ItemContent item={item} index={index} />
                                </ListGroup.Item>))
                            : 'Список порожній'}
                    </ListGroup>
                </>
        }
        </div>
    )
}

export default PurchaseList
