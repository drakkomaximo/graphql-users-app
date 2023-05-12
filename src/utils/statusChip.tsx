import { Chip } from "@mui/material"
import { StatusTypes } from "../interfaces"

export const statusChip = ({status}:{status: StatusTypes | string}) =>{
    if(status === 'active') return <Chip label="active" color="success" />
    if(status === 'inactive') return <Chip label="inactive" color="default" />
    return <Chip label="notFound" color="error" />
}