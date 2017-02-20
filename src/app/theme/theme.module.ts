import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component/header.component';
import { FooterComponent } from './footer.component/footer.component';


@NgModule({
    imports: [RouterModule],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class ThemeModule {
}