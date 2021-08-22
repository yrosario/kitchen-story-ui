import { Component } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
})

export class AuthComponent{
    private hasLogin:Boolean = false;

    constructor(private router:Router){}

    onSwitchMode(){
        this.hasLogin = !this.hasLogin;
    }

    get loginStatus():Boolean{
        return this.hasLogin;
    }

    onSubmit(form: NgForm){
        
        if(form.value.email === "admin@kitchenstory.com" && form.value.password === "password")
            this.hasLogin = true;
        else
            this.hasLogin = false;

        if(this.hasLogin)
            console.log(form);
    }

    redirectToPage():void{
        this.router.navigate(['/admin']);
    }
}