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
}

export const ORDER_STATUSES = {
    done: {name: 'Виконані', status: 'done'},
    processing: {name: 'Обробляються', status: 'processing'},
    canceled: {name: 'Скасовано', status: 'canceled'},
}

export const NAV_BAR = [
    {link: 'categories', name: 'Categories'},
    {link: 'subcategories', name: 'Subcategories'},
    {link: 'products', name: 'Products'},
    {link: 'orders', name: 'Orders'},
]
