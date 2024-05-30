import {Button, TextField} from "@salutejs/plasma-ui";
import {Headline3, Headline5, Modal, Select} from "@salutejs/plasma-web";
import React, {useState} from "react";

const Buttons = () => {
    const [isExpenseOpen, setIsExpenseOpen] = React.useState(false);
    const [isIncomeOpen, setIsIncomeOpen] = React.useState(false);
    const [isDeleteExpenseOpen, setIsDeleteExpenseOpen] = React.useState(false);
    const [isDeleteIncomeOpen, setIsDeleteIncomeOpen] = React.useState(false);

    const closeExpense = React.useCallback(() => {setIsExpenseOpen(false);});
    const closeIncome = React.useCallback(() => {setIsIncomeOpen(false);});
    const closeDeleteExpense = React.useCallback(() => {setIsDeleteExpenseOpen(false);});
    const closeDeleteIncome = React.useCallback(() => {setIsDeleteIncomeOpen(false);});
    const [value, setValue] = useState(null);
    const items_Expense = [
        {
            value: 'empty',
            label: 'Выберите...',
            isDisabled: true
        },
        {
            value: 'clothes',
            label: 'Одежда',
        },
        {
            value: 'products',
            label: 'Продукты',
        },
        {
            value: 'house',
            label: 'Дом',
        },
        {
            value: 'restaurants',
            label: 'Рестораны',
        },
        {
            value: 'services',
            label: 'Услуги',
        },
        {
            value: 'entertainments',
            label: 'Развлечения',
        }
    ];
    const [dateInputExpense, setDateInputExpense] = React.useState('');
    const [dateInputIncome, setDateInputIncome] = React.useState('');
    const [dateInputExpenseChange, setDateInputExpenseChange] = React.useState('');
    const [dateInputIncomeChange, setDateInputIncomeChange] = React.useState('');
    const handleDateChangeExpense = (e) => {
        setDateInputExpense(e.target.value);
    };
    const handleDateChangeExpenseChange = (e) => {
        setDateInputExpenseChange(e.target.value);
    };
    const handleDateChangeIncome = (e) => {
        setDateInputIncome(e.target.value);
    };
    const handleDateChangeIncomeChange = (e) => {
        setDateInputIncomeChange(e.target.value);
    };
    const items_Income = [
        {
            value: 'empty',
            label: 'Выберите...',
            isDisabled: true
        },
        {
            value: 'salary',
            label: 'Зарплата',
        },
        {
            value: 'gift',
            label: 'Подарок',
        },
        {
            value: 'other_income',
            label: 'Иной доход',
        }
    ];
    return(
<div className="button-bar">
    <Button m={10}  size="l" pin="circle-clear" text="Добавить расходы" onClick={() => setIsExpenseOpen(true)} />
    <Modal isOpen={isExpenseOpen} onClose={closeExpense}>
        <Headline3 mb={20}>Добавить расходы</Headline3>
        <Headline5 mt={10} mb={10}>Название</Headline5>
        <TextField placeholder="Объект" />
        <Headline5 mt={10} mb={10}>Тип:</Headline5>
        <Select
            value={value}
            items={items_Expense}
            onChange={(v) => {
                setValue(v);
            }}
            placeholder="Выберите..."
            status="success"
        />
        <Headline5 mt={10} mb={10}>Стоимость:</Headline5>
        <TextField
            placeholder="Введите сумму"/>
        <Headline5 mt={10} mb={10}>Дата покупки:</Headline5>
        <TextField
            type="date"
            label="Укажите дату"
            value={dateInputExpense}
            onChange={handleDateChangeExpense}
        />

        <Button stretch="true" text="Добавить" onClick={closeExpense} className="button-bar-modal"/>

    </Modal>

    <Button size="l" pin="clear-clear" text="Добавить доходы" onClick={() => setIsIncomeOpen(true)} />
    <Modal isOpen={isIncomeOpen} onClose={closeIncome}>
        <Headline3 mb={20}>Добавить доходы</Headline3>
        <Headline5 mt={10} mb={10}>Название</Headline5>
        <TextField
            label="Зарплата"
        />
        <Headline5 mt={10} mb={10}>Тип:</Headline5>
        <Select
            value={value}
            items={items_Income}
            onChange={(v) => {
                setValue(v);
            }}
            placeholder="Выберите..."
            status="success"
        />
        <Headline5 mt={10} mb={10}>Сумма:</Headline5>
        <TextField
            placeholder="Введите сумму"/>
        <Headline5 mt={10} mb={10}>Дата зачисления:</Headline5>
        <TextField
            type="date"
            label="Укажите дату"
            value={dateInputIncome}
            onChange={handleDateChangeIncome}
        />
        <Button stretch="true" text="Добавить" onClick={closeIncome} className="button-bar-modal"/>
    </Modal>

    <Button size="l" pin="clear-clear" text="Удалить покупку" onClick={() => setIsDeleteExpenseOpen(true)} />
    <Modal isOpen={isDeleteExpenseOpen} onClose={closeDeleteExpense}>
        <Headline3 mb={20}>Удалить покупку</Headline3>
        <Headline5 mt={10} mb={10}>Название</Headline5>
        <TextField
            label="Зарплата"
        />
        <Headline5 mt={10} mb={10}>Тип:</Headline5>
        <Select
            value={value}
            items={items_Expense}
            onChange={(v) => {
                setValue(v);
            }}
            placeholder="Выберите..."
            status="success"
        />
        <Headline5 mt={10} mb={10}>Сумма:</Headline5>
        <TextField
            placeholder="Введите сумму"/>
        <Headline5 mt={10} mb={10}>Дата зачисления:</Headline5>
        <TextField
            type="date"
            label="Укажите дату"
            value={dateInputExpenseChange}
            onChange={handleDateChangeExpenseChange}
        />
        <Button text="Удалить" stretch="true" onClick={closeDeleteExpense} className="button-bar-modal"/>
    </Modal>

    <Button size="l" pin="clear-circle" text="Удалить доход" onClick={() => setIsDeleteIncomeOpen(true)} />
    <Modal isOpen={isDeleteIncomeOpen} onClose={closeDeleteIncome}>
        <Headline3 mb={20}>Удалить доход</Headline3>
        <Headline5 mt={10} mb={10}>Название</Headline5>
        <TextField
            label="Объект"
        />
        <Headline5 mt={10} mb={10}>Тип:</Headline5>
        <Select
            value={value}
            items={items_Income}
            onChange={(v) => {
                setValue(v);
            }}
            placeholder="Выберите..."
            status="success"
        />
        <Headline5 mt={10} mb={10}>Сумма:</Headline5>
        <TextField
            placeholder="Введите сумму"/>
        <Headline5 mt={10} mb={10}>Дата зачисления:</Headline5>
        <TextField
            type="date"
            label="Укажите дату"
            value={dateInputIncomeChange}
            onChange={handleDateChangeIncomeChange}
        />
        <Button text="Удалить" stretch="true" onClick={closeDeleteIncome} className="button-bar-modal"/>
    </Modal>
</div>);
};
export default Buttons;