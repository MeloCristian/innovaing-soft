import { UserService } from './../../services/user.service';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: UntypedFormGroup;
  showPassword = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private _userService: UserService,
    private toastr: ToastrService
  ) { }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    })
  }

  save() {
    this._userService.createUser(this.form.value).subscribe({
      next: resp => {
        console.log(resp);
        this.toastr.success('Nuevo usuario creado!', 'Éxito!');
        this.router.navigateByUrl('/auth/sign-in');
      },
      error: err => {
        this.toastr.error('Error al registrar el usuario!', 'Error!');
        console.error(err);
      }
    })
  }

}
