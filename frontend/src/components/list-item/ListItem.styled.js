import styled from 'styled-components';

export const ListItemComponent = styled.div`
  height: 18rem;
  width: 23rem;
  transition: transform 0.2s ease-in-out;
  transition-delay: ${(props) => (props.isHovored ? '0s' : '0.5s')};
  background-color: #2c2a2a;
  cursor: pointer;

  .hoverOpenState {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;

    .thumnail {
      width: 100%;
      min-height: 40%;
      position: relative;

      iframe {
        border: none;
        outline: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hovorLink {
      background-color: rgba(0, 0, 0, 0.8);
      height: 100%;
      width: 100%;
    }

    .details {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      height: 100%;
      gap: 0.4rem;
      padding: 0.6rem;

      .title {
        font-size: 0.9rem;
        font-weight: bold;
      }

      .info {
        width: 100%;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .description {
        font-size: 0.7rem;
      }

      .genre {
        width: 100%;
        font-size: 0.7rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
      }
    }

    .backgroundThumnail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }

  .hoverCloseState {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    .ThumnailLink {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      background-position: center;
    }

    h2 {
      position: absolute;
      top: 108%;
      text-align: center;
      transition: 0.2s ease-in;
      transition-delay: 0.3s;
    }
  }

  &:hover {
    transform: scale(2, 2.3) translateY(-20%);
    border-radius: 1rem;
    z-index: 980;
    ${(props) => props.isHovored && 'overflow: hidden;'}

    .thumnailTitle {
      color: transparent;
    }
  }

  @media (max-width: 1200px) {
    &:hover {
      transform: scale(1) translateY(0);
      border-radius: 0;
    }
  }
`;
