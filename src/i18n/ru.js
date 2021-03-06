export default {
    locale: "ru",
    pluralRuleFunction:function(e,a){var t=String(e).split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&n>=2&&n<=4&&(l<12||l>14)?"few":o&&0==n||o&&n>=5&&n<=9||o&&l>=11&&l<=14?"many":"other"},
    messages: {
        "PAY_SALARY_CASH_UA": "зарплата",
        "CONTACT_US_HEADER": "Наши контакты",
        "CONTACT_US_TEXT": "Какой-то текст про контакты",
        "NAVIGATION_HEADER": "Супер Ферма",
        "NAVIGATION_MENU_MAIN": "Внешнее",
        "NAVIGATION_MENU_NOT_MAIN": "Внутреннее",
        "LEFT_SIDE_HEADER": "Заголовок слева",
        "LEFT_SIDE_TEXT": "Текст слева",
        "LATEST_OPERATIONS": "Последние операции",
        "ENTER_DATE": "Дата заведения",
        "EXPECTED_COMMIT_DATE": "Ожидаемая дата совершения",
        "FACT_COMMIT_DATE": "Фактическая дата совершения",
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
        "EDIT": "Редактировать",
        "PROFILE" : "Профиль",

        "MAIN_NAV_BASE": "Сводная информация",
        "MAIN_NAV_DOCUMENTS_EXT": "Внешние документы",
        "MAIN_NAV_PARTNERS": "Партнеры",
        "MAIN_NAV_SHIPS_EXPECTED": "Ожидаемые поставки",
        "MAIN_NAV_SHIPS_LIABILITIES": "Запланированные отгрузки",
        "MAIN_NAV_PAYMENTS_LIABILITIES": "Запланированные платежи",
        "MAIN_NAV_PAYMENTS_EXPECTED": "Ожидаемые оплаты",


        "NO_USER_TO_SHOW": "Нет пользователя для отображения",
        "NO_ADDRESSES_TO_SHOW": "Нет адресов для отображения",

        "RECENT_DOCUMENTS": "Посдедние введенные документы",
        "DOCUMENT_TYPE": "Тип документа",
        "SUBJECT": "Предмет",
        "BUY_RAW_MATERIALS": "Покупка сырья",
        "PAY_SALARY": "Выплата зарплаты"
    }
}
