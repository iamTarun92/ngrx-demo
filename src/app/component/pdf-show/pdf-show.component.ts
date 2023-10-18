import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pdf-show',
  templateUrl: './pdf-show.component.html',
  styleUrls: ['./pdf-show.component.scss']
})
export class PdfShowComponent implements AfterViewInit {
  @ViewChild('selectedData') selectedData!: ElementRef;
  @ViewChild('iframeContainer') iframeContainer!: ElementRef;


  ngAfterViewInit() {
    this.selectedData?.nativeElement.addEventListener('click', this.handleDataSelection);
    this.iframeContainer?.nativeElement.addEventListener('click', this.handleDataSelection);
  }

  handleDataSelection(event: any) {
    // const selectedText = window.getSelection()?.toString()
    // console.log('Selected Text:', window);

    // const iframe = this.iframeContainer?.nativeElement
    // const iframeDocument = iframe.contentDocument;
    // const iframeWindow = iframe.contentWindow;
    // const selectedText1 = iframeWindow.getSelection()
    // console.log('Selected Text:', selectedText1);
  }
}
