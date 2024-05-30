import React, {useState} from "react";
import {Headline4} from "@salutejs/plasma-web";
import {Body1} from "@salutejs/plasma-ui";
import styled from 'styled-components'

const List = styled.div`
  background-color: rgba(255,255,255,0.06);
      //border: 1px solid white;
      color: white;
      margin: 15px;
      padding: 20px;
      padding-top: 1px;
      border-radius: 10px;
        `
;

const DynamicTable = ({ title }) => {
    const [tableData, setTableData] = useState([
        { col1: 'Молоко', col2: 'Продукты', col3: '300', col4: '29.05.2024' }
    ]);
    const addRow = () => {
        const newRow = { col1: 'Новое значение', col2: 'Новое значение', col3: 'Новое значение', col4: 'Новое значение' };
        setTableData([...tableData, newRow]);
    };
    return (
        <div>
            <List>
                <Headline4 my={10}>{title}</Headline4>
                <table>
                    <thead>
                    <tr>
                        <th><Body1>Предмет</Body1></th>
                        <th><Body1>Тип</Body1></th>
                        <th><Body1>Стоимость</Body1></th>
                        <th><Body1>Дата</Body1></th>
                    </tr>
                    </thead>

                    <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td><Body1>{row.col1}</Body1></td>
                            <td><Body1>{row.col2}</Body1></td>
                            <td><Body1>{row.col3}</Body1></td>
                            <td><Body1>{row.col4}</Body1></td>
                        </tr>
                    ))}
                    </tbody>


                </table>
            </List>

            <button onClick={addRow}>Добавить строку</button>
        </div>
    );
};
export default DynamicTable;
