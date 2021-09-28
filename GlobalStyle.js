import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html {
  font-size: 62.5%;
}

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-weight: 900;
    line-height: 1;

  }

ol, ul, li {
  list-style-type : none;
}

a {
  text-decoration: none;
  color: inherit;
}

p {
 font-size: clamp(1.4rem, 1.3198rem + 0.2970vw, 1.7rem);
}

.container {
  max-width: 1280px;
  min-width: 270px;
  width: 90%;
  margin: 0 auto;
}

.section-heading {
  font-size: clamp(2.5rem, 2.1792rem + 1.1881vw, 3.7rem);
  letter-spacing: 2px;
}

`;

export default GlobalStyle;
