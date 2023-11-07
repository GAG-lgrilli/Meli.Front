import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

@Injectable()
export class RegisterService{

    token: string|any;
    
    constructor(private router: Router){}

    register(email:string, password: string){
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                const user = userCredential.user;
                user.getIdToken().then((token) => {
                    this.token = token;
                    this.router.navigate(['/']);
                })
            }
        )
        
    }

    getIdtoken(){
        return this.token;
    }
}