import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Banner = ({markdownText}) => {
  
  function copyMarkdown() {
    navigator.clipboard.writeText(markdownText)
  }
  return (
    <Container>
      <h2 className="title">Markdown</h2>
      <ReactMarkdown
        className="markdown"
        children={markdownText}
        remarkPlugins={[remarkGfm]}
      />
      <button className="copy-markdown" type="button" onClick={copyMarkdown}>Copiar Markdown</button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 550px;
  flex: 1;
  max-width: 600px;
  .markdown {
    table {
      border-collapse: collapse;
      width: 100%;
      background: #fff;
      box-shadow: 0px 0px 20px #00000014;
      border: 3px solid white;
      &:first-child{
        margin-bottom: 30px;
      }
      thead {
        background: white;
        color: #707070;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: underline;
        th {
          padding: 10px;
          font-size: 14px;
          border: 3px solid white;
        }
      }
      tbody {
        font-size: 12px;
        font-weight: 500;
        color: #707070;
        tr:nth-child(2n) {
          background: white;
          transition: all 200ms ease;
        }
        tr {
          font-size: 14px;
          background: #f1f1f1;
          font-weight: 500;
          color: #707070;
          td {
            padding: 10px;
            border: 3px solid white;
          }
        }
      }
    }
  }
  .copy-markdown {
    margin-top: 10px;
    letter-spacing: 0.8px;
    padding: 8px 15px;
    background: #FF6D00;
    border-radius: 24px;
    border: 1px solid #B5B5B5;
    border-color: #FF6D00;
    color: #fff;
    transition: .3s;
    width: fit-content;
    cursor: pointer;
    min-width: 120px;
    font: 600 12px/22px "Montserrat",sans-serif;
    margin: 16px auto;
    font-size: 12px;
    &:hover {
    background: #FFA000;
    border-color: #FFA000;
    }
  }
`;

export default Banner;
