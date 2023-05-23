import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Page } from 'src/app/model/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent {

  constructor(private http: HttpClient, private pageService: PageService) {}

  newPageForm = new FormGroup({
    title: new FormControl(''),
    imageUrl: new FormControl(''),
    content: new FormControl(''),
  });
  newPageTitle: string | null | undefined;
  newPageImageUrl: string | null | undefined;
  newPageContent: string | null | undefined;
  newPage: Page | null = null;
  jsonString: string = "";


  onSubmit() {
    console.log('Entering data');
    this.newPageTitle = this.newPageForm.value.title;
    this.newPageImageUrl = this.newPageForm.value.imageUrl;
    this.newPageContent = this.newPageForm.value.content;
    this.newPage = new Page(this.newPageTitle!, this.newPageImageUrl!, this.newPageContent!);
    console.log(JSON.stringify(this.newPage));
    this.pageService.createPage(this.newPage).subscribe(
      {
        next: (v: Page) => console.log(v),
        error: (e: Error) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }
}
