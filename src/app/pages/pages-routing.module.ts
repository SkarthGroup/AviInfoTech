import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home.component/home.component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';
import { PricingComponent } from './pricing.component/pricing.component';
import { FormComponent } from './form.component/form.component';
import { DevelopmentComponent } from './development.component/development.component';
import { TranslationComponent } from './translation.component/translation.component';
import { TermComponent } from './term.component/term.component';
import { PrivacyComponent } from './privacy.component/privacy.component';
import { RefundComponent } from './refund.component/refund.component';
import { AboutComponent } from './about.component/about.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'form', component: FormComponent },
    { path: 'development', component: DevelopmentComponent },
    { path: 'translation', component: TranslationComponent },
    { path: 'term', component: TermComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'refund', component: RefundComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }