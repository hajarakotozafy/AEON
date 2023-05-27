import styled, {DefaultTheme} from "styled-components";
import {Shape, Size} from "./Avatar";

interface IImageStyled{
    size: Size
    shape: Shape
}

const handleShape = (shape: Shape, theme: DefaultTheme) => {
    switch (shape){
        case "round":
            return theme.shape.round
        case "square":
            return theme.shape.square
        default:
            return '50px'
    }
}

const handleSize = (size: Size, theme: DefaultTheme) => {
    switch (size){
        case "small":
            return `${theme.size(4)}px`
        case "medium":
            return `${theme.size(5)}px`
        case "large":
            return `${theme.size(8)}px`
        default:
            return `${theme.size(5)}px`
    }
}

const ImageStyled = styled.img<IImageStyled>`
    border-radius: ${props => handleShape(props.shape, props.theme)};
    border: solid;
    width: ${props => handleSize(props.size, props.theme)};
    height: ${props => handleSize(props.size, props.theme)};
    object-fit: cover;
`

export default ImageStyled
