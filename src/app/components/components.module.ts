import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ModalComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        ModalComponent
    ]
})

export class ComponentsModule{}