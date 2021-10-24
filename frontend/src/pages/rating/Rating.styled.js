import styled from 'styled-components';

export const RatingComponent = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
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

  .filter {
    position: absolute;
    top: 6rem;
    right: 15rem;
    z-index: 990;
    color: white;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    select {
      appearance: none;
      outline: none;
      border: 0;
      box-shadow: none;
      background-color: var(--main-color-hex);
      color: white;
      padding: 1.5rem;
      border-radius: 1rem;
    }
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
