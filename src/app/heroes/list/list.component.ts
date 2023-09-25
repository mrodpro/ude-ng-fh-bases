import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: '../list/list.component.html',
  styleUrls: ['../list/list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'She Hulk'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
    //console.log({ deletedHero }); // to print on console
  }

  resetHeroNames(): void {
    this.heroNames = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'She Hulk'];
  }

}
