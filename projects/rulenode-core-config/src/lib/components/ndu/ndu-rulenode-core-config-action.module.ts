import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { EntityStatusUpdaterConfigComponent } from './action/entity-status-updater-config.component';

@NgModule({
    declarations: [
        EntityStatusUpdaterConfigComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        EntityStatusUpdaterConfigComponent
    ]
})
export class NDURuleNodeCoreConfigActionModule {
}
