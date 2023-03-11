import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite/dist/observer';

function App() {
  return (
    <>
      <NavBar />
       <Container style={{marginTop: '7em'}}>     
        <ActivityDashboard />
       </Container>                
    </>
  );
}
export default observer (App);
