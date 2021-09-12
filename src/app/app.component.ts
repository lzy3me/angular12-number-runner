import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'case1';

  @ViewChild('selector') function_selector!: ElementRef;
  @ViewChild('number_in') n!: ElementRef;
  isFunction = false;

  ngAfterViewInit() {
    let num = this.n.nativeElement.value;
    if (num < 1) this.n.nativeElement.value = 1;
  }

  onChange() {
    let num = this.n.nativeElement.value;
    if (num < 1) this.n.nativeElement.value = 1;

    console.log(num);
    this.isFunction = this.onCalculation(num);
  }

  onCalculation(num: number) {
    let f = this.function_selector.nativeElement.value;
    num = Math.round(num);

    switch (f) {
      case 'is_prime':
        for (let i = 2; i < num; i++)
          if (num % i === 0) return false;
        return this.isFunction = num > 1;
      case 'is_fibonacci':
        const isSqt = (n: number) => {
          return n > 0 && Math.sqrt(n) % 1 === 0;
        };

        return isSqt(5 * (num * num) - 4) || isSqt(5 * (num * num) + 4);
      default:
        return false;
    }
  }
}
