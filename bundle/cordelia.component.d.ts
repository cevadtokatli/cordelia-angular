import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import Cordelia from 'cordelia';
export declare class CordeliaComponent implements OnInit {
    el: ElementRef;
    cordelia: Cordelia;
    color: string;
    colorFormat: string;
    pickerStyle: number;
    embed: boolean;
    size: string;
    allowOpacity: boolean;
    allowClearColor: boolean;
    showColorValue: boolean;
    showButtons: boolean;
    showPalette: boolean;
    paletteColors: string[];
    allowPaletteAddColor: boolean;
    onOpen: EventEmitter<{}>;
    onClose: EventEmitter<{}>;
    onSave: EventEmitter<{}>;
    onCancel: EventEmitter<{}>;
    onChanged: EventEmitter<{}>;
    ngOnInit(): void;
}
