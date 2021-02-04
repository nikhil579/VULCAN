import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit
{
  loginForm: FormGroup;
  errorText: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  )
  {}

  ngOnInit()
  {
      this.loginForm = this.formBuilder.group({
          email   : ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
      });
  }

  login() {
    var modelForm = this.loginForm.getRawValue();

    this.authService
      .login(modelForm.email, modelForm.password)
      .subscribe(res => {
        if(res.success==true) {
          this.authService.user=res.user;
          this.authService.userRole=res.role;
          this.authService.token=res.token;
          this.router.navigate ( ['dashboard'] );
        }
      },error => {
        console.log(error);
        this.errorText = String(error.status) + ' : ' + error.statusText;
        }
      );
  }

  reset() {
    this.loginForm.controls['email'].setValue('');
    this.loginForm.controls['password'].setValue('');
    this.errorText = "";
  }
}
