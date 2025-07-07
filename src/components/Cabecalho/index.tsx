import styled from 'styled-components'

const HeaderBar = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <HeaderBar>
    <h1>EBAC Jobs</h1>
  </HeaderBar>
)

export default Cabecalho
