import styled, { css } from 'styled-components';
import { font, size } from './Variables';

const mediaQuery = (width) => `@media screen and (max-width: ${width}px)`;

export const media = {
  tablet: mediaQuery(size.tablet),
  mobile: mediaQuery(size.mobile),
};

export const ContentContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 40px;
  width: min(130ch, 100% - 2rem);
  z-index: 2;

  ${media.mobile} {
    padding: 20px 10px;
  }
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const smallBorder = css`
  padding: 3px 10px;
  font-size: 0.7rem;
  border-radius: 5px;
  font-family: ${font.title};
`;

export const smallButton = css`
  ${smallBorder}
  color: ${({ theme }) => theme.fontSub};
  border: 1px solid ${({ theme }) => theme.line};
  list-style: none;

  &:hover {
    cursor: pointer;
  }
`;

export const backGrid = css`
  background-image: linear-gradient(
      ${({ theme }) => theme.lineSub} 1px,
      transparent 1px
    ),
    linear-gradient(
      to right,
      ${({ theme }) => theme.lineSub} 1px,
      transparent 1px
    );
  background-size: ${size.backGrid}px ${size.backGrid}px;

  ${media.mobile} {
    background-size: ${size.backGrid * 0.8}px ${size.backGrid * 0.8}px;
  }
`;

export const colorMap = {
  easy: 'green',
  medium: 'yellow',
  hard: 'red',
  default: 'main',
};
