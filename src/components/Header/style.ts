import styled from 'styled-components'


export const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;

`;

export const Line = styled.div`
    background-color: #4865db;
    height: 5px;
    width: 18%;
    border-radius: 30px;


`;

export const Point = styled.div`
    background-color: #4865db;
    padding: 10px;
    width: 20px;
    text-align: center;
    border-radius: 50%;
    color: white;
    margin-right:5px ;


`;

export const A = styled.a`
    display: flex;
    text-decoration: none;
    color: black;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover  {
        color: #4865db 
    }


`;