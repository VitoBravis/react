import styled from "styled-components";

const MainTitle = styled.h1`
    position: relative;
    font-size: 50px;
    color: ${({ titleColor }) => titleColor};
    margin-top: 30px;
    
    &:hover {
    
    }
    
    &::before {
        content: '';
        background: ${({ titleColor }) => titleColor};
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -1px;
    }
`

export default MainTitle;
