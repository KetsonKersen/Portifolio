import {styled} from "styled-components"

export const SectionStyle = styled.section`
    width: 100%;
    min-height: calc(100vh - 8rem);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10rem 0;

    .containerProjects{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 30% 1fr;
        gap: 2rem;


        .containerOptions{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 1rem;
            background-color: var(--bg400);
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
            border-radius: 2rem;
            padding: 2rem;
            h3{
                display: none;
            }
            
            .containerImg{
                width: 100%;
                height: fit-content;
                overflow: hidden;
                position: relative;
                transition: .5s;   
                border-radius: 2rem;
                padding-bottom: 3rem;


                p{  
                    width: 100%;
                    background-color: var(--color);
                    text-align: center;
                    font-size: 1.8rem;
                    padding: 1rem 0;
                    position: absolute;
                    bottom: 0;
                    color: black;
                }
            }

         
        }
        .containerPreview{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2rem;  
            background-color: var(--bg400);
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
            border-radius: 2rem;
            padding: 2rem;

            button.close{
                display: none;
                position: absolute;
                right:2rem;
                top: 3rem;
                padding: 1rem;
                background-color: transparent;
                color: white;
            }

            h2{
                font-size: 3rem;
                font-weight: 200;
                text-align: center;
            }
            p{
                text-align: left;
                min-height: 10rem;
            }
            img{
                width: 90%;
                border-radius: 2rem;
            }
            .containerBtn{
                width: 100%;
                height: 5rem;
                display: flex;
                align-items: end;
                gap: 5rem;

                a{
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    color: black;
                    border-radius: .5rem;
                    font-size: 1.8rem;  
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;   
                    transition: .2s;      
                }
                a:first-of-type{
                    background-color: var(--color);
                }
                a:last-of-type{
                    background-color:transparent;
                    border: 1px solid white;
                    color: white;
                }
                a:hover{
                    transform: scale(105%);
                }
            }
        }
    }

    @media screen and (max-width: 720px){
        height: 100%;
        padding: 2rem;
    
        .containerProjects{
            width: 100%;
            height: 100%;
            display: flex;
            
            .containerOptions{
                gap: 2rem;
                box-shadow: none;
                padding: 0rem;
                background-color: transparent;
                h3{
                    font-size: 3rem;
                    font-weight: 200;
                    text-align: center;
                    display: block;
                }
            
            }
            .containerPreview{
                position: fixed;
                top: 0;
                left: 0;
                z-index: 55;
                text-align: center;

                button.close{
                    display: block;
                }

                p{
                    text-align: center;
                    min-height: 10rem;
                }
      
            }
        }

    }
`;

export const CardOptionProject = styled.div`

`;