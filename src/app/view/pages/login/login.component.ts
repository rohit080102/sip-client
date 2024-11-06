import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MasterService } from 'src/app/services/master.s';
import { swalHelper } from 'src/app/core/constants/swal.helper';
import { AppStorage } from 'src/app/core/utilities/app-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private masterService: MasterService,
    private storage: AppStorage
  ) {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  ngOnInit() {
  }

  form: FormGroup;
  toggle: any = true

  reset() {
    this.form.setValue(
      {
        name: '',
        email: "",
        password: "",

      }
    )

  }

  onSubmit = async (data: any) => {
    if (data == 'login') {
      console.log(this.form);
      if (this.form.valid) {
        let formData = this.form.value;

        let isLoggedIn = await this.masterService.login(formData)
        console.log(isLoggedIn);
        if (isLoggedIn.Status == 200 && isLoggedIn.Data != 0) {
          this.storage.set('auth-token', isLoggedIn.Data.token)
          this.storage.set('user', isLoggedIn.Data.user)
          swalHelper.messageToast(isLoggedIn.Message, 'success')
          this.router.navigate(['/']);
        } else {
          swalHelper.messageToast(isLoggedIn.Message, 'warning')
        }

      } else {

      }
    } else {
      if (this.form.valid && this.form.value.name != '') {
        let formData = this.form.value;
        console.log(formData);
        let isLoggedIn = await this.masterService.register(formData)
        console.log(isLoggedIn);
        if (isLoggedIn.Data != 0) {
          swalHelper.messageToast(isLoggedIn.Message, 'success')
          this.toggle = true
          this.reset()
        } else {
          swalHelper.messageToast(isLoggedIn.Message, 'warning')
        }
      } else {
        swalHelper.messageToast('Fill All Detail', 'warning')
      }
    }

  }






}
