import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Page } from 'src/app/model/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('burger') span: any;

  pages: Page[] = [];
  showMobileContents: Boolean = true;

  constructor(private pageService: PageService) {}

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

  showContents(): void {
    this.showMobileContents = !this.showMobileContents;
    console.log(this.showMobileContents)
  }

}
