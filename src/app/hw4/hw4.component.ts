import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw4',
  templateUrl: './hw4.component.html',
  styleUrls: ['./hw4.component.css']
})
export class Hw4Component implements OnInit {
  set: Set<string> = new Set<string>();
  isLogin = false;
  dish = 'opps, wrongselection';
  currselection = '';
  list = [];
  nameAgeMapping = new Map();
  key = '';

  update(ss) {
    if (!this.set.has(ss)) {
      this.set.add(ss);
      this.currselection += ' ';
      this.currselection += ss;
      this.list.push(ss);
    }
  }

  getRecipe() {
    this.list.sort();
    for (var x of this.list) {
      this.key += x;
    }
    if(this.nameAgeMapping.has(this.key)){
      this.dish = this.nameAgeMapping.get(this.key);
    }
    this.isLogin = true;
  }

  reset() {
    this.isLogin = false;
    this.key = '';
    this.currselection = '';
    this.set.clear();
    this.list = [];
    this.dish = 'opps, wrongselection';
  }

  addFish1() {
    const ss = 'fish1';
    this.update(ss);
  }
  addFish2() {
    const ss = 'fish2';
    this.update(ss);
  }
  addFish3() {
    const ss = 'fish3';
    this.update(ss);
  }
  addFish4() {
    const ss = 'fish4';
    this.update(ss);
  }
  addFish5() {
    const ss = 'fish5';
    this.update(ss);
  }
  addFish6() {
    const ss = 'fish6';
    this.update(ss);
  }


  constructor() { }

  ngOnInit() {
    this.nameAgeMapping.set('fish1fish2', '学霸垃圾');
    this.nameAgeMapping.set('fish2fish3', '梁老板青春美少女');
  }

}
