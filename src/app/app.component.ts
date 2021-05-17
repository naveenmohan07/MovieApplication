import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CinePlay';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private tabTitle: Title
  ) { }
  /**
   * change the browser tab name
   */
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute.snapshot.firstChild))
      .subscribe((route) => {
        this.tabTitle.setTitle('CinePlay | ' + route?.firstChild?.data?.title);
      });
  }
}
