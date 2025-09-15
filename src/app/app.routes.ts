import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {TestComponent} from './test/test.component';

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'test', component: TestComponent},
];
