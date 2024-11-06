import { apiEndpoints } from './../core/constants/api.endpoints';
import { Injectable } from '@angular/core';
import { ApiManager } from 'src/app/core/utilities/api-manager';
import { AppStorage } from 'src/app/core/utilities/app-storage';

@Injectable({ providedIn: 'root' })
export class MasterService {
  private headers: any = [];
  constructor(private apiManager: ApiManager, private storage: AppStorage) { }

  private getHeaders = () => {
    this.headers = [];
    let token = this.storage.get('auth-token');
    if (token != null) {
      this.headers.push({ Authorization: `Bearer ${token}` });
    }
  };

  // masters: Serving cities
  // async saveServingCities(data: any) {
  //   this.getHeaders();
  //   return this.apiManager.request(
  //     {
  //       url: apiEndpoints.SAVE_SERVING_CITIES,
  //       method: 'POST',
  //     },
  //     data,
  //     this.headers
  //   );
  // }


  async register(data: any) {
    return this.apiManager.request(
      {
        url: apiEndpoints.REGISTER,
        method: 'POST'
      },
      data,
      []
    );
  }

  async login(data: any) {
    return this.apiManager.request(
      {
        url: apiEndpoints.LOGIN,
        method: 'POST'
      },
      data,
      []
    );
  }

  async getListBlogs(data: any) {
    return this.apiManager.request(
      {
        url: apiEndpoints.GETLISTBLOGS,
        method: 'POST'
      },
      data,
      []
    );
  }


  async saveContact(data: any) {
    this.getHeaders()

    return this.apiManager.request(
      {
        url: apiEndpoints.SAVECONTACT,
        method: 'POST'
      },
      data,
      this.headers

    );
  }

  async saveFeedback(data: any) {
    this.getHeaders()

    return this.apiManager.request(
      {
        url: apiEndpoints.SAVEFEEDBACK,
        method: 'POST'
      },
      data,
      this.headers

    );
  }

}
