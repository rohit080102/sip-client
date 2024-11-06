import { AppStorage } from './app-storage';
import { Injectable } from '@angular/core';
import { swalHelper } from '../constants/swal.helper';
import { utils, writeFile } from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class CommonHelper {
  constructor(private appStorage: AppStorage,) { }

  logout = () => {
    swalHelper
      .takeConfirmation('Logout', 'Do you really want to logout?', 'Logout')
      .then((result) => {
        if (result.isConfirmed) {
          this.appStorage.clear();
          window.location.href = '/';
        }
      });
  };

  public readAsBinary = async (file: File) => {
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    let fileReadingPromise = new Promise((resolve, reject) => {
      fileReader.onload = (e) => {
        if (fileReader.result != null && typeof fileReader.result != 'string') {
          let arrayBuffer: ArrayBuffer = fileReader.result;
          let data = new Uint8Array(arrayBuffer);
          let arr = new Array();
          for (var i = 0; i != data.length; ++i) {
            arr[i] = String.fromCharCode(data[i]);
          }
          let results = arr.join('');
          resolve(results);
        } else {
          resolve([]);
        }
      };
    });
    let binaryData = await fileReadingPromise;
    return binaryData;
  };

  public createJSONFile = async (json: any) => {
    const blob = new Blob([JSON.stringify(json)], { type: 'application/json' });
    return new File([blob], 'file.json');
  };
  public isObject(value: any) {
    if (value instanceof Object) {
      return true;
    } else {
      return false;
    }
  }

  exportArrayToExcel(arr: any[], name?: string) {
    let wb = utils.book_new();
    let ws = utils.json_to_sheet(arr);
    utils.book_append_sheet(wb, ws, name);
    writeFile(wb, `${name}.xlsx`);
  }

  copy2clipboard = (data: string) => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        console.log('Text successfully copied to clipboard: ' + data);
        swalHelper.swalToast(
          'success',
          'Text copied successfully',
          'top-right'
        );
      })
      .catch((err) => {
        swalHelper.swalToast('error', 'Failed to copy text', 'top-right');
      });
  };

  uniqueColors = [
    { dark: "#057261", light: "#E9BC8A", },
    { dark: "#465132", light: "#FBCDEE", },
    { dark: "#512760", light: "#EBFE9D", },
    { dark: "#204046", light: "#CDECDD", },
    { dark: "#514236", light: "#FDABBB", },
    { dark: "#061027", light: "#EAE898", },
    { dark: "#661072", light: "#AEE8FD", },
    { dark: "#675731", light: "#CC88BE", },
    { dark: "#175613", light: "#D8EF8D", },
    { dark: "#573554", light: "#F9D9BA", },
    { dark: "#263363", light: "#DEE9DB", },
    { dark: "#577322", light: "#AAD8BF", },
    { dark: "#213441", light: "#9DADEB", },
    { dark: "#470652", light: "#DF99FD", },
    { dark: "#363764", light: "#CFAA99", },
    { dark: "#433456", light: "#F8EAFA", },
    { dark: "#521222", light: "#BBC8EE", },
    { dark: "#215124", light: "#CFCB8C", },
    { dark: "#650577", light: "#CA9CBE", },
    { dark: "#050747", light: "#FF8EBB", },
    { dark: "#320057", light: "#99FF9E", },
    { dark: "#073452", light: "#DAFBFD", },
    { dark: "#775524", light: "#AC9DDA", },
    { dark: "#204536", light: "#DA8AAB", },
    { dark: "#551264", light: "#CA8ACC", },
    { dark: "#571754", light: "#9B98AE", },
    { dark: "#273225", light: "#EFFABB", },
    { dark: "#072232", light: "#CCBE98", },
    { dark: "#320567", light: "#CDF9BB", },
    { dark: "#015101", light: "#CF8EEC", },
    { dark: "#231533", light: "#8EC8ED", },
    { dark: "#526125", light: "#88D98D", },
    { dark: "#573410", light: "#BAA8AD", },
    { dark: "#356416", light: "#8CFA8C", },
    { dark: "#052600", light: "#EDDCEF", },
    { dark: "#537453", light: "#AF88A8", },
    { dark: "#045712", light: "#ADADC9", },
    { dark: "#345327", light: "#EC9E9A", },
    { dark: "#565351", light: "#8DCBFF", },
    { dark: "#637233", light: "#ACD9D9" },
  ]


}
