import styled from 'styled-components';

export const ListItemComponent = styled.div`
  position: relative;
  width: 22.5rem;
  height: 10.2rem;
  background-color: var(--main-color-hex);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
  }

  .infoHover {
    display: none;
  }

  .thumnailTitle {
    margin-top: 0.8rem;
    width: 100%;
    text-align: center;
    position: absolute;
    color: white;
  }

  .itemInfo {
    position: absolute;
    display: none;
    color: white;
  }

  &:hover {
    position: absolute;
    z-index: 900;
    width: 32.5rem;
    height: 35rem;
    left: -5rem;
    top: -18rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);

    iframe {
      width: 100%;
      height: 14rem;
    }

    .itemInfo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 2rem;
      width: 100%;
      height: calc(100% - 15rem);

      .icons {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 1.4rem;

        .icon {
          border: 2px solid white;
          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .itemTitle {
        font-size: 1.6rem;
        font-weight: bold;
      }

      .infoTop {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .itemDescription {
        font-size: 1.2rem;
      }

      .itemGenre {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
      }
    }
  }
`;
