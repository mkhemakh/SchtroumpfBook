import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schtroumpf } from '../Schtroumpf';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SchtroumpfService {
  private apiUrl = 'http://localhost:5000/schtroumpfs';

  constructor(private http: HttpClient) {}

  getSchtroumpfs(): Observable<Schtroumpf[]> {
    return this.http.get<Schtroumpf[]>(this.apiUrl);
  }

  deleteSchtroumpf(schtroumpf: Schtroumpf): Observable<Schtroumpf> {
    const url = `${this.apiUrl}/${schtroumpf.id}`;
    return this.http.delete<Schtroumpf>(url);
  }

  updateSchtroumpfReminder(schtroumpf: Schtroumpf): Observable<Schtroumpf> {
    const url = `${this.apiUrl}/${schtroumpf.id}`;
    return this.http.put<Schtroumpf>(url, schtroumpf, httpOptions);
  }

  addSchtroumpf(schtroumpf: Schtroumpf): Observable<Schtroumpf> {
    return this.http.post<Schtroumpf>(this.apiUrl, schtroumpf, httpOptions);
  }
}
