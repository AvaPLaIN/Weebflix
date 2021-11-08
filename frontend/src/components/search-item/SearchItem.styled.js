import styled from 'styled-components';

export const SearchItemComponent = styled.div`
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
  transition: all 0.2s ease-in-out;

  .infoSource {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border: none;
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

  @media (max-width: 1200px) {
    &:hover {
      transform: scale(1);
    }
  }
`;
