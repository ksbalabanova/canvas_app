import React from 'react';
import { Headline4, Headline5 } from '@salutejs/plasma-web';
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
const SummaryComponent = ({ title1, title2, amount1, amount2 }) => (
    <div className="SummaryComponent">
        <List>
            <Headline4 my={10}>{title1}</Headline4>
            <Headline5 m={10}><div>{amount1}</div></Headline5>
            <Headline4 mb={10} mt={20}>{title2}</Headline4>
            <Headline5 m={10}><div>{amount2}</div></Headline5>
        </List>
    </div>
);

export default SummaryComponent;
