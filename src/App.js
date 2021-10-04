import React from 'react';
import { GlobalStyle } from './Components/GlobalStyles/GlobalStyles';

import Input from './Components/Input'

export default function App(){
  return(
    <div className = 'App'>
      <GlobalStyle/>
      <Input/>
    </div>
  )
}
