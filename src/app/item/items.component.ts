import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { ModalComponent } from "./modal/modal.component";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    constructor(private modalService: ModalDialogService,
                private vcRef: ViewContainerRef) {
    }

    ngOnInit(): void {}

    openModal(): void {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: {},
            fullscreen: true
        };

        this.modalService.showModal(ModalComponent, options);
    }
}
