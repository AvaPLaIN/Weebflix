import styled from 'styled-components';

export const MovieListComponent = styled.div`
  height: 15rem;
  overflow: hidden;
  width: clamp(300px, 100%, 900px);
  position: relative;
  border-radius: 2rem;
  background-color: rgba(var(--main-color-rgb), 0.7);
  color: white;
  cursor: pointer;
  transition: all 0.7s ease-in;
  transition-delay: 0.2s;

  .listBanner {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }

  .movieBanner {
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 4rem;
    font-size: 2rem;
    font-weight: 100;

    h1 {
      text-align: center;
    }
  }

  .movies {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: auto;
  }

  &:hover {
    height: ${(props) => props.items * 8 + 15}rem;
  }
`;
