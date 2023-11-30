import { User } from "../types/User";

type Error = {
    [key: string] : string;
}

export const validate = (data : User)=>{
    const errors:Error = {}

    if(!data.name){
        errors["name"] = "O nome é obrigatorio"
    }
    if(!data.email){
        errors["email"] = "Oemail é obrigatorio"
    }
    if(!data.agree){
        errors["agree"] = "Voce precisa concordar com os termos"
    }
    return errors
}