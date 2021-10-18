import styled from 'styled-components';

export const ListComponent = styled.div`
  width: 100%;
  margin-top: 1rem;

  .listTitle {
    color: white;
    font-size: 2rem;
    font-weight: 500;
    margin-left: 5rem;
  }

  .wrapper {
    margin-top: 1rem;
    margin-bottom: 5rem;
    position: relative;

    .sliderArrow {
      position: absolute;
      color: white;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: rgba(var(--main-color-rgb), 0.7);
      z-index: 990;
      height: 100%;
      width: 5rem;
      padding: 2rem 1rem;
      cursor: pointer;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }

    .container {
      margin-left: 5rem;
      width: max-content;
      display: flex;
      gap: 0.5rem;
      transition: all 0.8s ease-in-out;
    }
  }
`;
