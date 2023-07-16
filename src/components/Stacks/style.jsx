import styled from "styled-components"

export const SectionStyled = styled.section`
    width: 100%;
    max-width: 124rem;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;


    .containerSkills{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        border-radius: 2rem;
        overflow: hidden;


        h3{
            font-size: 3rem;
            font-weight: 200;
            text-align:center;
            background-color: var(--bgCard);
            padding: 2rem 0;
        }

        .containerHard{
        display: grid;
           gap: .5rem;

            ul{
                display: grid;
                grid-template-columns: repeat(5 , 1fr);
                gap: .5rem;
            }
   
            li{
                width: 100%;
                height: 10rem;
                background-color: var(--bgCard);
                padding: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: .2s;
            }
            li:nth-of-type(6):hover{
                filter: invert(1);
                background-color: #000;
            }
            li:hover{
                background-color: #fff;
            }
        }

        .containerSoft{
            div{
                width: 100%;
                height: 6rem;
                margin: 0 auto;
                overflow: hidden;
                position: relative;
                background-color: var(--bgCard);

                ul{
                    display: grid;
                    grid-template-columns:repeat(15, 1fr);
                    gap: 1rem;
                    animation: 8s moviment linear infinite;
                    transform:translateX(0rem);
                    
                }
                
                @keyframes moviment {
                    0%{
                        transform:translateX(0rem);
                    }
                    100%{
                        transform:translateX(calc(-124rem + 19rem));
                    }
                }
                li{
                    min-width: 20rem;
                    height: 4rem;
                    background-color: var(--color);
                    color: black;
                    box-shadow: 0 4px 7px #000000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 200;
                    border-radius: .5rem;

                }
            }
            div::after{
                content:'';
                width: 5%;
                height: 100%;
                background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(37,37,41,1) 100%);
                position: absolute;
                top:0;
                right:0;
            }
            div::before{
                content:'';
                width: 5%;
                height: 100%;
                background: linear-gradient(90deg, rgba(37,37,41,1) 0%, rgba(255,255,255,0) 100%);
                position: absolute;
                top:0;
                left:0;
                z-index: 1;
            }
        }
        
    }

    @media (max-width: 960px){
        max-width: 72rem;
        padding: 2rem;
    }
  
    @media screen and (max-width: 720px){
        max-width: 72rem;
        .containerSkills  .containerHard{
            ul{
                grid-template-columns: 50% 50%;
            }
            li{
                height: 8rem;   
            }
        
        }   
    }
    
`;