import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table, Button, InputGroup, FormControl, Badge} from 'react-bootstrap';

import {DropdownBar, Time} from '../../';
import {deleteOrder, setOrder, updateOrderStatus} from "../../../redux/order/order.actions";
import {orderSumCounter, orderStatusVariant} from "../../../utils";
import {ORDER_STATUSES} from '../../../config'

import './style.scss';

const OrderRedactor = ({setRedactorState}) => {
    const dispatch = useDispatch()
    const order = useSelector(({Orders}) => Orders.order);

    const {user, delivery, status, createdAt, connectionMethod, products} = order

    const [newStatus, setNewStatus] = useState(null)
    const [dropdownBarValue, setDropdownBarValue] = useState(null)

    const onSelectDropdownBarItem = (key, e) => {
        setNewStatus(e.target.dataset.status)
        setDropdownBarValue(e.target.innerText)
    }

    const onChangeStatus = () => {
        if (dropdownBarValue) {
            dispatch(setOrder({...order, status: newStatus}))
            dispatch(updateOrderStatus({id: order.id, status: newStatus}))
            setDropdownBarValue(null)
        } else {
            window.alert('Всі поля повинні бути заповнені!')
        }
    }

    const onDeletePurchase = () => {
        if (window.confirm('Видалити замовлення?')) {
            dispatch(deleteOrder(order.id))
            setRedactorState(false)
        }
    }

    return (
        <div className='purchase'>
            <h3 className={'purchase__header'}>Замовлення #{order.id.slice(order.id.length - 6, order.id.length)}</h3>
            <h6>Створено: <Time date={createdAt}/></h6>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Покепець:
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3"
                             value={`${user.name} ${user.surname}`}
                             disabled
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Email:
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3"
                             value={user.email}
                             disabled
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Телефон:
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3"
                             value={user.phone}
                             disabled
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Метод зв‘язку:
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3"
                             value={connectionMethod}
                             disabled
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Спосіб доставки:
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3"
                             value={`${delivery.method}, ${delivery.city} ${delivery.postOffice}`}
                             disabled
                />
            </InputGroup>

            {
                delivery.address && <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon3">
                            Адреса:
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="basic-url" aria-describedby="basic-addon3"
                                 value={`${delivery.address.street}, ${delivery.address.built} ${delivery.address.apartment}`}
                                 disabled
                    />
                </InputGroup>
            }
            <hr/>
            <Table striped bordered size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Товар</th>
                    <th>Категорія</th>
                    <th>Розмір</th>
                    <th>Кількість</th>
                    <th>Ціна за шт.</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}, {product.subcategory}</td>
                            <td>{product.size}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <h6>На суму: {orderSumCounter(products)} UAH</h6>
            <hr/>

            <div className='purchase__status'>
                <h6>Статус: <Badge variant={orderStatusVariant(status)}>{ORDER_STATUSES[status].name}</Badge></h6>
                <DropdownBar
                    items={Object.values(ORDER_STATUSES)}
                    selectedValue={dropdownBarValue}
                    setSelectedValue={onSelectDropdownBarItem}
                    size
                />
                <Button size="sm" variant="primary" onClick={onChangeStatus}>
                    Змінити статус
                </Button>
            </div>

            <div className={'purchase__delete'}>
                <Button variant="outline-dark" onClick={onDeletePurchase}>
                    Видалити
                </Button>
            </div>
        </div>
    )
}

export default OrderRedactor;
