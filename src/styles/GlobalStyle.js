import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: sans-serif;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: #f9f8f8;
  height: 100vh;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
  border: 1px solid black; padding:10px;

  td, 
 th {
    border: 1px solid black; padding:10px;
}
}
.project-page {
  padding: 40px 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
    color: #ff6d00;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .btn {
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

export default GlobalStyle;
