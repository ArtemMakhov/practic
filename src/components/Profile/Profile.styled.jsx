import styled from 'styled-components';

export const Description = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

`;

export const StatsList = styled.ul`
display: flex;
justify-content: space-around;

padding:${p => p.theme.space[5]}px;

`;

export const StatsListItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding:${p => p.theme.space[3]}px;
width: 80px;
background-color:${p => p.theme.colors.muted};
`;

export const Icon = styled.img`
    width: 200px;
    height: 200px;

    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.accent};
`;

export const UserName = styled.p`
 font-size:${p => p.theme.fontSizes.l};
 font-weight:${p => p.theme.fontWeights.bold};
 color:${p => p.theme.colors.text};
 text-align: center;
 margin-bottom: ${p => p.theme.space[5]}px;
 
`;

export const Tag = styled.p`
 font-size:${p => p.theme.fontSizes.l};
 margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Location = styled.p`
font-size:${p => p.theme.fontSizes.l};    
`;

export const Label = styled.span`
 display: block;
 margin:${p => p.theme.space[2]}px;
 font-size:${p => p.theme.fontSizes.m};
`;

export const Quantity = styled.span`
 display:block;
 margin:${p => p.theme.space[2]}px;
 font-size:${p => p.theme.fontSizes.m};
 font-weight:${p => p.theme.fontWeights.bold};
 color:${p => p.theme.colors.text};
`;