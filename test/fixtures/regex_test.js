var actual = `import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fw-shadowbox-things-box',
  styles: [\`
    .sb-input-h1 {
      font-size: 52px;
      font-weight: 300;
      border: 0px;
      border-radius: 0;
      outline: none;
      margin-bottom: 20px;
      padding-left: 0px;
      text-overflow: ellipsis;
      line-height: 0;
    }
    .sb-strong {
      font-size: 28px;
      font-weight: 300;
      color: #55595c;
      line-height: 1.25;
      padding: .5rem 0rem;
      vertical-align: middle;
    }\`],
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

var expected = `import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fw-shadowbox-things-box',
  styles: [\`.sb-input-h1{font-size:52px;font-weight:300;border:0;border-radius:0;outline:0;margin-bottom:20px;padding-left:0;text-overflow:ellipsis;line-height:0}.sb-strong{font-size:28px;font-weight:300;color:#55595c;line-height:1.25;padding:.5rem 0;vertical-align:middle}\`],
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

module.exports = { actual, expected };
