import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite/dist/observer';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/activities/home/HomePage';

function App() {
  const loacation = useLocation();

  return (
    <>
    {loacation.pathname === '/' ? <HomePage/> : (
      <>
         <NavBar />
       <Container style={{marginTop: '7em'}}>     
        <Outlet />
       </Container>  </>
    )}                 
    </>
  );
}
export default observer (App);
