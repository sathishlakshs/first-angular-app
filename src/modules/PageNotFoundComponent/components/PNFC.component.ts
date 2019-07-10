import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnfc',
  templateUrl: './PNFC.component.html',
  styleUrls: ['./PNFC.component.scss']
})
export class PNFComponent implements OnInit {
title: string;

  ngOnInit() {
    this.title = 'PAGE NOT FOUND COMPONENT';
  }
}
