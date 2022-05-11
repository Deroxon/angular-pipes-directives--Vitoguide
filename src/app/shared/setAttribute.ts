import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[setAtribut]',
})
export class CheckedDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() appHighlight = '';

  ngOnInit(): void {
    let li = this.el.nativeElement;
    this.renderer.setAttribute(li, 'setAtribut', 'Piesek.' + this.appHighlight);
    //this.renderer.setStyle(li, 'background', 'gray')
    console.log(this.appHighlight);
  }
}
