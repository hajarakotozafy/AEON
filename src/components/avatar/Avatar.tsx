import React from "react";
import defaultAvatar from '../../assets/images/default.png'
import ImageStyled from "./Avatar.style";

export type Size = 'small' | 'medium' | 'large'
export type Shape = 'round' | 'square'

export interface IAvatar{
    size: Size,
    image: string,
    shape: Shape
}

const Avatar: React.FC<IAvatar> = ({ size= 'small', image, shape= 'round' }) => {
    return (
        <>
            <ImageStyled src={image === "" ? defaultAvatar: image} shape={shape} size={size}/>
        </>
    )
}

export default Avatar
