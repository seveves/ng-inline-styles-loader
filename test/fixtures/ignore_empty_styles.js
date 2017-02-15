var actual = `import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fw-shadowbox-things-box',
  styles: [],
  template: \`
    <div>Test</div>
    <template ngbModalContainer></template>
 \`,
})
export class FooComponent implements OnInit, OnDestroy {

  constructor(
    public modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  public ngOnInit() {
    this.routeParamsSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params) {
          const id = params['id'] as string;
      }
  }
}
`;

var expected = actual;

module.exports = { actual, expected };
