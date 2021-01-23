import React from 'react';
import { ContentContainer } from './styles'

function Content({ children }) {

  return (
    <ContentContainer>
      {children}
    </ContentContainer>
  );
}


export default Content;
