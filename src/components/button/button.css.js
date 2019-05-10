import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ButtonWrapper = styled.div`
  border: 0.4vw solid black;
  border-radius: 2.5vw 0 2.5vw 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: border-radius 200ms ease-in-out;
  cursor: pointer;
  margin: 0 auto;
  padding: 2vw 5vw;
  margin-top: 5vw;
  display: inline-block;

  a {
    font-size: 2.5vw;
    font-weight: 600;
    text-decoration: none;
    color: black;
  }
  &:hover {
    border-radius: 0 2.5vw 0 2.5vw;
    background-color: black;
    a {
      color: white;
    }
  }

  ${MEDIA.TABLET`
    border-width: 0.5vw;
    margin-top: 10vw;
    border-radius: 3vw 0 3vw 0;

    a {
      font-size: 4vw;
    }
    &:hover {
      border-radius: 0 3vw 0 3vw;

    }
  `};
`;
