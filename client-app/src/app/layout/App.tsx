import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite/dist/observer';

function App() {
  const {activityStore} = useStore();



  useEffect(() =>{
    activityStore.loadActivities();
  },[activityStore])//[] sprawiają ze powtórzymy to tylko raz


// jezeli bedzie bład w "LoadingComponent" na temat Props idziesz do tego pliku i dajesz w Propsach ?
if (activityStore.loadingInitial) return <LoadingComponent content= 'Loading app' />

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
