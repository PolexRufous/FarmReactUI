export default {
    locale: "ru",
    pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&n>=2&&n<=4&&(l<12||l>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&l>=11&&l<=14?"many":"other"},
    messages: {
        "PAY_SALARY_CASH_UA": "зарплата",
        "CONTACT_US_HEADER": "Наши контакты",
        "CONTACT_US_TEXT": "Какой-то текст про контакты",
        "NAVIGATION_HEADER": "Супер Ферма",
        "NAVIGATION_MENU_MAIN": "Главная",
        "NAVIGATION_MENU_NOT_MAIN": "Не главная",
        "LEFT_SIDE_HEADER": "Заголовок слева",
        "LEFT_SIDE_TEXT": "Текст слева",
        "LATEST_OPERATIONS": "Последние операции",
        "DATE": "Дата",
        "PARTNER": "Партнер",
        "PARTNERS": "Партнеры",
        "OPERATION": "Операция",
        "AMOUNT": "Сумма",
        "CHANGE": "Изменить",
        "MORE": "Дополнительно",
        "NAME": "Имя",
        "DESCRIPTION": "Описаине",
        "ADDRESS": "Адрес",
        "ACTIONS": "Действия",
        "REFRESH": "Обновить",
        "ADD": "Добавить",
        "SAVE": "Сохранить",
        "CANCEL": "Отмена",

        "MAIN_NAV_BASE": "Сводная информация",
        "MAIN_NAV_OPERATIONS_CASH": "Кассовые операции",
        "MAIN_NAV_PARTNERS": "Партнеры",
        "MAIN_NAV_SHIPS_EXPECTED": "Ожидаемые поставки",
        "MAIN_NAV_SHIPS_LIABILITIES": "Запланированные отгрузки",

        "NO_USER_TO_SHOW": "Нет пользователя для отображения"
    }
}
