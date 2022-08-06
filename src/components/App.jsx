import { Profile } from './Profile/Profile';
import user from '../user.json';
// import { Box } from './Box';



export const App = () => {
  return (
    <Profile profile={user}/>
  );
};
