import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 2%;
`;

export const AjusteHeader = styled.div`
    width: 100%;
    height: 65px;
    /* Professor, criei essa classe pois coloquei o Header como position fixed, ai 
    quando um element entrava na página, ficava em cima */
`;

export const H2Titulo = styled.h2`
    margin: 30px 0 40px 0;
    font-size: 1.6em;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    ::before {
        content: '';
        width: 50%;
        height: 4px;
        background-color: var(--react-blue);
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
    }
    :hover::before {
        width: 75%;
    }
    svg {
        font-size: 1.3em;
        margin-right: 7px;
    }
`;

export const SectionHeader = styled.header`
    width: 100%;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
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
                background: rgba(0, 0, 0, 0.7);
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.7) 15px);
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
        /* color: var(--react-blue); */
        color: white;
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
        color: var(--react-blue);
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

export const TableResponsive = styled.section`
    table {
        width: 100%;
        max-width: 1250px;
        text-align: center;
        margin: 30px auto;
        padding: 0 2%;
        border-collapse: collapse;
        border-spacing: 0;
        tr {
            :nth-child(odd) {
                td {
                    background-color: #1c1f25;
                }
            }
        }
        th {
            background-color: black;
            font-weight: bold;
        }
        td {
            text-align: left;
        }
        td, th {
            padding: 10px;
            border-right: var(--react-blue) solid 1px;
            vertical-align: middle;
            :last-child {
                border-right: 0;
            }
            a {
                color: white;
            }
        }
        td.excluir {
            border-right: 0;
        }
        thead {
            tr > th:last-of-type{
                display: none;
            }
        }
    }
    @media screen and (max-width: 1146px) {
        table.responsive {
            display: block;
            position: relative;
            width: 100%;
            thead, tbody, th, td, tr {
                display: block;
            }
            text-decoration, th {
                /* padding: 12px 10px; */
            }
            thead {
                float: left;
                tr > th:last-of-type{
                    background-color: black;
                    color: black;
                    display: block;
                }
            }
            tbody {
                width: auto;
                position: relative;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;
                tr {
                    display: inline-block;
                }
                
            }
            tr {
                :last-of-type {
                    td {
                        border: 0;
                    }
                }
            }
            td, th {
                :last-child {
                    border-right: var(--react-blue) solid 1px;
                }
            }
            td.excluir {
                border-right: var(--react-blue) solid 1px;
            }
        }
    }
`;

export const Consulta = styled.section`
    padding-bottom: 30px;
`;

export const Cadastro = styled.section`
    form {
        width: 100%;
        max-width: 750px;
        margin: 30px auto;
        padding-bottom: 30px;
    }
`;