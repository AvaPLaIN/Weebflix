import styled from 'styled-components';

export const MovieComponent = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .backgroundBanner {
    position: fixed;
    top: -1rem;
    left: -1rem;
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    object-fit: cover;
    z-index: -1;
    filter: blur(1.4rem);
  }

  .list {
    z-index: 800;
    overflow-y: scroll;
    height: 85vh;
    width: 100vw;
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
    justify-items: center;
    grid-gap: 4rem 2rem;
    padding: 4rem 10rem;
  }
`;
