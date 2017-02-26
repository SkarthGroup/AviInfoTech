import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home.component/home.component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';
import { PricingComponent } from './pricing.component/pricing.component';
import { PaymentService } from '../services/payment.service';
import { FormComponent } from './form.component/form.component';
import { DevelopmentComponent } from './development.component/development.component';
import { TranslationComponent } from './translation.component/translation.component';
import { TermComponent } from './term.component/term.component';
import { PrivacyComponent } from './privacy.component/privacy.component';
import { RefundComponent } from './refund.component/refund.component';
import { AboutComponent } from './about.component/about.component';

@NgModule({
    imports: [PagesRoutingModule],
    declarations: [HomeComponent, ContactUsComponent, PricingComponent, FormComponent, DevelopmentComponent, TranslationComponent, TermComponent, PrivacyComponent, RefundComponent, AboutComponent],
    providers: [PaymentService]
})
export class PagesModule {

}
