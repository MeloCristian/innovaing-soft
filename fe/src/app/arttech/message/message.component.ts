import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private  _messageService: MessageService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      subject: [''],
      message:['']
    });
  }

  save(){
    this._messageService.sendMessage({message: this.form.value.toString()}).subscribe({
      next: (data)=>{
        this.toastr.success('Mensaje enviado!', 'Éxito!');
      },
      error: (err)=>{
        this.toastr.error('No fue posible enviar el mensaje!', 'Error!');
      }
    })
  }

}
