
import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { EntityType, RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// ndu-action-node-entity-status-updater-config
@Component({
  selector: 'ndu-action-node-entity-status-updater-config',
  templateUrl: './entity-status-updater-config.component.html',
  styleUrls: []
})
export class EntityStatusUpdaterConfigComponent extends RuleNodeConfigurationComponent {

  customerEntityType: EntityType = EntityType.CUSTOMER;

  statusUpdaterConfigForm: FormGroup;


  constructor(protected store: Store<AppState>,
    private fb: FormBuilder) {
    super(store);
  }

  ngOnInit() {

  }

  protected configForm(): FormGroup {
    return this.statusUpdaterConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.statusUpdaterConfigForm = this.fb.group({
      targetStatus: [configuration ? configuration.targetStatus : 'ALARM', [Validators.required]],
    });

  }

  protected validatorTriggers(): string[] {
    return [];
  }

  protected updateValidators(emitEvent: boolean) {

  }


}
