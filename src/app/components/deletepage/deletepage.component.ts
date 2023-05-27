import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Page } from 'src/app/model/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-deletepage',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.css']
})
export class DeletepageComponent {
  constructor(private http: HttpClient, private pageService: PageService) {}

  deletePageForm = new FormGroup({
    id: new FormControl(''),
  });
  newPageTitle: string | null | undefined;
  newPageContent: string | null | undefined;
  newPage: Page | null = null;
  jsonString: string = "";
  retrievingPageId: string | null | undefined;


  onSubmit() {
    this.retrievingPageId = this.deletePageForm.value.id;
    if(this.retrievingPageId) {
      this.pageService.deletePage(this.retrievingPageId).subscribe();
    }
  }
}
