import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HearComponent } from './hear/hear.component';
import { HomeComponent } from './home/home.component';
import { SpeakComponent } from './speak/speak.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'speak', pathMatch: 'full', component: SpeakComponent},
  { path: 'hear', pathMatch: 'full', component: HearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
