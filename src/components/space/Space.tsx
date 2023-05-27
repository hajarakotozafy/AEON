import React from "react";
import SpaceStyled from "./Space.style";

export interface ISpace{
    size: number
}

const Space: React.FC<ISpace> = ({size}) => {
    return <SpaceStyled size={size} />
}

export default Space
