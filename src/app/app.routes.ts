import { Routes } from '@angular/router';
import { CreateQouteComponent } from './qoutes/create-qoute/create-qoute.component';
import { MyQouteComponent } from './qoutes/my-qoute/my-qoute.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-qoute',
        component: CreateQouteComponent,
      },
      {
        path: 'my-qoute',
        component: MyQouteComponent,
      },
    ],
  },
];
