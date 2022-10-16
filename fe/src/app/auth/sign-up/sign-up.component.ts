import { RoleService } from './../../services/role.service';
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
  roles: any;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private _userService: UserService,
    private _roleService: RoleService,
    private toastr: ToastrService
  ) { }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: any)=>{
        this.id = params['id'];
        this.form = this.formBuilder.group({
          email: [''],
          password: [''],
          idPerson: this.id,
          idRole: ['']
        })
      }
    })
    this.getRoles();
  }

  // save a new user into db
  save() {
    this._userService.createUser(this.form.value).subscribe({
      next: resp => {
        this.toastr.success('Nuevo usuario creado!', 'Éxito!');
        this.router.navigateByUrl('/auth/sign-in');
      },
      error: err => {
        this.toastr.error('Error al registrar el usuario!', 'Error!');
        console.error(err);
      }
    })
  }

  getRoles(){
    this._roleService.getRoles().subscribe({
      next: (roles)=>{
        this.roles = roles;
      }
    })
  }

}
