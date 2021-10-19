import styled from 'styled-components';

export const MyListComponent = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .backgroundBanner {
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    object-fit: cover;
    z-index: -1;
    filter: blur(1rem);
  }

  .list {
    z-index: 800;
    overflow-y: scroll;
    height: 90vh;
    width: 100vw;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    justify-items: center;
    grid-gap: 4rem 2rem;
    padding: 4rem 10rem;
  }

  @media (max-width: 1450px) {
    .navbar {
      .info {
        top: 5rem;
      }

      .backwards {
        top: 5rem;
      }
    }
  }

  @media (max-width: 900px) {
    .list {
      padding: 4rem 2rem;
    }
  }
`;
