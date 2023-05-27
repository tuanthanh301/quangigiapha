import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../common/colors';
export const HeaderWrapper = styled.div`
    width: 100%;
    height: 44px;
    background-color: rgb(0,0,0,0.8);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: sticky;
    z-index: 1;
    top: 0;
`
export const ItemHeader = styled(Link)`
    color: ${colors.itemHeader};
    margin: 0 12px; 
    padding: 0 8px;
    cursor: pointer;
    font-size: 12px;
    text-decoration: none;
    :hover{
        color:${colors.white};
    }
`
