import styled from 'styled-components';

export const MoviePlayerComponent = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: var(--main-color-hex);

  .backwards {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 1rem;
    z-index: 800;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.6rem;
  }

  h1 {
    position: absolute;
    top: 1.5rem;
    right: 5rem;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
