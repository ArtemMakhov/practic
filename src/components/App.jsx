import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';




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
        <Statistics title="Upload stats" stats={data}/>
      </Box>
      <GlobalStyle/>
    </>
    
  );
};
