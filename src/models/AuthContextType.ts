import { AuthState } from "./AuthState";

export interface AuthContextType {
    user: AuthState,
    dispatch: React.Dispatch<any>
}