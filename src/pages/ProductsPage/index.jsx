import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import ProductRedactor from '../../components/Redactors/Product';
import {
        deleteProduct,
        setProduct
} from "../../redux/product/product.actions";
import { Button } from 'react-bootstrap';

import './style.scss'

const ProductsPage = () => {
        const { categories, isLoading, products } = useSelector(({ Categories, Products }) => ({
                categories: Categories.list,
                isLoading: Products.loading,
                products: Products.list
        }))
        const dispatch = useDispatch();

        const [redactorState, setRedactorState] = useState('');
        const [showRedactor, setShowRedactor] = useState(false);

        const onAddProduct = () => {
                setRedactorState('add')
                setShowRedactor(true);
                dispatch(setProduct(null))
        }

        const onEditProduct = (product) => {
                setRedactorState('edit')
                setShowRedactor(true);
                dispatch(setProduct(product))
        }

        const onDeleteProduct = ({ id, name }) => {
                window.confirm(`Видалити ${name}?`) && dispatch(deleteProduct(id))
        }

        return (
                <div className='page-container'>
                        <div className='page-list'>
                                <Button className='list-add-button'
                                        variant="primary"
                                        onClick={onAddProduct}> Додати +</Button>
                                <List
                                        items={categories}
                                        isLoading={isLoading}
                                        onEditItem={onEditProduct}
                                        onDeleteItem={onDeleteProduct}
                                />
                        </div>
                        <div className='page-item'>
                                {showRedactor ? <ProductRedactor
                                        redactorState={redactorState}
                                /> :
                                        <div className='page-item-message'>Редагуйте елемет зі списку або добавте новий</div>}

                        </div>
                </div>
        )
}

export default ProductsPage;
