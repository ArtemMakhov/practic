import styled from "styled-components";

export const TableHead = styled.thead`
  background-color:${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

export const Row = styled.tr`
 text-align:center;
 :nth-child(even){
    background-color: ${p => p.theme.colors.muted};
 }
`;