import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {getPurchases, setPurchase} from "../../redux/purchase/purchase.actions";
import {ButtonsGroup, PurchaseList, PurchaseRedactor} from "../../components";
import {PURCHASE_STATUSES} from "../../config";

import './style.scss'

const PurchasesPage = () => {
    const dispatch = useDispatch();
    const { isLoading, purchases } = useSelector(({ Purchases }) => ({
        isLoading: Purchases.loading,
        purchases: Purchases.list
    }))

    useEffect(() => {
        dispatch(getPurchases());
    }, [dispatch])

    const [showRedactor, setShowRedactor] = useState(false);
    const [filter, setFilter] = useState(false);

    const onSelectPurchase = (item) => {
        dispatch(setPurchase(item));
        setShowRedactor(true)
    }

    const onFilterChange = (e) => {
        e.target.innerText === 'All' ? setFilter(false) : setFilter(e.target.dataset.status);
    }

    return (
        <div className='page-container'>
            <div className='page-list'>
                <ButtonsGroup onChange={onFilterChange} items={Object.values(PURCHASE_STATUSES)} />
                <PurchaseList
                    items={filter ? purchases.filter(purchase => purchase.status === filter) : purchases}
                    isLoading={isLoading}
                    onSelectItem={onSelectPurchase}
                />
            </div>
            <div className='page-item'>
                {
                    showRedactor ? <PurchaseRedactor setRedactorState={setShowRedactor}/> :
                    <div className='page-item-message'>Натисніть на замовлення, щоб отримати детальнішу інформацію</div>
                }
            </div>
        </div>
    )
}

export default PurchasesPage
