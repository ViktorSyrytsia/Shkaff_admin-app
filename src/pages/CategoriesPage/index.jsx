import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/CategoryRedactor';
import { getCategories } from "../../redux/category/category.actions";

import './style.scss'

const CategoriesPage = () => {
    const { categories, isLoading } = useSelector(({ Categories }) => ({
        categories: Categories.list,
        isLoading: Categories.loading
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    })

    return (
        <div className='page-container'>
            <div className='page-list'>
                <List items={categories} isLoading={isLoading} />
            </div>
            <div className='page-item'>
                <CategoryRedactor />
            </div>
        </div>
    )
}

export default CategoriesPage
