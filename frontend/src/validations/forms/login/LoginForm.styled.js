import styled from 'styled-components';

export const LoginComponent = styled.div`
  background-color: rgba(var(--main-color-rgb), 0.6);
  height: clamp(300px, 60vh, 800px);
  width: clamp(400px, 50vw, 600px);
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  color: white;
  border-radius: 0.8rem;

  h1 {
    font-size: 2.5rem;
    letter-spacing: 1rem;
  }

  .loginForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input {
      width: 100%;
      height: 5rem;
      outline: none;
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
    }

    button {
      background-color: #e50914;
      border: none;
      height: 5rem;
      border-radius: 0.5rem;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  button {
    border: none;
    outline: none;
    background: none;
    color: white;
    cursor: pointer;
    font-size: 1.6rem;

    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;
