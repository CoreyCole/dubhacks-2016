import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component.ts';
import { ItemViewComponent } from './item-view/item-view.component.ts';
import { AnalyticsViewComponent } from './analytics-view/analytics-view.component.ts';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-view', pathMatch: 'full' },
  { path: 'main-view', component: MainViewComponent },
  { path: 'edit/:id', component: ItemViewComponent },
  { path: 'analytics', component: AnalyticsViewComponent },
  { path: 'camera', component: CameraComponent }
];
  
  
//   children: [
//     { path: ':id/edit', component: ItemViewComponent },
//   ] }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class Dubhacks2016RoutingModule { }


export const routedComponents = [MainViewComponent, ItemViewComponent];
