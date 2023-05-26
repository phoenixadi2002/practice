import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appZoomable]'
})
export class ZoomableDirective{

  private scale=1.0;
  constructor(private elementRef: ElementRef) {}
  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const offset = this.elementRef.nativeElement.getBoundingClientRect();
    const x = event.pageX - offset.left;
    const y = event.pageY - offset.top;
    const centerX = offset.width / 2;
    const centerY = offset.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    this.scale = Math.sqrt(deltaX * deltaX + deltaY * deltaY) + 1.0;
    this.elementRef.nativeElement.style.transform = `scale(${this.scale})`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scale = 1.0;
    this.elementRef.nativeElement.style.transform = `scale(${this.scale})`;
  }
}
