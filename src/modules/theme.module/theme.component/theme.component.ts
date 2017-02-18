import { Component } from '@angular/core';

@Component({
    selector: 'theme',
    templateUrl: './modules/theme/theme.component.html',
    styleUrls: ['./modules/theme/theme.component.css']
})
export class ThemeComponent {
    name: string = "Ankur";

    changeName() {
        this.name = this.name == "Sandeep" ? "Ankur" : "Sandeep";
    }
}