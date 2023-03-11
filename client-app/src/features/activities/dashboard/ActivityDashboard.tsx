import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';


export default observer( function ActivityDashboard() {

    const {activityStore} = useStore();
    const{loadActivities, activityRegistry} = activityStore; 

    useEffect(() =>{
      if (activityRegistry.size <= 1) loadActivities();
    },[loadActivities,activityRegistry.size])//[] sprawiają ze powtórzymy to tylko raz
  
  
  // jezeli bedzie bład w "LoadingComponent" na temat Props idziesz do tego pliku i dajesz w Propsach ?
  if (activityStore.loadingInitial) return <LoadingComponent content= 'Loading app' />


    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activities Filters</h2>
            </Grid.Column>
        </Grid>
    )
})