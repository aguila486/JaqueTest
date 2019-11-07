import { NgModule } from "@angular/core";
import { DasboardComponent } from './dasboard/dasboard.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        PagesComponent,
        DasboardComponent,
    ],
    exports: [
        PagesComponent,
        DasboardComponent
    ],
    imports: [
        ComponentsModule,
        CommonModule
    ]
})
export class PagesModule{}