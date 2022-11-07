import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 2%;
`;

export const SectionHeader = styled.header`
    width: 100%;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    z-index: 999;
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul.menu {
        list-style: none;
        display: flex;
        gap: 0 75px;
        align-items: center;
        li {
            cursor: pointer;
            position: relative;
            ul.dropBox {
                list-style: none;
                /* display: flex; */
                display: none;
                flex-direction: column;
                gap: 10px 0;
                position: absolute;
                top: 14px; /* 43 */
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.3);
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.3) 15px);
                padding: 33px 15px 10px 15px;
                li a {
                    color: white;
                }
            }
            button {
                cursor: pointer;
                padding: 5px 15px;
            }
            :hover ul.dropBox {
                /* background-color: red; */
                display: flex;
            }
        }
    }
    .logo a {
        color: white;
        text-decoration: none;
    }
`;

export const SectionHome = styled.section`
    height: 100vh;
    position: relative;
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        h2 {
            font-size: 4em;        
            span {
                color: var(--react-blue);
            }
        }
        p {
            font-size: 1.4em;
        }
    }
    
`;

export const SectionLogin = styled.section`
    form {
        width: 100%;
        max-width: 550px;
        background-color: black;
        padding: 30px 75px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h2 {
            text-align: center;
            margin: 20px 0 50px 0;
            font-size: 2em;
        }
    }
`;

export const InputSingle = styled.div`
    width: 100%;
    margin-top: 40px;
    position: relative;
    :first-of-type {
    margin-top: 0;
    }
    :last-of-type {
        margin-bottom: 10px
    }
    label {
        font-size: 1.2em;
        position: absolute;
        z-index: 1;
        left: 5px;
        bottom: 6px;
        color: var(--react-blue);
        cursor: text;
        transition: 0.5s ease-in-out;
        font-weight: bold;
    }
    .inputText {
        position: relative;
        z-index:2;
        width: 100%;
        padding: 5px;
        color: white;
        border: 0;
        border-bottom: 2px solid white;
        outline: 0;
        font-size: 16px;
        background-color: transparent;
    }
    .inputText:focus,
    .inputText:valid {
        border-bottom: 2px solid var(--react-blue);
    }
    .inputText:focus~label,
    .inputText:valid~label {
        transform: translateY(-27px);
        font-size: 14px;
        color: var(--roxo);
        left: 0;
    }
`;

export const SubmitSingle = styled.div`
    width: 100%;
    margin-top: 40px;
    input[type='submit'] {
        cursor: pointer;
        width: 100%;
        padding: 13px 0;
        border-radius: 10px;
        background-color: var(--react-blue);
        text-transform: uppercase;
        font-weight: bold;
        transition: 0.7s;
        :hover {
            background-color: white;
            color:black;
        }

    }
`;