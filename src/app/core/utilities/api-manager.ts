import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { AppStorage } from './app-storage';

@Injectable({
  providedIn: 'root',
})
export class ApiManager {
  constructor(private http: HttpClient, private storage: AppStorage) { }
  private setHeaders = (headersInArray: any) => {
    let headers: any = {};
    headersInArray.forEach((element: any) => {
      Object.keys(element).forEach((key) => {
        headers[key] = element[key];
      });
    });
    return { headers: headers };
  };

  async request(
    config: { url: string; method: string },
    data: any,
    headers: any[]
  ) {
    switch (config.method) {
      case 'GET':
        return lastValueFrom(
          this.http.get<OutputModel>(config.url, this.setHeaders(headers))
        );
      case 'POST':
        return this.callPost(config, data, headers);
      case 'PUT':
        return lastValueFrom(
          this.http.put<OutputModel>(config.url, data, this.setHeaders(headers))
        );
      default:
        return lastValueFrom(
          this.http.delete<OutputModel>(config.url, this.setHeaders(headers))
        );
    }
  }

  async callPost(config: any, data: any, headers: any) {
    try {
      let response = await lastValueFrom(
        this.http.post<OutputModel>(config.url, data, this.setHeaders(headers))
      );
      return response;
    } catch (err: any) {
      if (err.status == 401) {
        this.storage.clear();
        window.location.href = '/';
      }
      return err;
    }
  }
}

export interface OutputModel {
  message: string;
  data: any;
  status: number;
}
