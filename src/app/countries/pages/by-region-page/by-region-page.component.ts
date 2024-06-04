import { Component } from '@angular/core';
import { CountriesService } from './../../services/countries.service';
import { Country } from '../../interfaces/Country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: Region): void {
    this.isLoading = true;

    this.selectedRegion = term;

    this.countriesService.searchRegion(term).subscribe((countries) => {
      this.countries = countries;
      console.log(term);
      this.isLoading = false;
    });
  }
}
