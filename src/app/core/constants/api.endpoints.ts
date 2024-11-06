import { environment } from 'src/environments/environment';
class ApiEndpoints {
  private PATH: string = `${environment.apiEndPoint}`;


  // AUTH
  public REGISTER: string = `${this.PATH}/register`;
  public LOGIN: string = `${this.PATH}/login`;


  //BLOGS

  public GETLISTBLOGS: string = `${this.PATH}/getListBlogs`;


  // CONTACT

  public SAVECONTACT: string = `${this.PATH}/saveContact`;

  //

  public SAVEFEEDBACK: string = `${this.PATH}/saveFeedback`



}

export let apiEndpoints = new ApiEndpoints();
