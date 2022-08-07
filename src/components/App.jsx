import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import user from '../user.json';
// import { Box } from './Box';



export const App = () => {
  return (
    <>
      <Box>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      </Box>
      <GlobalStyle/>
    </>
    
  );
};
