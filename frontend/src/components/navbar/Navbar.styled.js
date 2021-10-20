import styled from 'styled-components';

export const NavbarComponent = styled.div`
  color: white;
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 50%);
  ${(props) => props.isScrolled && 'background-color: var(--main-color-hex);'}

  .container {
    padding: 0.3rem 5rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      gap: 5rem;

      img {
        height: 2.5rem;
        cursor: pointer;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;

        a {
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 3rem;
      cursor: pointer;

      img {
        height: 3rem;
        width: 3rem;
        border-radius: 0.5rem;
        object-fit: cover;
        background-position: center;
      }

      .linkSearch {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        &:hover {
          transform: scale(1.2);
        }
      }

      .profile {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1rem 0;

        .options {
          position: absolute;
          top: 100%;
          display: none;
          width: max-content;
          padding: 1rem;

          span {
            text-align: center;
          }

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
            content: 'SUB';
            color: white;
            display: block;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            font-size: 10px;
            font-family: Verdana, sans-serif;
          }

          input:checked + .slider:after {
            content: 'DUB';
          }

          .logout {
            width: 100%;
            height: 6rem;
            background: transparent;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 1.4rem;
          }
        }

        svg {
          transition: all 0.2s ease-in;
        }

        &:hover {
          .options {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            background-color: var(--main-color-hex);
            border-radius: 0.5rem;
            transform: translate(-25%);

            span {
              display: flex;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .container {
      .left {
        ul {
          a:nth-child(6) {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .container {
      .left {
        ul {
          a:nth-child(5) {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .container {
      .left {
        ul {
          a:nth-child(4) {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 820px) {
    .container {
      .left {
        ul {
          a:nth-child(3) {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    .container {
      .left {
        ul {
          a:nth-child(2) {
            display: none;
          }
        }
      }
      .right {
        .news {
          display: none;
        }
      }
    }
  }

  @media (max-width: 650px) {
    .container {
      .left {
        ul {
          a:nth-child(1) {
            display: none;
          }
        }
      }
      .right {
        .linkSearch {
          span {
            display: none;
          }
        }
      }
    }
  }
`;
