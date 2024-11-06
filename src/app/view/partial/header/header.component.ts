import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppStorage } from 'src/app/core/utilities/app-storage';
// declare var $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: AppStorage
  ) {
    this.checkLogin();

  }

  ngOnInit() {
    this.url = this.router.url
    this.initializeTheme();
    this.onWindowResize();
    this.checkLogin();


  }


  default = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  user: any;
  checkLogin = async () => {
    this.user = this.storage.get('user')
    return this.user

  }

  logout() {
    this.user = ''
    localStorage.clear()
    window.location.reload();
    console.log(this.user);

  }

  url: any = ''
  theme = true
  initializeTheme = (): void => {
    const currentTheme = localStorage.getItem('theme');
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]') as HTMLInputElement;

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }

    // toggleSwitch.addEventListener('change', this.switchTheme.bind(this), false);
  }

  // switchTheme = (event: Event): void => {
  //   const target = event.target as HTMLInputElement;

  //   if (target.checked) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     localStorage.setItem('theme', 'dark');
  //     this.theme = true
  //   } else {
  //     document.documentElement.setAttribute('data-theme', 'light');
  //     localStorage.setItem('theme', 'light');
  //     this.theme = false
  //   }
  //   console.log(this.theme)

  // }

  headerActive = false;


  toggleHeader() {
    this.headerActive = !this.headerActive;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth > 991) {
      this.headerActive = false;
    }
  }


}
