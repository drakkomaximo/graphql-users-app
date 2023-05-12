import { Female, Male, Transgender } from "@mui/icons-material"
import { GenderTypes } from "../interfaces"

export const genderIcons = ({gender}:{gender: GenderTypes | string}) =>{
    if(gender === 'male') return <Male fontSize='large' sx={{ color: 'blue'}}/>
    if(gender === 'female') return <Female fontSize='large' sx={{ color: 'red'}}/>
    return <Transgender fontSize='large'/>
}