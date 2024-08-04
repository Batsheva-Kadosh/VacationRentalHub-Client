import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavColor]'
})
export class NavColorDirective implements OnInit {

  constructor(public element: ElementRef) { }
  ngOnInit(){

  }
  @HostListener('click') func(){
    this.element.nativeElement.style.backgroundColor = "pink"  ;
  }
}
