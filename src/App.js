import { Container } from '@salutejs/plasma-ui/components/Grid';
import React from 'react';
import './App.css';
import DynamicTable from "./components/DynamicTable";
import Logo from "./components/Logo";
import SummaryComponent from "./components/SummaryComponent";
import Buttons from "./components/Buttons";


export function App() {
    return (
        <Container className='App'>
            <Logo/>
            <Buttons/>
            <div className="row">
                <DynamicTable title="Расходы:"/>
                <DynamicTable title="Доходы:"/>
                <SummaryComponent title1="Сумма зачисления за месяц:" title2="Сумма расходы за месяц:" amount1="Стоимость" amount2="Стоимость"/>
            </div>
        </Container>
    );
}


