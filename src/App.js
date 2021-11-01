import React, {useState}  from 'react';
import {Header} from './components/Header/Header';
import {Menu} from './components/Menu/Menu';

const App = () => {
  const [menuState, setMenuState] = useState(false);

  const changeMenuState = () => {
    setMenuState(!menuState);
  }

  return (
    <>
      <Header changeMenuState={changeMenuState}/>
      <Menu active={menuState}/>
    </>
  );
}

export default App;
