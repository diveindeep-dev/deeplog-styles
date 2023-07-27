import { styled } from 'styled-components';
import { font } from './Variables';
import { media } from './Mixin';

export const PostLi = styled.li`
  padding: 15px 10px;
  font-family: ${font.title};

  &:hover {
    background-color: ${({ theme }) => theme.bgSub};
  }

  ${media.mobile} {
    padding: 10px 5px;
  }
`;

export const ListSection = styled.section`
  ol,
  ul {
    list-style: none;
  }

  ol {
    width: 100%;
  }
`;
