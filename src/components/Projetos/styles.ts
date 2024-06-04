import styled from 'styled-components'

// column-gap é espaçamento lateral entre as colunas.
// row-gap é o espaçamento vertical entre as colunas (de cima para baixo ou de baixo para cima).
export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
