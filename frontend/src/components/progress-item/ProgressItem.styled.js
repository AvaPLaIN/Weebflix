import styled from 'styled-components';

export const ProgressItemComponent = styled.div`
  height: 35rem;
  width: 30rem;
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
    border: none;
    border-radius: 2rem;
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

      &:nth-child(1) {
        border-top-left-radius: 2rem;
      }

      &:nth-child(3) {
        border-top-right-radius: 2rem;
      }
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

  .status {
    position: absolute;
    right: 0;
    top: 12.1rem;
    background-color: rgba(var(--main-color-rgb), 0.8);
    padding: 0.5rem 1rem;
    border-top-left-radius: 2rem;
    color: ${(props) => {
      const status = props.status;
      if (status === 'currently Watching') return 'orange';
      if (status === 'canceled') return 'red';
      if (status === 'completed') return 'green';
    }};
  }

  .rating {
    position: absolute;
    display: flex;
    gap: 0.5rem;
    left: 0;
    top: 12.1rem;
    background-color: rgba(var(--main-color-rgb), 0.8);
    padding: 0.5rem 1rem;
    border-top-right-radius: 2rem;
    font-weight: bold;
    color: ${(props) => {
      const rating = props.rating;
      const number = parseInt(rating, 10);
      if (number > 8) return 'green';
      if (number > 6) return 'orange';
      if (number > 5) return 'yellow';
      if (number > 3) return 'orange';
      if (number > 1) return 'red';
      if (number === 1) return 'white';
    }};
  }

  .playerLink {
    height: 50%;
    //overflow: hidden;
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

    .stateOfAnime {
      display: flex;
    }

    .playerLink {
      overflow: hidden;
    }
  }

  .stateOfAnime {
    width: 100%;
    border-top: 1px solid white;
    display: none;
    align-items: center;
    justify-content: space-between;

    .container {
      position: relative;
      width: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .changeProgress {
        background-color: transparent;
        border: none;
        outline: none;
        height: 3rem;
        cursor: pointer;

        &.delete {
          color: #610f0f;
        }

        &.cancel {
          color: #865d0f;
        }

        &.completed {
          color: #0f4e0f;
        }

        &.currently {
          color: #455c14;
        }
      }

      .hoverText {
        display: none;
        position: absolute;
        top: 100%;
      }

      &:hover {
        .hoverText {
          display: flex;
          position: absolute;
          top: 105%;
          padding: 0.2rem 1rem;
          background-color: black;
          border-radius: 2rem;
        }

        .changeProgress {
          transform: scale(1.2);
        }

        .delete {
          color: red;
        }

        .cancel {
          color: orange;
        }

        .completed {
          color: green;
        }

        .currently {
          color: #d0fb0e;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .stateOfAnime {
      display: flex;
    }

    .playerLink {
      overflow: hidden;
    }
  }
`;
