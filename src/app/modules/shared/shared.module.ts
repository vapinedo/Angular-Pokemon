import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BackTopComponent } from "./components/back-top/back-top.component";
import { CustomScrollDirective } from "./directives/custom-scroll.directive";

const components = [
    BackTopComponent,
    CustomScrollDirective
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