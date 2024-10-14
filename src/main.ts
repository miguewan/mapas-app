import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocalización');
  throw new Error('Navegador no soporta la Geolocalización');
}


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
