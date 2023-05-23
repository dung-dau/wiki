import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Page } from 'src/app/model/page.model';
import { PageService } from 'src/app/services/page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  pages: Page[] = [];

  constructor(private http: HttpClient, private pageService: PageService) {};

  ngOnInit(): void {
    this.pageService.getAllPages().subscribe(
      {
        next: (v: Page) => this.pages.push(v),
        error: (e: Error) => console.error(e),
        complete: () => console.info('complete') 
      }
    )
    console.log(this.pages);
  }
  
}
