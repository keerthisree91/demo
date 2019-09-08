import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';
import { DemoComponent } from './app/demo/demo.component';

const mainRoutes: Routes = [
  Shell.childRoutes([

    { path: 'demo', component: DemoComponent },

  ])
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
