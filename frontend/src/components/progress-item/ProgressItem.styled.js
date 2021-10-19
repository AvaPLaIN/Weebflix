import styled from 'styled-components';

export const ProgressItemComponent = styled.div`
  height: 35rem;
  width: 30rem;
  overflow: hidden;
  background-color: rgba(var(--main-color-rgb), 0.9);
  border-radius: 2rem;
  color: white;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.6);
  position: relative;

  .infoSource {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    pointer-events: none;
    border: none;
  }

  .progress {
    position: absolute;
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .progressCount {
      background-color: rgba(var(--main-color-rgb), 0.8);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .currProgress {
      position: relative;
      width: 100%;
      border: 1px solid var(--main-color-hex);
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      overflow: hidden;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .procent {
        z-index: 800;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: ${(props) => props.progress}%;
        height: 100%;
        background-color: rgba(var(--main-color-rgb), 0.9);
      }
    }
  }

  .playerLink {
    height: 100%;
  }

  .infos {
    min-height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;

    .itemTitle {
      font-size: 2rem;
    }

    .infoTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 1.4rem;
    }

    .itemGenre {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      width: 100%;
      font-size: 1.4rem;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
