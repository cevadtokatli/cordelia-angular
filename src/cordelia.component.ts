import { Component, ViewEncapsulation, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit } from '@angular/core';
import Cordelia, { ConvertedColorType } from 'cordelia';

@Component({
    selector: 'cordelia',
    template: '<div #picker></div>',
    styleUrls: ['./cordelia.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CordeliaComponent implements OnInit {
    @ViewChild('picker') el: ElementRef;
    cordelia: Cordelia;
    @Input() color: string;
    @Input() colorFormat: string;
    @Input() pickerStyle: number;
    @Input() embed: boolean;
    @Input() size: string;
    @Input() allowOpacity: boolean;
    @Input() allowClearColor: boolean;
    @Input() showColorValue: boolean;
    @Input() showButtons: boolean;
    @Input() showPalette: boolean;
    @Input() paletteColors: string[];
    @Input() allowPaletteAddColor: boolean;
    @Output() onOpen = new EventEmitter();
    @Output() onClose = new EventEmitter();
    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();
    @Output() onChanged = new EventEmitter();

    ngOnInit() {
        this.cordelia = new Cordelia({
            elm: this.el.nativeElement,
            color: this.color,
            colorFormat: this.colorFormat,
            pickerStyle: this.pickerStyle,
            embed: this.embed,
            size: this.size,
            allowOpacity: this.allowOpacity,
            allowClearColor: this.allowClearColor,
            showColorValue: this.showColorValue,
            showButtons: this.showButtons,
            showPalette: this.showPalette,
            paletteColors: this.paletteColors,
            allowPaletteAddColor: this.allowPaletteAddColor
        });

        this.cordelia.el.addEventListener('open', () => {
            this.onOpen.emit();
        });
        this.cordelia.el.addEventListener('close', () => {
            this.onClose.emit();
        });
        this.cordelia.el.addEventListener('save', () => {
            this.onSave.emit();
        });
        this.cordelia.el.addEventListener('cancel', () => {
            this.onCancel.emit();
        });
        this.cordelia.el.addEventListener('changed', () => {
            this.onChanged.emit();
        });
    }
}
