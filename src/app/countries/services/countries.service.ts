import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiURL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  // Search countries by capital
  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${query}`;
    return this.getCountriesRequest(url);
  }

  // Search countries by Country Name
  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${query}`;
    return this.getCountriesRequest(url);
  }

  // Search countries by Region, África, América, Asia, Europa, Oceanía
  searchRegion(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${query}`;
    return this.getCountriesRequest(url);
  }
}
