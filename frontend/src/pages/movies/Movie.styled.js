import styled from 'styled-components';

export const MovieComponent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 3rem;

  .backgroundBanner {
    position: fixed;
    top: -1rem;
    left: -1rem;
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    object-fit: cover;
    z-index: -1;
    filter: blur(1.4rem);
  }

  .toggle {
    align-self: flex-end;
    margin-top: 8rem;

    .switch {
      position: relative;
      display: inline-block;
      width: 90px;
      height: 34px;
    }

    .switch input {
      display: none;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #706a6a;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #202220;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #75787a;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(55px);
    }

    /*------ ADDED CSS ---------*/
    .slider:after {
      content: 'SMOOTH';
      color: white;
      display: block;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 60%;
      font-size: 10px;
      font-family: Verdana, sans-serif;
    }

    input:checked + .slider:after {
      left: 45%;
      content: 'EASY';
    }
  }

  .list {
    z-index: 800;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
    justify-items: center;
    grid-gap: 4rem 2rem;
    padding: 4rem 10rem;
  }
`;
