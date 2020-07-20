import React from 'react';

import List from '../../components/List';
import CategoryRedactor from '../../components/Redactors/CategoryRedactor';

import './style.scss'

const CategoriesPage = () => {
        return (
                <div className='page-container'>
                        <div className='page-list'>
                                <List></List>
                        </div>
                        <div className='page-item'>
                                <CategoryRedactor />
                        </div>
                </div>
        )
}

export default CategoriesPage
