import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public iniialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term: string): void {
    this.isLoading = true;

    this.countriesService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      console.log(term);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.iniialValue = this.countriesService.cacheStore.byCountries.term;
  }
}
