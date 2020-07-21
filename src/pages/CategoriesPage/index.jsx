import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/CategoryRedactor';
import { Button } from 'react-bootstrap';
import { getCategories, selectCategory } from "../../redux/category/category.actions";

import './style.scss'

const CategoriesPage = () => {
    const { categories, isLoading } = useSelector(({ Categories }) => ({
        categories: Categories.list,
        isLoading: Categories.loading
    }))
    const dispatch = useDispatch();

    const onSelectCategory = (id) => {
        dispatch(selectCategory(id));
        setShowRedactor(true);
    }

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const [showRedactor, setShowRedactor] = useState(false);

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                    variant="primary"
                    onClick={() => onSelectCategory(null)}>Додати</Button>
                <List
                    items={categories}
                    isLoading={isLoading}
                    onSelectItem={onSelectCategory}
                />
            </div>
            <div className='page-item'>
                {showRedactor ? <CategoryRedactor /> :
                    'Sorry'}

            </div>
        </div>
    )
}

export default CategoriesPage
