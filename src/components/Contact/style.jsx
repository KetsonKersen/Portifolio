import styled from "styled-components"

export const SectionStyle = styled.section`
    width: 100%;
    min-height: calc(100vh - 8rem);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-repeat: no-repeat;
    background-position: center;

    position: relative;
    overflow: hidden;
    .bgContact{
        width: auto;
        max-height: 100%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        z-index: -1;
        opacity: 0.05;
    }
    .containerContact{
        width: fit-content;
        display: flex;
        flex-direction:column;
        gap: 2rem;
        z-index: 1;
    }

    h3{
        font-size: 3rem;
        font-weight: 200;
    }
   .containerImg{
        width: 25rem;
        height: 25rem;
        background-color: white;
        overflow: hidden;
        border-radius: 2rem;
    }
    .containerInf{
        width: 100%;
        display:flex;
        flex-direction: column;
        gap: 1rem;

        div{
            display: flex;
            gap: 2rem;
            align-items: center;
            justify-content: space-between;

            a{
                width: 100%;
                height: 4rem;
                border: 1px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4rem;
            }
            a:hover{
                border-color: var(--color);
                color: var(--color);
            }
        }
    }
    


`;