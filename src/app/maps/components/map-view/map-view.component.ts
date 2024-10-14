import { Component, effect, OnInit, signal, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { Branch, BranchMapMarker } from '../../interfaces/BranchMapMarker';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule
  ],
  // providers: [BranchService],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements OnInit {

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  branches: Branch[] = [];
  center: google.maps.LatLngLiteral = { lat: -33.522610, lng: -70.5869775 }; // Center of Switzerland
  zoom = 16;
  markers?: BranchMapMarker[] = [];
  selectedBranch = signal<Branch | null>(null);


  constructor(private placesService: PlacesService) {
  }

  ngOnInit(): void {
    console.log(this.placesService.useLocation)
    let branch: Branch = this.placesService.useLocation 
    this.branches.push(branch);

    this.markers = this.getMarkers();
  }

  getMarkers() {

    if (this.branches != undefined) {
      let tmpmarker = this.branches
        .map((branch) => {
          const marker: BranchMapMarker = {
            label: {
              text: branch.name
            },
            position: { lat: branch.lat, lng: branch.lng },
            title: branch.name,
            options: { animation: google.maps.Animation.DROP },
            branch: branch,
          };
          return marker;
        })
        .filter(
          (marker) => !isNaN(marker.position.lat) && !isNaN(marker.position.lng)
        );
      return tmpmarker;
    }
    return undefined;
  }

  openInfoWindow(branch: Branch, marker: MapMarker): void {
    this.selectedBranch.set(branch);
    if (this.infoWindow) {
      this.infoWindow.open(marker);
    }
  }

}
