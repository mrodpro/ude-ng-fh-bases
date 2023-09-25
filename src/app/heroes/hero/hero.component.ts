import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../hero/hero.component.html',
  styleUrls: ['../hero/hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string { 
    return this.name.toUpperCase(); 
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }
  
  changeAge(): void {
    this.age = 65;
  }
  
  resetForm(): void {
    this.name = 'Ironman'
    this.age = 45;
    // ejemplo de cambio que no estaría fiscalizado de manera normal por Angular
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // }); 
  }

  

}
