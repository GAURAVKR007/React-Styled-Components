styled-components

Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allow you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

const Button = styled.button`
  color: grey;
`;
Alternatively, you may use style objects. This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.

const Button = styled.button({
  color: 'grey',
});
Equivalent to:

const Button = styled.button`
  color: grey;
`;
styled-components is compatible with both React (for web) and React Native – meaning it's the perfect choice even for truly universal apps! See the documentation about React Native for more information.

Supported by Front End Center. Thank you for making this possible!



*****Example*****


import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
