import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from 'react-bootstrap';

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/Category';
import {
    getSubcategories,
    addSubcategory,
    updateSubcategory,
    deleteSubcategory,
    setSubcategory
} from "../../redux/subcategory/subcategory.actions";

const SubcategoriesPage = () => {
    const {subcategories, isLoading} = useSelector(({Subcategories}) => ({
        subcategories: Subcategories.list,
        isLoading: Subcategories.loading
    }))
    const dispatch = useDispatch();

    const [saveOptions, setSaveOptions] = useState('');

    const onSelectSubcategory = (id) => {
        dispatch(setSubcategory(id));
        setShowRedactor(true);

        id === '' ? setSaveOptions('add') : setSaveOptions('edit')
    }

    useEffect(() => {
        dispatch(getSubcategories())
    }, [dispatch])

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
    const [showRedactor, setShowRedactor] = useState(false);

    return (
        <div className='page-container'>
            <div className='page-list'>
                <Button className='list-add-button'
                        variant="primary"
                        onClick={() => onSelectSubcategory('')}> Додати +</Button>
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
