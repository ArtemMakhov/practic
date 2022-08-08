import PropTypes from 'prop-types';
import { ListItem, StatusOnlaine, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
    return friends.map(({ avatar, name, isOnline, id }) => (
        <ListItem key={id}>
            <StatusOnlaine isOnline={isOnline}></StatusOnlaine>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem>
    ))
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};