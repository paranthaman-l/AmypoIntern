import { authApi } from "../api";

class AuthService{
    login(login){
        return authApi.post("/login",login);
    }
    signUp(signUp){
        return authApi.post("/signup",signUp);
    }
    loginById(uid){
        return authApi.get("/loginById/"+uid);
    }
    getUser(){
        return authApi.get("/getUsers");
    }
    deleteUser(){
        return authApi.delete("/deleteUser");
    }
}

export default  new AuthService();