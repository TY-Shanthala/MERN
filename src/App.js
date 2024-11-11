import { Outlet } from 'react-router-dom';
import Body from './component/Body';
import Nav from './component/Nav';
import { useState } from 'react';
import { useContext } from 'react';
import { apple } from './component/util/contaxtPage';


function App() {
  const { dataName } = useContext(apple)
  const [userName, setUserName] = useState(dataName)
  return (

    <div>
      <Nav />
      <apple.Provider value={{ dataName: userName, changeData: setUserName }}>
        <Outlet />
      </apple.Provider >
    </div>
  );
}

export default App;
