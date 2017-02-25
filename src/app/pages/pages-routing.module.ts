import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home.component/home.component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';
import { PricingComponent } from './pricing.component/pricing.component';
import { FormComponent } from './form.component/form.component';
import { DevelopmentComponent } from './development.component/development.component'


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'about-us', component: HomeComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'form', component: FormComponent },
    { path: 'development', component: DevelopmentComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }