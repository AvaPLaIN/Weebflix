import styled from 'styled-components';

export const SearchComponent = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .navbar {
    position: fixed;
    top: 0;
    z-index: 900;
    display: flex;
    width: 100%;
    justify-content: center;
    color: white;

    .backwards {
      padding: 1rem;
      cursor: pointer;
      left: 0;
      position: absolute;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2rem;
    }

    .searchbar {
      width: clamp(300px, 50%, 600px);
      display: flex;
      align-items: center;
      position: relative;
      -webkit-box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.8);
      box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.8);

      svg {
        left: 1rem;
        position: absolute;
        font-size: 2rem;
      }

      input {
        outline: none;
        border: none;
        width: 100%;
        color: white;
        padding: 1rem 1rem 1rem 4rem;
        font-size: 2rem;
        background-color: rgba(var(--main-color-rgb), 0.7);
      }
    }

    .info {
      padding: 1rem;
      cursor: pointer;
      right: 2rem;
      top: 2rem;
      height: 4rem;
      width: 4rem;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 2rem;
      border-radius: 50%;
      border: 2px solid white;

      .container {
        display: none;
        position: absolute;
        top: 0;
        right: 5rem;
        width: max-content;
        padding: 1rem 2rem;
        height: 4rem;
        z-index: 999;
        background-color: rgba(var(--main-color-rgb), 0.8);
        font-size: 1.3rem;
        align-items: center;
      }

      &:hover {
        .container {
          display: flex;
        }
      }
    }
  }

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
