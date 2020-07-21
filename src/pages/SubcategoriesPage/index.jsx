import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap';

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/Category';
import {
        addSubcategory,
        updateSubcategory,
        deleteSubcategory,
        setSubcategory
} from "../../redux/subcategory/subcategory.actions";

import './style.scss';

const SubcategoriesPage = () => {
        const { subcategories, isLoading } = useSelector(({ Subcategories }) => ({
                subcategories: Subcategories.list,
                isLoading: Subcategories.loading
        }))
        const dispatch = useDispatch();

        const [showRedactor, setShowRedactor] = useState(false);
        const [filter, setFilter] = useState('all');
        console.log(filter);
        const [saveOptions, setSaveOptions] = useState('');

        const onSelectSubcategory = (id) => {
                dispatch(setSubcategory(id));
                setShowRedactor(true);

                id === '' ? setSaveOptions('add') : setSaveOptions('edit')
        }

        const onAddSubcategory = (subcategory) => {
                dispatch(addSubcategory(subcategory))
        }

        const onEditSubcategory = (subcategory) => {
                dispatch(updateSubcategory(subcategory))
        }

        const onDeleteSubcategory = (id, name) => {
                if (window.confirm(`Видалити ${name}?`)) {
                        dispatch(deleteSubcategory(id))
                }
        }

        return (
                <div className='page-container'>
                        <div className='page-list'>
                                <Button className='list-add-button'
                                        variant="primary"
                                        onClick={() => onSelectSubcategory('')}> Додати +</Button>
                                <ButtonGroup className='list-filter-buttons' aria-label="Basic example">
                                        <Button onClick={() => setFilter('mans')} variant="outline-dark">Чоловікам</Button>
                                        <Button onClick={() => setFilter('women')} variant="outline-dark">Жінкам</Button>
                                        <Button onClick={() => setFilter('children')} variant="outline-dark">Для дому</Button>
                                        <Button onClick={() => setFilter('home')} variant="outline-dark">Дітям</Button>
                                </ButtonGroup>
                                <List
                                        items={subcategories}
                                        isLoading={isLoading}
                                        onSelectItem={onSelectSubcategory}
                                        onDeleteItem={onDeleteSubcategory}
                                />
                        </div>
                        <div className='page-item'>
                                {showRedactor ? <CategoryRedactor
                                        onAddSubcategory={onAddSubcategory}
                                        onEditSubcategory={onEditSubcategory}
                                        saveOptions={saveOptions}
                                /> :
                                        <div className='page-item-message'>Редагуйте елемет зі списку, або добавте новий</div>}

                        </div>
                </div>
        )
}

export default SubcategoriesPage
