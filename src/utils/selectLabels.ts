import { SelectOptionsTypes } from "../interfaces";

export const selectLabels = ({type}: {type: SelectOptionsTypes}) =>{
    if(type === 'gender') return 'Gender'
    if(type === 'status') return 'Status'
    return ''
}