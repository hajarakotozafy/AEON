import styled from "styled-components";
import {ISpace} from "./Space";

const SpaceStyled = styled.div<ISpace>`
    width: ${props => props.theme.size(props.size)}px;
    height: 100%;
`

export default SpaceStyled
