import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})

export class AboutComponent implements OnInit {
  public width: any;
  windowService: any;

  constructor(private router: Router, private active: ActivatedRoute) { }
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.active.queryParams.subscribe((po) => {
      this.pos = po['id'] || 1
    });
    this.tabCahange(this.pos)
    let width = this.windowService.windowRef.innerWidth;
    console.log(width)

  }
  pos: any = ''
  tabs: any[] = [
    {
      po: 1,
      active: true,
      img: 'assets/images/abt_1.png',
      title: "Our Mission",
      content: [
        "Our mission is to empower retailers and distributors by offering a comprehensive platform that simplifies processes, enhances communication, and drives mutual success. We believe in the power of technology to transform traditional business models, making them more agile, responsive, and profitable."
      ]

    },
    {
      po: 2,
      active: false,
      img: 'assets/images/abt_2.png',
      title: "Our Vision",
      content: [
        "We envision a retail landscape where retailers and distributors can easily find and connect with each other, forging strong partnerships that lead to better product availability, improved customer satisfaction, and increased business efficiency. Through our platform, we aim to build a more connected and vibrant retail community."
      ]

    },
    {
      po: 3,
      active: false,
      img: 'assets/images/abt_3.png',
      title: "Our Journey",
      content: [
        "Since our inception, we have been committed to innovation and excellence. Our journey is marked by continuous improvement and adaptation to the evolving needs of the retail and distribution sectors. We are proud of the progress we have made and are excited about the future, as we continue to expand our offerings and enhance our platform.", "Join us at Zeromeds and become part of a thriving network that is reshaping the retail and distribution landscape. Together, we can achieve greater efficiency, growth, and success."
      ]
    }
  ]



  tabCahange = (po: any) => {
    this.tabs.forEach((v) => v.active = v.po == po ? true : false)

    this.router.navigate(
      [],
      { queryParams: { id: po } }
    );


  }
}
