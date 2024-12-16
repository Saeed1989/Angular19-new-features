import { Routes } from '@angular/router';
import { SignalComponentComponent } from './signal-component/signal-component.component';

export const routes: Routes = [
    { path: 'login', component: SignalComponentComponent },
    { path: 'home', component: SignalComponentComponent },
    { path: 'catalog', component: SignalComponentComponent },
    { path: '**', redirectTo: 'login' }
  ];
