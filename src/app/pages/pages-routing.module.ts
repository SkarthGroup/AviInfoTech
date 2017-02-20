import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component/home.component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactUsComponent },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule {}