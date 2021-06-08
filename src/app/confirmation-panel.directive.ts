import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {

  // Con este input ejecutaremos la directiva cuando se produzca
  @Input('confirm') execFunction: Function;
  @HostListener('click', ['$event'])
  onClick() {
    const confirmed = window.confirm('¿Estas seguro de querer guardar?');

    if (confirmed) {
      this.execFunction();
    }
  }
}
