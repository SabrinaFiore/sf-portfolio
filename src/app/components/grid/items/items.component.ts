import { HostListener, ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface Atom {
  x: number;
  y: number;
  radius?: number;
  speedX?: number;
  speedY?: number;
}

interface currentColour {
 r?: any;
 g?: any;
 b?: any;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {
  atoms: Atom[] =[];
  canvas: any;
  canvasTwo: any;
  canvasThree: any;

  ctx: any;
  ctxTwo: any;
  ctxThree: any;

  x: any;
  y: any;
  radius: any;
  speedX: any;
  speedY: any;
  newAtom: any;

  constructor() {}

  @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;
  @ViewChild('canvasTwo', { static: true }) secondCanvas!: ElementRef;
  @ViewChild('canvasThree', { static: true }) thirdCanvas!: ElementRef;
  @ViewChild('canvasFour', { static: true }) canvasFour!: ElementRef;

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    // this.ctx.width = event.target.innerWidth;
    // this.ctx.height = event.target.innerHeight;

    // console.log("ctx.width", this.ctx.width, "this.ctx.height", this.ctx.height)
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(e: any) {
    let atom: Atom = { x: e.x, y: e.y, radius: Math.random() * 2 + 2, speedX: Math.random() * 4 - 2, speedY: Math.random() * 4 - 2 };
    this.atoms.push(atom)
    this.draw(e)

    this.atoms.forEach((atom: any, index: number, e: any) => {
      this.updateSpeed(atom, index);
    })
  }

  draw(e: any) {
    this.ctx.beginPath();
    this.ctx.arc(e.x, e.y, Math.random() * 4 + 2, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctxTwo.beginPath();
    this.ctxTwo.arc(e.x, e.y, Math.random() * 4 + 2, 0, Math.PI * 2);
    this.ctxTwo.stroke();

    this.ctxThree.beginPath();
    this.ctxThree.arc(e.x, e.y, Math.random() * 4 + 2, 0, Math.PI * 2);
    this.ctxThree.fill();
  }

  updateSpeed(atom: any, index: number){
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    this.ctxTwo.fillStyle = 'black';

    const radgrad = this.ctxThree.createRadialGradient(300, 300, 40, 300, 300, 80);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.9, '#019F62');
    radgrad.addColorStop(1, 'rgba(1, 159, 98, 0.5)');
    this.ctxThree.fillStyle = radgrad;

    atom.x += Math.random() * 4 - 2;
    atom.y += Math.random() * 4 - 2;
    atom.radius -= 0.1;

    if (atom?.radius < 0.3) {
      this.atoms.splice(index, 1);
    }
  }

  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas?.nativeElement;
    this.canvas = canvas
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'white';

    const canvasTwo: HTMLCanvasElement = this.secondCanvas?.nativeElement;
    this.canvasTwo = canvasTwo
    this.ctxTwo = canvasTwo.getContext('2d');

    const canvasThree: HTMLCanvasElement = this.thirdCanvas?.nativeElement;
    this.canvasThree = canvasThree
    this.ctxThree = canvasThree.getContext('2d');
  }
}
