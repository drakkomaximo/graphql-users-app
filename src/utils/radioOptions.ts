import { genderOptions, statusOptions } from ".";
import { RadioOptionsTypes } from "../interfaces";

export const radioOptions = ({type}: {type: RadioOptionsTypes}) =>{
    if(type === 'gender') return genderOptions
    if(type === 'status') return statusOptions
    return []
}