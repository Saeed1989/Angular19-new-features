import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.component.html',
  styleUrl: './signal-component.component.scss'
})
export class SignalComponentComponent {

  // Signals are primitives, so we can use them outside the component class
  myValue = signal(0);
  double = computed(() => this.myValue() * 2);

  constructor() {
    // Register a new effect.
    effect(() => {
      console.log(`The count is: ${this.myValue()}`);
    });
  }




  inc() {
    this.myValue.update((c) => c + 1);
  }

  reset() {
    this.myValue.set(0);
  }





}


