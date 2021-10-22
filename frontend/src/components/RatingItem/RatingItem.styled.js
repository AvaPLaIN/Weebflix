import styled from 'styled-components';

export const RatingComponent = styled.div`
  display: flex;
  width: clamp(300px, 100%, 900px);
  height: max-content;
  overflow: hidden;
  background-color: rgba(var(--main-color-rgb), 0.8);
  border-radius: 2rem;
  color: white;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    z-index: -1;
    filter: blur(0.2rem);
  }

  .details {
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .title {
      font-size: 3rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1.6rem;
      flex-wrap: wrap;
      gap: 1rem;

      .genre {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
      }
    }

    .rating {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .stats {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        .ratingCount {
          font-size: 3rem;
        }

        .status {
          font-size: 1.6rem;
        }
      }

      .setRating {
        height: 5rem;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 4rem;

        .rate {
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

        .stars {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 1.6rem;
          color: yellow;
        }
      }
    }
  }

  .playBtn {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    width: 6rem;
    height: 4rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-bottom-right-radius: 2rem;
    font-size: 1.6rem;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: 800px) {
    .stars {
      display: none !important;
    }
  }
`;
