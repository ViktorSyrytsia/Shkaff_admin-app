export const routes = {
    pathToLogin: '/',
    pathToCategories: '/categories',
    pathToSubcategories: '/subcategories',
    pathToProducts: '/products',
    pathToOrders: '/orders'
};

export const SNACKBAR_MESSAGES = {
    add: {
        success: 'Додано успішно',
        error: 'Щось пішло не так',
    },
    update: {
        success: 'Зміненно успішно',
        error: 'Не вдалось оновити',
    },
    delete: {
        success: 'Видалено успішно',
        error: 'Не вдалось видалити',
    },
    login: {
        success: 'Вітаємо! Вхід успішний'
    }
}

export const ORDER_STATUSES = {
    done: {name: 'Виконані', status: 'done'},
    processing: {name: 'Обробляються', status: 'processing'},
    canceled: {name: 'Скасовано', status: 'canceled'},
}

export const MENU_ITEMS = [
    {name: 'Categories', link: '/categories', color: '#ea3f34'},
    {name: 'Subcategories', link: '/subcategories', color: '#f2982c'},
    {name: 'Products', link: '/products', color: '#52a360'},
    {name: 'Orders', link: '/orders', color: '#674794'},
    {name: 'Settings', link: '/settings', color: '#212529'},
]
