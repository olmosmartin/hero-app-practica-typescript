import { createContext } from 'react'
import { AuthContextType } from '../models/AuthContextType';

const UserState = {logged:false, user:""}

export const AuthContext = createContext<AuthContextType>({user:UserState, dispatch:()=>{}});
