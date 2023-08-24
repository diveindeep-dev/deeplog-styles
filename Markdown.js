import styled from 'styled-components';
import { color, font } from './Variables';

export const Markdown = styled.div`
  font-family: ${font.body};
  line-height: 1.7;
  word-wrap: break-all;

  p {
    margin: 1em 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color.main};
    font-family: ${font.title};
  }

  h1,
  h2 {
    border-bottom: 2px solid var(--line);
    margin: 2em 0 0.5em 0;
  }

  h3 {
    margin: 2em 0 0.5em 0;
  }

  h4,
  h5,
  h6 {
    margin: 1em 0 5px 0;
  }

  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin: 5px 0;
  }

  ol,
  ul {
    padding-left: 25px;
  }

  ul li,
  ol li {
    font-weight: bold;
  }

  ul li ul li,
  ul li ol li,
  ol li ul li,
  ol li ol li {
    font-weight: normal;
  }

  .language-text {
    padding: 0.1rem 0.3rem;
    margin: 0px 0.1rem;
    color: var(--font);
    background-color: var(--bgSub);
    border: 1px solid var(--line);
    border-radius: 0.15rem;
    letter-spacing: 0px;
    word-break: break-word;
  }

  a {
    background: linear-gradient(
      transparent 60%,
      var(--gradientB) 0
    );
    text-decoration: none;
    font-weight: 600;
    padding: 0 2px;

    &:hover {
      background-color: var(--gradientB);
    }
  }

  details {
    margin: 1rem 0.5rem;
    padding: 15px 20px;
    border-radius: 5px;
    border: 1px solid var(--line);
  }

  details summary {
    cursor: pointer;
    color: ${color.main};
    font-weight: 600;

    &:focus {
      outline: none;
    }
  }

  del {
    text-decoration: line-through;
  }

  blockquote {
    display: block;
    margin: 15px 10px;
    padding: 15px;
    border: 1px solid var(--line);
    border-left: 3px solid ${color.main};
    font-size: 0.95rem;
    font-family: ${font.title};
    background-color: var(--bgSub);
  }

  hr {
    margin: 1rem 0;
  }

  .contains-task-list {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }

  img + em {
    display: block;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    color: var(--fontSub);
  }

  table {
    margin: 10px auto;
    border-collapse: collapse;
  }

  th {
    padding: 3px 10px;
    text-align: center;
    background: ${color.main};
    border: 1px solid var(--line);
    color: ${color.light};
  }

  td {
    padding: 5px 15px;
    border: 1px solid var(--line);
  }
`;
