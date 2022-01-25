import React from "react";
import styled from "styled-components";

const Tooltip = ({ children, text, ...rest }) => {
  const [show, setShow] = React.useState(false);

  return (
    <Container className="tooltip-container">
      <div className={show ? "tooltip-box visible" : "tooltip-box"}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        onClick={() => {
          setShow(true);
          setTimeout(() => {
            setShow(false)
          }, 1000);
        }}
        {...rest}
      >
        {children}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .tooltip-box {
    position: absolute;
    padding: 5px 10px;
    border-radius: 3px;
    top: calc(90% + 5px);
    opacity: 0;
    visibility: hidden;
    transition: .2s ease;
    font-size: 14px;
    text-transform: capitalize;
    background-color: #707070;
    color: #fff;
  }

  .tooltip-box.visible {
    opacity: 1;
    visibility: visible;
  }

  .tooltip-arrow {
    position: absolute;
    top: -10px;
    left: 50%;
    border-width: 5px;
    border-style: solid;
    background-color: #707070;
  }
`;

export default Tooltip;
