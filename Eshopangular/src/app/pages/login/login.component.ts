import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from "../../services/User.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('emailInput') emailInput: ElementRef | undefined;
  @ViewChild('passwordInput') passwordInput: ElementRef | undefined;

  constructor(
    private loginService: UserService,
    private router: Router
  ) {}

  loginData() {
    if (this.emailInput && this.passwordInput) {
      const emailValue = this.emailInput.nativeElement.value;
      const passwordValue = this.passwordInput.nativeElement.value;

      console.log('Email:', emailValue);
      console.log('Password:', passwordValue);

    
      this.loginService.login(emailValue, passwordValue).subscribe(res => {
        if (res.status === 200) {
          console.log("reservation avec suuces ");
          
        } else {
          console.log('Login failed');
        }
      });
    } else {
      console.log('Input fields not found');
    }
  }
}
