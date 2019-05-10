import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;

  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '600';
      default:
        return '600';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '6vw';
      case 'medium':
        return '4vw';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '8vw';
        case 'medium':
          return '6vw';
        default:
          return '2rem';
      }
    }};
  `};
`;
