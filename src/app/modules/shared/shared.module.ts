import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackTopComponent } from "./components/back-top/back-top.component";

const components = [
    BackTopComponent
];

const modules = [
    CommonModule
];

@NgModule({
    imports: [modules],
    declarations: [components],
    exports: [components, modules]
})
export class SharedModule {}