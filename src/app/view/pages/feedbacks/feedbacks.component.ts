import { TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { swalHelper } from 'src/app/core/constants/swal.helper';
import { AppStorage } from 'src/app/core/utilities/app-storage';
import { MasterService } from 'src/app/services/master.s';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private storage: AppStorage,
    private service: MasterService

  ) {
    this.user = this.storage.get('user')
    this.feedbackForm = this.fb.group({
      name: [this.user?.name.toUpperCase() || '', Validators.required],
      email: [this.user?.email || '', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.user = this.storage.get('user')
  }

  user: any;


  feedbackForm: FormGroup;

  reset() {
    this.feedbackForm.setValue(
      {
        name: this.user?.name.toUpperCase() || '',
        email: this.user?.email || "",
        message: "",

      }
    )

  }


  onSubmit = async () => {
    if (this.feedbackForm.valid && this.user != '') {
      let formData = this.feedbackForm.value;
      let result = await this.service.saveFeedback(formData)
      console.log(result);
      if (result.Data != 0 && result.Data != null) {
        this.reset()
        return swalHelper.messageToast(result.Message, 'success')
      }
      else {
        return swalHelper.messageToast(result.Message, 'warning')
      }


    }
    else {

      return swalHelper.messageToast(this.user ? 'Fill all Detail' : 'Login please', 'warning')
    }
  }

}
