import { Component } from '@angular/core';
import { CountriesService } from './../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    this.isLoading = true;

    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      console.log(term);
      this.isLoading = false;
    });
  }
}
