import React from "react";
import Avatar from "../avatar/Avatar";
import {ContainerStyled, FirstNameStyled, LastNameStyled, RoleStyled} from "./Staff.style";
import Space from "../space/Space";

interface IStaff{
    image: string,
    firstname: string,
    lastname: string
    role: string
}

const Staff: React.FC<IStaff> = ({ image, firstname, lastname, role}) => {

    return (
        <ContainerStyled>
            <Avatar size={'large'} image={image} shape={'round'} />
            <Space size={2} />
            <div>
                <FirstNameStyled>{firstname}</FirstNameStyled>
                <LastNameStyled>{lastname}</LastNameStyled>
                <RoleStyled>{role}</RoleStyled>
            </div>
        </ContainerStyled>
    )
}

export  default Staff
