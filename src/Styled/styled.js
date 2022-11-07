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
`;

export const SectionHome = styled.section`

`;