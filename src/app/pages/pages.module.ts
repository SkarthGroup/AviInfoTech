import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home.component/home.component';
import { ContactUsComponent } from './contact-us.component/contact-us.component';

@NgModule({
    imports: [PagesRoutingModule],
    declarations: [ HomeComponent, ContactUsComponent],
})
export class PagesModule {}