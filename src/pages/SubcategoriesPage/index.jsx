import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from 'react-bootstrap';

import {List, ButtonsGroup, SubcategoryRedactor} from '../../components';
import {
    deleteSubcategory, getSubcategories,
    setSubcategory
} from "../../redux/subcategory/subcategory.actions";

import './style.scss';

const SubcategoriesPage = () => {
    const dispatch = useDispatch();
    const {subcategories, isLoading, categories} = useSelector(({Subcategories, Categories}) => ({
        subcategories: Subcategories.list,
        isLoading: Subcategories.loading,
        categories: Categories.list
    }))

    useEffect(() => {
        dispatch(getSubcategories());
    }, [dispatch])

    const [filter, setFilter] = useState(false);
    const [redactorState, setRedactorState] = useState('');
    const [showRedactor, setShowRedactor] = useState(false);

    const onAddSubcategory = () => {
        setRedactorState('add')
        setShowRedactor(true);
        dispatch(setSubcategory(null))
    }

    const onEditSubcategory = (category) => {
        setRedactorState('edit')
        setShowRedactor(true);
        dispatch(setSubcategory(category))
    }

    const onDeleteSubcategory = ({id, name}) => {
        window.confirm(`Видалити ${name}?`) && dispatch(deleteSubcategory(id))
    }

    const onCategoryChange = (e) => {
        e.target.innerText === 'Всі' ? setFilter(false) : setFilter(e.target.innerText);
    }

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                        variant="primary"
                        onClick={onAddSubcategory}> Додати +</Button>
                <ButtonsGroup onChange={onCategoryChange} items={categories}/>
                <List
                    items={filter ? subcategories.filter(subcategory => subcategory.category.name === filter) : subcategories}
                    isLoading={isLoading}
                    onEditItem={onEditSubcategory}
                    onDeleteItem={onDeleteSubcategory}
                />
            </div>
            <div className='page-item'>
                {showRedactor ? <SubcategoryRedactor
                        redactorState={redactorState}
                    /> :
                    <div className='page-item-message'>Редагуйте елемет зі списку або добавте новий</div>}

            </div>
        </div>
    )
}

export default SubcategoriesPage
