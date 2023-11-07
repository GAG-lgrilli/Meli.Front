import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

@Injectable()
export class LoginService{

    token: string = "";
    
    constructor(private router: Router){}

    login(email:string, password: string){
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password).then(
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

    isAuthenticated(){
        return this.token != "";
    }

    logout(){
        const auth = getAuth();
        signOut(auth).then(()=>{
            this.token = "";
            this.router.navigate(['/']);
        })
    }
}