import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  template: `
  <div class="relative searchInputContainer">
    <input class="searchInput" value={{props.value}} (change)="props.onChange" 
    placeholder="{{props.placeholder}}"/>
    <span class="absolute top10 right0"><img alt="virdhi_logo" src="assets/svg/magnify.svg"class="searchIcon" ></span>
</div>    
  `,
  styles: [
    `.searchInput {
      color: #747476;
      border: none;
      padding-left: 10px;
      height:100%;
      background: transparent;
      width: 80%;
      outline: none;
    }
    .searchInputContainer{
      color: #747476;
      border: none;
      height: 40px;
      padding-left: 10px;
      background: #f1f2f5;
      border-radius: 2px;
      width: 100%;
      outline: none;
      margin-right: 12px;
      position: relative;
    }
    .searchIcon{
      color: #969696;
    }
    `
  ]
})
export class SearchBoxComponent implements OnInit {
  @Input() props: {
    name: string,
    placeholder: string,
    value: string,
    onChange: any,
    errorMsg: string,
    class: string,
  }
  constructor() {
   }

  ngOnInit() {
  }

}
