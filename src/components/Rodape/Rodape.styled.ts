import styled from 'styled-components'

export const RodapeContainer = styled.footer`
  width: 100%;
  background-color: var(--cor-principal);
  margin-top: 120px;
  padding: 40px;

  p {
    text-align: center;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: var(--cor-secundaria);

    a {
      padding-left: 16px;
      text-decoration: none;
      color: darkgreen;

      &:hover {
        color: green;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 80px 40px;
  }
`
