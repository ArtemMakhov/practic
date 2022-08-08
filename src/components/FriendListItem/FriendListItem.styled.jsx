import styled from 'styled-components';

export const ListItem = styled.li`
display: flex;
align-items:center;
padding: ${p => p.theme.space[3]}px;
gap: 20px;

 margin: ${p => p.theme.space[3]}px;
 box-shadow: 0 3px 5px 0 rgba(1, 19, 1, 0.74);
`;

export const StatusOnlaine = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius:${p => p.theme.radii.round};
 background-color: ${({ theme, isOnline }) => {
    return isOnline ? theme.colors.lime : theme.colors.red;
  }};
`;

export const Avatar = styled.img`
 background-color:${p => p.theme.colors.secondary};
 border-radius: ${p => p.theme.radii.md};
`;

export const Name = styled.p`
 font-size: ${p => p.theme.fontSizes.l};
 font-weight: ${p => p.theme.fontWeights.bold};
`;