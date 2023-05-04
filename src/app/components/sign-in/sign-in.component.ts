import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  SignInForm!: FormGroup;

  constructor(public authService: AuthService, private fb: FormBuilder) {}
  ngOnInit() {
    this.SignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit(myform:FormGroup){
    //hn3ml hena b2a el byredirect l component eh ka home page bt3t el user el folani da (userid) 
    // bs el awl nt2kd mn l db en da user f3ln w e7na kda kda ma3ana el form inputs.
  }
}
