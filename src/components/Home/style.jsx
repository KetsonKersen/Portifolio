import styled from "styled-components"
import bgHome from "../../assets/bgHome.jpg"



export const SectionStyle = styled.section`
    width: 100%;
    height: calc(100vh - 8rem);
    display: flex;

    .bgHome{
    width: 40%;
    height: 100%;
    background-image: url(${bgHome});
    background-repeat: no-repeat;
    background-position: 0 70%;
    background-size: cover;
    position: relative;
    }
    .bgHome::after{
        content: '';
        width: 20%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(30,30,32,1) 100%);
    }
    .containerContent{
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 65%;
        position: relative;
        z-index: 2;

        img{
            max-width: 100%; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
            z-index: 1;
            opacity: 0.05;
        }

    }
    .contentHome{
        width: fit-content;
        z-index: 2;
    }
    .contentHome h1{
        font-family: 'Unica One', cursive;
        font-size: 12rem;
        font-weight: 200;
    }
    .contentHome h3{
        font-size: 5rem;
        font-weight: 100;
        margin-bottom: 2.2rem;
    }
    .contentHome a{
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .5rem;
        transition: .2s;
    }
    .contentHome a:hover{
                    transform: scale(105%);
                }
    .contentHome a:first-of-type{
        background-color: var(--color);
        color: black;
    }
    .contentHome a:last-of-type{
        background-color: transparent;
        border: 1px solid var(--white);
    }

    @media (max-width: 1200px){
        .contentHome h1{
            font-size: 10rem;
        }
        .contentHome h3{
            font-size: 6rem;
            margin-bottom: 2rem;
        }
    }
    @media (max-width: 1024px){
        .containerContent{
            width: 50%;
        }
        .bgHome{
            width: 50%;
            height: 100%;
        }
        .contentHome h1{
            font-size: 8rem;
        }
        .contentHome h3{
            font-size: 5rem;
            margin-bottom: 2rem;
        }
    }
    @media (max-width: 960px){
        height: calc(100vh - 8rem);
        flex-direction: column;
        
    

        .bgHome{
            width: 100%;
            height: 100%;
            background-position: 0 70%;
            background-size: cover;
            position: relative;
        }
        .bgHome::after{
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(27,24,24,1) 115%);
        }
        .containerContent{
            width: 100%;
            height: fit-content;
            text-align: center;
            background-image:none;
            position: absolute;
            bottom: 2rem;
            
            img{
                display: none;
            }
        }
        .contentHome h1{
            font-size: 10rem;
        }
        .contentHome h3{
            font-size: 6rem;
            margin-bottom: 2rem;
        }
    }
    @media(max-width: 768px){
        .contentHome h1{
            font-size: 6.5rem;
        }
        .contentHome h3{
            font-size: 4rem;
            margin-bottom: 2rem;
        }
    }
    @media screen and (max-width: 400px){
        height: calc(100vh - 8rem);
        flex-direction: column;

        .bgHome{
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            position: relative;
        }
        .bgHome::after{
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(27,24,24,1) 115%);
        }
        .containerContent{
            width: 100%;
            height: fit-content;
            text-align: center;
            background-image:none;
            position: absolute;
            bottom: 5rem;
           
        }
        .contentHome h1{
            font-size: 5rem;
        }
        .contentHome h3{
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }
    @media screen and (max-width: 320px){
        height: calc(100vh - 8rem);
        flex-direction: column;

        .bgHome{
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            position: relative;
        }
        .bgHome::after{
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(27,24,24,1) 115%);
        }
        .containerContent{
            width: 100%;
            height: fit-content;
            text-align: center;
            background-image:none;
            position: absolute;
            bottom: 5rem;
            
        }
        .contentHome h1{
            font-size: 5rem;
        }
        .contentHome h3{
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }

`;