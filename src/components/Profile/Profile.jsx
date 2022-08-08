import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Description, StatsList, StatsListItem , Icon, UserName,Tag,Location,Label,Quantity} from './Profile.styled';


export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
        <Box
            my={4}
            mx="auto"
            p={4}
            bg="background"
            color="secondaryText"
            width="350px"
            border="normal"
            borderColor="black">
            <Description>
                <Icon src={avatar} alt='User avatar' />
                <UserName>{username}</UserName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <StatsList>
                <StatsListItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsListItem>
                <StatsListItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsListItem>
                <StatsListItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsListItem>
             </StatsList>
        </Box>
    )
};



Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
    
};





