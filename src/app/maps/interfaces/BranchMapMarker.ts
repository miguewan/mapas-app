export interface BranchMapMarker {
    branch: Branch;
    position: {
        lat: number;
        lng: number;
    };
    title: string;
    options: {
        animation: google.maps.Animation;
    };
    label: {text: string};
    click?: () => void;
}

export class Branch {
    name: string;
    lat: number;
    lng: number;

    constructor(
        name: string,
        lat: number,
        lng: number
    ) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
}