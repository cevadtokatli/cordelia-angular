import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CordeliaComponent } from './cordelia.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CordeliaComponent
    ],
    exports: [
        CordeliaComponent
    ]
})
export class CordeliaModule {}
