import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  onSubmit() {
    this.service.save(this.profileForm.value);
    this.clear();
  }

  clear(){
      this.profileForm.controls['name'].setValue('');
      this.profileForm.controls['email'].setValue('');
      this.profileForm.controls['phone'].setValue('');
      alert("Usuário cadastrado com sucesso");
  }

  constructor(private service: UserService) {}

  ngOnInit(): void {}
}
