import styled from 'styled-components';

export const Title = styled.h2`
font-size:${p => p.theme.fontSizes.l};
font-weight:${p => p.theme.fontWeights.bold};
padding: ${p => p.theme.space[5]}px;
text-align: center;
`;

export const StatList = styled.ul`
  display: inline-flex ;  
  justify-content: space-between;
 
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
padding: 1em;
 height: 100px;
 width: 100px;
`;

export const Label = styled.span`
text-align: center;
font-size: 32px;
color:${p => p.theme.colors.white};

`;

export const Percentage = styled.span`
text-align: center;
font-size: 32px;
color:${p => p.theme.colors.white};
`;