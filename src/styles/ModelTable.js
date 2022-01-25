import styled from "styled-components";

const ModelTable = styled.section`
  width: 600px;
  margin-right: 40px;

  .subtitle {
    font-size: 14px;
    font-style: italic;
    color: #707070;
    font-weight: bold;
    margin-bottom: 14px;
  }
  .head {
    background: #fff;
    display: flex;
    padding: 10px;
    h3 {
      flex: 1;
      color: #707070;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-decoration: underline;
      font-size: 12px;
    }
  }
  .body {
    background: #fff;
    padding: 5px;
    .row {
      display: flex;
      padding: 6px;
      background-color: #f9f8f8;
      align-items: center;
      &:nth-child(even) {
        background: #fff;
      }
      label {
        width: 32%;
        font-size: 14px;
        color: #707070;
        font-weight: bold;
      }
      select {
        border: 1px solid #efefef;
        border-radius: 2px;
        padding: 5px;
        max-width: 150px;
        outline: none;
        margin-right: 30px;
        display: block;
        position: relative;
        &::before {
          position: absolute;
          height: 120px;
          width: 3px;
          content: "";
          top: 0;
          background: #fff;
          left: -30px;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after {
          position: absolute;
          height: 120px;
          width: 3px;
          content: "";
          top: 0;
          background: #fff;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
        option {
          border: 1px solid #efefef;
          border-radius: 2px;
        }
      }

      textarea {
        flex: 1;
        border: 0;
        outline: none;
        border: 1px solid #efefef;
        border-radius: 2px;
        padding: 5px 8px;
        resize: none;
      }
    }
  }
`;

export default ModelTable;
