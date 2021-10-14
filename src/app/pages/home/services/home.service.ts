import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { API_ENDPOINTS } from 'src/app/core/constant/http.constants';
import { map } from 'rxjs/operators';
import { ImageObject, PicsumSearchConfig } from '../models/home.model';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getListContent(searchParams: PicsumSearchConfig): Observable<ImageObject[]> {
    const params = new HttpParams()
      .set('page', searchParams.page)
      .set('limit', searchParams.limit);
    return this.http.get<ImageObject[]>(environment.baseUrl + environment.apiVersion + API_ENDPOINTS.list, { params })
    .pipe(
      map((res: ImageObject[]) => {
        return res.map((value: ImageObject) => {
          value.download_url = value.download_url.split(/([/])/, 9).join('') + '/' + searchParams.width + '/' + searchParams.height;
          return value;
        });
      })
    );
  }

}
