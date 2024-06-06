import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ConvertResponse {
  status: string;
  words?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NumberConverterService {

  private apiUrl = 'http://localhost:8080/convert';

  constructor(private http: HttpClient) { }

  convertNumber(number: number): Observable<ConvertResponse> {
    return this.http.post<ConvertResponse>(this.apiUrl, { number });
  }
}
