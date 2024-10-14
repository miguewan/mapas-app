import { Injectable } from '@angular/core';
import { Branch } from '../interfaces/BranchMapMarker';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  useLocation: Branch;

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<Branch> {

    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ( {coords} ) => {
          this.useLocation = new Branch('mkr_01', coords.latitude, coords.longitude),
          resolve(this.useLocation)
        },
        (err) => {
          alert('No se pudo obtener la Geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }
}
