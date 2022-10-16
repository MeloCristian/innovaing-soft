import { environment } from './../../../environments/environment.prod';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: UntypedFormGroup;
  showError = false;
  showPassword = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthService,
    private formBuilder: UntypedFormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  // On Signup link click
  onSignup() {
    this.router.navigate(['/dashboard/arttech/person'], { relativeTo: this.route.parent });
  }

  login() {
    console.log(this.form.value);
    this._authService.login(this.form.value).subscribe({
      next: resp => {
        sessionStorage.setItem('token', resp.token);
        this.toastr.success("Ha iniciado sesión correctamente", "Éxito")
        this.router.navigate(['/dashboard/project'])
      },
      error: err => {
        console.error(err);
        this.toastr.error("Por favor, verifique sus datos", "Error al iniciar sesión!")
      }
    })

  }
}
