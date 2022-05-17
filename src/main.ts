import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { OneComponent } from './one/one.component';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
platformBrowserDynamic()
  .bootstrapModule(AppComponent)
  .catch((err) => console.error(err));
