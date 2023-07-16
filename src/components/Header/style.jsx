import styled from "styled-components"

export const HeaderStyle = styled.header`
    width: 100%;
    height: 10rem;
    background-color: var(--bg400);
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    ul{
        display: flex;
        gap: 2rem;
        font-weight: 400;
        margin-right: -2rem;
    }
    li{
        padding: 2rem;
        cursor: pointer;
        position: relative;
    }
    li.active{
        color: var(--color);
        transform: scale(120%);
        transition: .2s;
    }
    li.active:after{
        width: 1.2rem;
        height: 1.2rem;
        content: '';
        background-color: var(--color);
        border-radius: 1rem;
        box-shadow: 0px 4px 7px var(--color);
        position: absolute;
        bottom: -1.5rem;
        left: 50%;
        transform: translate(-50% , 0);
        animation: .2s movimentMark linear;
    }
    #btnModal{
        display: none;
        background-color: transparent;
        color: var(--color);
    }
    @keyframes movimentMark {
        0%{
            bottom: 1rem;
        }
        100%{
            bottom: -1.5rem;
        }
    }

    @media screen and (max-width: 768px){
        z-index: 2;
        span{
            display: none;
        }
        ul{ 
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            position: absolute;
            top: 10rem;
            left:  0;
            background-color: #111111;
            transition: .5s;
            z-index: -1;
            transform: translate(0 , -120%);
        }
        a,li{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        li.active:after{
            display:none;
        }
    }
    @media screen and (max-width: 320px){
        display: none;
        transform: translate(0 , -100%);
    }
`;