import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // this.scrollFunction();
  }
  constructor() {

  }
  // scrollFunction() {
  //   const button = document.getElementById("movetop");
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     if (button) {
  //       button.style.display = "block";
  //     }
  //   } else {
  //     if (button) {
  //       button.style.display = "none";
  //     }
  //   }
  // }

  topFunction = (): void => {
    console.log("hello")
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

}
