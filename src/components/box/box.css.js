import styled from 'styled-components';
import posed from 'react-pose';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  text-align: center;
  background-color: ${({ section }) => () => {
    switch (section) {
      case 'logo':
        return '#EF5B09';
      case 'about':
        return 'white';
      case 'contact':
        return 'white';
      case 'location':
        return '#0D6061';
      default:
        return '#f9f9f9';
    }
  }};
  color: ${({ section }) => () => {
    switch (section) {
      case 'about':
        return 'black';
      case 'contact':
        return 'black';
      case 'location':
        return 'white';
      default:
        return 'black';
    }
  }};

  .link {
    text-decoration: none;
    color: white;
    * {
      white-space: pre-line;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  }
`;

export const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
});
