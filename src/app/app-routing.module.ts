import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteAComponent } from './components/mi-componente-a/mi-componente-a.component';
import { MiComponenteBComponent } from './components/mi-componente-b/mi-componente-b.component';

const routes: Routes = [
  {path:'',component:MiComponenteAComponent},
  {path:'componente-b',component:MiComponenteBComponent},
  {path:'componente-b/:mensaje',component:MiComponenteBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
