import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { LoadingComponent } from "../../components/loading/loading.component";
import { MapViewComponent } from "../../components/map-view/map-view.component";

@Component({
  selector: 'app-map-screen',
  standalone: true,
  imports: [LoadingComponent, MapViewComponent],
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent {
  
  constructor(private placesService: PlacesService) {

    // const pos = this.getLocation();
    // pos.then(res => {
    //   console.log(res);
    // })
    //   .catch(err => {
    //     console.log(err);
    //   });

  }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }

  // getLocation() {
  //   return navigator.geolocation.getCurrentPosition((data) => {
  //     console.log(data);
  //   });
    
  // }

}
