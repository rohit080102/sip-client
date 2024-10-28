import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.slides = [
      {
        img: 'assets/images/banner1.png',
        label: 'First slide label',
        content: 'Some representative placeholder content for the first slide.',
        interval: 3000
      },
      {
        img: 'assets/images/banner1.png',
        label: 'Second slide label',
        content: 'Some representative placeholder content for the second slide.',
        interval: 3000
      },
      {
        img: 'assets/images/banner1.png',
        label: 'Third slide label',
        content: 'Some representative placeholder content for the third slide.',
        interval: 3000
      }
    ]
  }


  check = ''
  faqs = [
    {
      no: 1,
      title: "How do I register as a new user on Zeromeds?",
      content: "Redirect to retailer registration",
      link: "https://youtu.be/S2-xSPAtcx0?si=wlKfaU1epAD27i_Y",
      active: true
    },
    {
      no: 2,
      title: "What are the requirements to become a verified retailer on Zeromeds?",
      content: "You only need basic details of your store and yourself like your name, store address,  Mobile number, Lat-long (Store’s Actual Location in Map)",
      active: false
    },
    {
      no: 3,
      title: "How can I order medicines through Zeromeds?",
      content: "Get a step-by-step guide on how to browse, select, and order medicines from our listed wholesalers via our mobile app or website. Redirect to Ordering ",
      modal: "video",
      active: false
    },
    {
      no: 4,
      title: "How do I track my order status?",
      content: "Orders can be track directly through our app",
      active: false


    }
  ]
  slides: any = []

  open = () => {
    $('#video').modal('show');
    $("#order_video")[0].play();
  }
  close = () => {
    $('#video').modal('hide')
    $("#order_video")[0].pause();
    $("#order_video")[0].currentTime = 0;
    $("#order_video")[0].load();;

  }
  toggleAccordion(pos: any) {
    console.log(pos)

    this.faqs.forEach(v => v.active = v.no == pos + 1 ? !v.active : false)
  }





}
