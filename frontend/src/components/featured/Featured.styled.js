import styled from 'styled-components';

export const FeaturedComponent = styled.div`
  height: clamp(550px, 90vh, 900px);
  position: relative;
  color: white;

  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    position: absolute;
    left: 5rem;
    bottom: 5rem;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    height: 100%;
    gap: 2rem;

    .details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      background-color: rgba(var(--main-color-rgb), 0.7);
      padding: 3rem;
      border-radius: 4rem;

      .title {
        font-size: 3rem;
      }

      .description {
        font-size: 2rem;
        word-spacing: 0.5rem;
        line-height: 2.7rem;
      }
    }

    .logo {
      width: 100%;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        white-space: nowrap;
        cursor: pointer;

        &.playBtn {
          color: var(--main-color-hex);
          background-color: white;
        }

        &.infoBtn {
          background-color: rgba(var(--main-color-rgb), 0.7);
          color: white;
        }
      }
    }
  }

  @media (max-width: 1250px) {
    .info {
      width: 50%;
    }
  }

  @media (max-width: 1000px) {
    .info {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    .info {
      width: 95%;
      left: 1rem;

      .logo {
        display: none;
      }
    }
  }
`;
