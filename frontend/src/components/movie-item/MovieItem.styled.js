import styled from 'styled-components';

export const MovieItemComponent = styled.div`
  height: 7rem;
  border: 1px solid white;
  width: 100%;
  border-radius: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.2s ease-in;
  position: relative;
  transition-delay: 0.3s;

  img {
    height: 100%;
    object-fit: cover;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    .details {
      display: none;
    }

    h2 {
      flex: 1;
      padding-right: 2rem;
    }
  }
`;
