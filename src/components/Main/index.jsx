import React, {useState} from 'react';
import '../../App.css';
import '../../style/test.scss'
import styled from 'styled-components'
import MainTitle from "./MainTitle";
import MainBtn from "./MainBtn";

const Main = styled.div``

const Index = ({title}) => {
    const [titleColor, setTitleColor] = useState('white');

    console.log(title);

    const clickHandler = () => {
        setTitleColor(titleColor !== 'red' ? 'red' : 'white');
    }

    const arr = [
        'text 1',
        'text 2',
        'text 3'
    ]

    return (
        <Main>
            <MainTitle titleColor={titleColor}>{title}</MainTitle>

            {arr.map((item, index) =>
                <p key={index}>{item}</p>
            )}

            <MainBtn onClick={clickHandler}>Btn</MainBtn>
        </Main>
    );
}

export default Index;
