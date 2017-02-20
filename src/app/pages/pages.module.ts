import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home.component/home.component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';
import { PricingComponent } from './pricing.component/pricing.component';
import { PaymentService } from '../services/payment.service';
import { FormComponent } from './form.component/form.component';

@NgModule({
    imports: [PagesRoutingModule],
    declarations: [HomeComponent, ContactUsComponent, PricingComponent, FormComponent],
    providers: [PaymentService]
})
export class PagesModule {

}
