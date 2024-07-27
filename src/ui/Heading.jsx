import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${5 > 2 && "background-color: var(--color-grey-500)"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: "30px";
      font-weight: 600;
      background-color: var(--color-grey-500);
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: "10px";
      font-weight: 300;
      background-color: var(--color-grey-200);
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: "15px";
      background-color: var(--color-grey-100);
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: "20px";
      font-weight: 600;
      text-align: center;
    `}

    line-height: 1.5;
`;
export default Heading;
