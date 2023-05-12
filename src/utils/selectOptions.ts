import { genderOptions, statusOptions } from ".";
import { SelectOptionsTypes } from "../interfaces";

export const selectOptions = ({type}: {type: SelectOptionsTypes}) =>{
    if(type === 'gender') return genderOptions
    if(type === 'status') return statusOptions
    return []
}