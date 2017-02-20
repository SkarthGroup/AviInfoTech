import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component/header.component';
import { FooterComponent } from './footer.component/footer.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class ThemeModule {
}