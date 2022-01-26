import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Tooltip from "./tooltip";

const Preview = ({ markdownText }) => {

  function copyMarkdown() {
    navigator.clipboard.writeText(markdownText);
  }
  return (
    <Container>
      <h2 className="title">Markdown</h2>
      <ReactMarkdown
        className="markdown"
        children={markdownText}
        remarkPlugins={[remarkGfm]}
      />
      <Tooltip text="Markdown Copiado!">
        <button className="btn" type="button" onClick={copyMarkdown}>
          Copiar Markdown
        </button>
      </Tooltip>
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
      &:first-child {
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
  .btn {
    position: relative;
    .tooltip {
      position: absolute;
      padding: 3px 7px;
      border: 2px solid #fff;
      border-radius: 3px;
      position: absolute;
      width: 100%;
      font-size: 12px;
      text-transform: capitalize;
      background-color: #707070;
      color: #fff;
      top: 50px;
      left: 0;
    }
  }
`;

export default Preview;
