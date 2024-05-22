import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${query}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${query}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchRegion(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${query}`;
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }
}
