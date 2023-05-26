import {Component, Input} from '@angular/core';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'practice';
  thumbnailUrl = 'data:image/jpeg;base64,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';
  imageUrl='https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg'
  ThumbnailUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg';
  // videoUrl= ''
  showVideoPlayer: boolean = false;

  showVideo() {
    this.showVideoPlayer = true;
  }

  hideVideo() {
    this.showVideoPlayer = false;
  }

  // products = [
  //   {
  //     image: 'product-image-1.jpg',
  //     title: 'Product 1',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     price: '$19.99'
  //   },
  //   {
  //     image: 'product-image-2.jpg',
  //     title: 'Product 2',
  //     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     price: '$24.99'
  //   },
  //   {
  //     image: 'product-image-3.jpg',
  //     title: 'Product 3',
  //     description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: '$29.99'
  //   }
  // ];

  // showDetails = false;

  // product shuffle sample
  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
  ];
  shuffleProducts() {
    this.products.sort(() => Math.random() - 0.5);
  }




  images = [
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Product image 1',
    },
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Product image 2',
    },
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Product image 3',
    },
  ];

  selectedImage: string;
  showImageZoom: boolean = false;

  sliderOptions = {
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  };
  //
  // zoomConfig = {
  //   zoomFactor: 2.5,
  //   maxZoom: 3,
  //   enableResize: false,
  // };

  openImageZoom(imageSrc: string) {
    this.selectedImage = imageSrc;
    this.showImageZoom = true;
  }

  closeImageZoom() {
    this.showImageZoom = false;
  }
  @Input() productImage: string;

  productImageWidth: number;
  productImageHeight: number;
  zoom = 2;
  magnifiedImageVisible = false;
  mouseX: number;
  mouseY: number;

  constructor() {}

  ngOnInit() {
    const img = new Image();
    img.onload = () => {
      this.productImageWidth = img.width;
      this.productImageHeight = img.height;
    };
    img.src = this.productImage;
     this.shuffleProducts();
  }

  onMouseOver(event) {
    this.magnifiedImageVisible = true;
  }

  onMouseMove(event) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
  }

  onMouseOut(event) {
    this.magnifiedImageVisible = false;
  }

  getMagnifiedImagePosition() {
    const x = -this.mouseX * this.zoom + (this.productImageWidth * this.zoom) / 2;
    const y = -this.mouseY * this.zoom + (this.productImageHeight * this.zoom) / 2;
    return x + 'px ' + y + 'px';
  }

}




