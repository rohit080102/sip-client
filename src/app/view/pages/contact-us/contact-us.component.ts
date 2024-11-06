import { AppStorage } from './../../../core/utilities/app-storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { MasterService } from 'src/app/services/master.s';
import { swalHelper } from 'src/app/core/constants/swal.helper';




@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private storage: AppStorage,
    private service: MasterService

  ) {
    this.user = storage.get('user')
    this.contactForm = this.fb.group({
      name: [this.user?.name.toUpperCase() || '', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      phone: ['', Validators.pattern('^(\\d{10})?$')],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  user: any
  contactForm: FormGroup;
  reset() {
    this.contactForm.setValue(
      {
        name: this.user?.name.toUpperCase() || '',
        phone: "",
        email: this.user?.email || "",
        message: "",

      }
    )

  }

  onSubmit = async () => {
    console.log(this.contactForm);

    if (this.contactForm.valid) {
      let formData = this.contactForm.value;
      let result = await this.service.saveContact(formData);
      console.log(result);
      if (result.Data != 0 && result.Data != null) {
        this.reset()
        this.contactForm.markAsUntouched();
        return swalHelper.messageToast(result.Message, 'success')
      }
      else {
        return swalHelper.messageToast(result.Message, 'warning')
      }

    }
    else {
      this.contactForm.markAllAsTouched();

      return swalHelper.messageToast('something is Wrong', 'warning')
    }
  }
}
