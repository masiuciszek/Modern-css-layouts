import styled from 'styled-components';


export const AppContainer = styled.div`
  /* TODO: DELETE */
    border: 2px solid red;
    margin: 2rem auto;
    min-height: 60vh;
    padding: 1rem;
    width: 100%;
    @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;


export const TwoColGrid = styled.div`
  border: 2px solid green;
  /* TODO: DELETE */
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: auto;
`;
