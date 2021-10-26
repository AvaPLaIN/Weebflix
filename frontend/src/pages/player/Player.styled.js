import styled from 'styled-components';

export const PlayerComponent = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  background-color: var(--main-color-hex);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  iframe {
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    height: 0 !important;
    width: 0 !important;
    z-index: -100 !important;
    pointer-events: none !important;
  }

  .backwards {
    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: 99;
    color: white;
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
  }

  .sliderArrow {
    position: absolute;
    color: white;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(var(--main-color-rgb), 0.7);
    z-index: 99;
    height: 20%;
    width: 5rem;
    padding: 2rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &.left {
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      left: 0;
    }

    &.right {
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      right: 0;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .openEpisodes {
    position: absolute;
    color: white;
    top: 0;
    left: 70%;
    margin: auto;
    background-color: rgba(var(--main-color-rgb), 0.7);
    z-index: 980;
    height: 5rem;
    width: 5rem;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    &:hover {
      transform: scale(1.2);
    }
  }

  .count {
    color: white;
    position: absolute;
    left: 75%;
    top: 1.4rem;
    z-index: 90;
    font-size: 2rem;
  }

  .animeTitle {
    color: white;
    position: absolute;
    top: 5rem;
    left: 10%;
    z-index: 90;
    font-size: 2rem;
  }

  .container {
    display: ${(props) => (props.isEpisodeOpen ? 'flex;' : 'none;')};
    position: absolute;
    top: 10rem;
    left: calc(70vw - 15rem + 2.5rem);
    z-index: 100;
    height: 70vh;
    width: 30rem;
    background-color: var(--main-color-hex);
    border-radius: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: white;
    -webkit-box-shadow: 0px 0px 21px 4px rgba(255, 255, 255, 0.18);
    box-shadow: 0px 0px 21px 4px rgba(255, 255, 255, 0.18);

    .title {
      margin-top: 2rem;
      padding: 1rem;
      font-size: 1.8rem;
      word-spacing: 0.8rem;
      letter-spacing: 0.3rem;
    }

    .searchbar {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;

      .searchIcon {
        position: absolute;
        color: white;
        font-size: 2rem;
        left: 1rem;
      }

      .searchInput {
        color: white;
        outline: none;
        border: none;
        background-color: #131313;
        width: 100%;
        padding: 1.5rem 1rem 1.5rem 4.5rem;
        font-size: 1.4rem;
      }
    }

    .episodes {
      width: 100%;
      height: 100%;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      overflow-y: scroll;
      z-index: 980;

      .episode {
        width: 100%;
        padding: 1rem 2rem;
        border-top: 1px solid white;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:nth-child(${(props) => props.currEpisode + 1}) {
          background-color: #464242cc;
        }
      }
    }
  }

  .videoSource {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100vw !important;
    max-height: 100vh !important;
    border: none !important;
    object-fit: cover !important;
    pointer-events: all !important;
    z-index: 1 !important;
  }
`;
