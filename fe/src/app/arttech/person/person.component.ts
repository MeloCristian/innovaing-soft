import { PersonService } from './../../services/person.service';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  form: FormGroup;
  roles: any

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private  _personServce: PersonService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      lastName: [''],
      dni: [''],
      address: [''],
      phone: ['']
    })
  }

  save(){
    this._personServce.createPerson(this.form.value).subscribe({
      next: (person)=>{
        this.toastr.success('Registro creado!', 'Éxito!');
        this.router.navigate(['/auth/sign-up',person.id]);
      },
      error: (err)=>{
        this.toastr.error('Por favor intente mas tarde', 'Error!');
      }
    })
  }

}
