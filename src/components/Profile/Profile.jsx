import PropTypes from 'prop-types';
import { Box } from '../Box';


export const Profile = ({
    profile:{username,tag,location,avatar,stats},
}) => {
    return (
        <Box>
            <Box>
                <img src={avatar} alt='User avatar'/>
                <p>{username}</p>
                <p>{tag}</p>
                <p>{ location}</p>
            </Box>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{ stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{ stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{ stats.likes}</span>
                </li>
                
            </ul>


        </Box>
    )
}



Profile.propTypes = {
    profile: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }),
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.isRequired,
    }),
    
}





