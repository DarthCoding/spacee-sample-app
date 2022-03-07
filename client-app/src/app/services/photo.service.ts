import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly baseUrl: string = 'http://localhost:49160';

  constructor(private http: HttpClient) { }

  public getPhotos(date: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/photos?date=${date}`);
  }
}
