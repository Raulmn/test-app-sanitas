import { Component, OnInit } from '@angular/core';
import { ImageObject, PicsumSearchConfig } from './models/home.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public searchString: string = '';
  public keySearch: string[] = ['author', 'id'];
  public searchParams: PicsumSearchConfig = {
    page: 1,
    limit: 100,
    width: 250,
    height: 250
  }

  public listContentData: ImageObject[] = [];

  constructor(
    private homeSRV: HomeService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i <= 39; i++) {
      this.loadData();
    }
  }
  
  loadData(): void {
    this.homeSRV.getListContent(this.searchParams)
      .subscribe((response: ImageObject[]) => {
        this.listContentData.push(...response);
      });
  }
}
