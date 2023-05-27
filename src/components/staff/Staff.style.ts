import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
`

export const IdentityStyled = styled.div`
    
`

export const FirstNameStyled = styled.h4`
    margin: 0;
`

export const LastNameStyled = styled.h5`
  margin: 0;
  font-size: ${ props => props.theme.size(2) }px;
`

export const RoleStyled = styled.p`
  margin: 0;
  color: #AAAAAA;
  
`
