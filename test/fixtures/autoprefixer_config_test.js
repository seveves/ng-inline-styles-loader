var actual = `import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Animations } from '../../animations';

@Component({
  animations: [ Animations.Visibility ],
  selector: 'buttons',
  styles: [\`:fullscreen a {
    display: flex
  }\`],
  template: \`
    <div *ngIf="thing.canBePrepended || thing.canBeAppended || thing.canHaveSubs"
          style="position: absolute; bottom: 10px; left: 10px; z-index: 99;" [@Visibility]="visibility">
      <div ngbDropdown [up]="true">
        <button role="button" class="btn btn-secondary btn-sm thing-btn" id="dropdownMenu1" ngbDropdownToggle>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <button role="button" *ngIf="thing.canBePrepended" class="dropdown-item" (click)="insert(false)">
            <i class="icon icon-arrow-left7" aria-hidden="true"></i>
          </button>
          <button role="button" *ngIf="thing.canBeAppended" class="dropdown-item" (click)="insert(true)">
            <i class="icon icon-arrow-right7" aria-hidden="true"></i>
          </button>
          <button role="button" *ngIf="thing.canHaveSubs" class="dropdown-item" (click)="add()">
            <i class="icon icon-arrow-down7" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  \`,
})
export class ThingButtonsComponent {
  @Input() public thing: IThing;
  @Input() public visibility: string;
  @Output() public onAdd: EventEmitter<IThing> = new EventEmitter<IThing>();
  @Output() public onInsert: EventEmitter<{ append: boolean, thing: IThing }> =
    new EventEmitter<{ append: boolean, thing: IThing }>();

  public insert(append: boolean) {
    this.onInsert.emit({ append, thing: this.thing });
  }

  public add() {
    this.onAdd.emit(this.thing);
  }
}`;

var expected = `import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Animations } from '../../animations';

@Component({
  animations: [ Animations.Visibility ],
  selector: 'buttons',
  styles: [\`:-webkit-full-screen a{display:flex}:-moz-full-screen a{display:flex}:-ms-fullscreen a{display:flex}:fullscreen a{display:flex}\`],
  template: \`
    <div *ngIf="thing.canBePrepended || thing.canBeAppended || thing.canHaveSubs"
          style="position: absolute; bottom: 10px; left: 10px; z-index: 99;" [@Visibility]="visibility">
      <div ngbDropdown [up]="true">
        <button role="button" class="btn btn-secondary btn-sm thing-btn" id="dropdownMenu1" ngbDropdownToggle>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <button role="button" *ngIf="thing.canBePrepended" class="dropdown-item" (click)="insert(false)">
            <i class="icon icon-arrow-left7" aria-hidden="true"></i>
          </button>
          <button role="button" *ngIf="thing.canBeAppended" class="dropdown-item" (click)="insert(true)">
            <i class="icon icon-arrow-right7" aria-hidden="true"></i>
          </button>
          <button role="button" *ngIf="thing.canHaveSubs" class="dropdown-item" (click)="add()">
            <i class="icon icon-arrow-down7" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  \`,
})
export class ThingButtonsComponent {
  @Input() public thing: IThing;
  @Input() public visibility: string;
  @Output() public onAdd: EventEmitter<IThing> = new EventEmitter<IThing>();
  @Output() public onInsert: EventEmitter<{ append: boolean, thing: IThing }> =
    new EventEmitter<{ append: boolean, thing: IThing }>();

  public insert(append: boolean) {
    this.onInsert.emit({ append, thing: this.thing });
  }

  public add() {
    this.onAdd.emit(this.thing);
  }
}`;

module.exports = { actual, expected };
