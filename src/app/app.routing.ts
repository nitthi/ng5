import { RouterModule, Routes, CanActivate }     from "@angular/router";
import {TestComponent} from './test/test.component';

export const AppRouterModule = RouterModule.forRoot([
    {path:'', redirectTo: '/test', pathMatch: 'full' },
    {path:'test', component:TestComponent}
]);