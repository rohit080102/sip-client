import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
  }


  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        var rt: any = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: any) => {
          this.titleService.setTitle(data.title)
        })
      })

  }
  getChild: any = (activatedRoute: ActivatedRoute) => {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
}
