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


export const AppWrapper = styled.div`
/* TODO: DELETE */
  border: 2px solid blue;
`;
