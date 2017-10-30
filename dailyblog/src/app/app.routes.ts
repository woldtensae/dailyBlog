import { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent} from './home/home.component';
import { AngularComponent } from './angular/angular.component'
const MY_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'angular', component: AngularComponent }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);

