import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
  }
  contactForm: FormGroup;
  reset() {
    this.contactForm.setValue(
      {
        name: '',
        phone: "",
        email: "",
        message: "",

      }
    )

  }

  onSubmit = () => {
    if (this.contactForm.valid) {
      let formData = this.contactForm.value;


      let headers = { 'content-type': 'application/json' }
      this.http.post('https://dhkkqrn8-3100.inc1.devtunnels.ms/api/retailers/contactus', formData).subscribe(
        response => {
          // console.log('Response:', response);
          let res: any = response
          if (res.data == 1) {
            Swal.fire("Form is successfully submitted");
            this.reset()
          }

        },
      );
    }
  }
}
