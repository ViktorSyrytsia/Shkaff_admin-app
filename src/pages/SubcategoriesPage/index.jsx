import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from 'react-bootstrap';

import List from '../../components/List';
import ButtonsGroup from '../../components/ButtonsGroup';
import SubcategoryRedactor from '../../components/Redactors/Subcategory';
import {
        addSubcategory,
        updateSubcategory,
        deleteSubcategory,
        setSubcategory
} from "../../redux/subcategory/subcategory.actions";

import './style.scss';

const SubcategoriesPage = () => {
        const { subcategories, isLoading, categories } = useSelector(({ Subcategories, Categories }) => ({
                subcategories: Subcategories.list,
                isLoading: Subcategories.loading,
                categories: Categories.list
        }))

        const dispatch = useDispatch();

        const [showRedactor, setShowRedactor] = useState(false);
        const [filter, setFilter] = useState(false);
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

        const onCategoryChange = (e) => {
                if (e.target.innerText === 'All') {
                        setFilter(false);
                } else {
                        setFilter(e.target.innerText);
                }
        }

        return (
                <div className='page-container'>
                        <div className='page-list'>
                                <Button className='list-add-button'
                                        variant="primary"
                                        onClick={() => onSelectSubcategory('')}> Додати +</Button>
                                <ButtonsGroup onChange={onCategoryChange} items={categories} />
                                <List
                                        items={filter ? subcategories.filter(subcategory => subcategory.category.name === filter) : subcategories}
                                        isLoading={isLoading}
                                        onSelectItem={onSelectSubcategory}
                                        onDeleteItem={onDeleteSubcategory}
                                />
                        </div>
                        <div className='page-item'>
                                {showRedactor ? <SubcategoryRedactor
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
