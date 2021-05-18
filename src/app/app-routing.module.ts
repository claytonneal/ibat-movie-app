import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { MovielistingComponent } from './components/movielisting/movielisting.component';

const routes: Routes = [
  { path: 'booking/:title', component: BookingComponent},
  { path: 'movies', component: MovielistingComponent},
  { path: '', redirectTo: 'movies', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
