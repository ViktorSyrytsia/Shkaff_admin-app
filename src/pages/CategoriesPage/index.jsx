import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/CategoryRedactor';
import {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
} from "../../redux/category/category.actions";

import './style.scss'

const CategoriesPage = () => {
    const { categories, isLoading } = useSelector(({ Categories }) => ({
        categories: Categories.list,
        isLoading: Categories.loading
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const category = {
        id: "5f16176d292d054aa84d4392",
        name: "Home interior",
        image: "www.home-interior.com"
    }

    const onAddCategory = () => {
        dispatch(addCategory(category))
    }

    const onEditCategory = () => {
        dispatch(updateCategory(category))
    }

    const onDeleteCategory = () => {
        dispatch(deleteCategory(category.id))
    }

    return (
        <div className='page-container'>
            <div className='page-list'>
                <List items={categories}
                      isLoading={isLoading}
                      onAddItem={onAddCategory}
                      onEditItem={onEditCategory}
                      onDeleteItem={onDeleteCategory}
                />
            </div>
            <div className='page-item'>
                <CategoryRedactor />
            </div>
        </div>
    )
}

export default CategoriesPage
