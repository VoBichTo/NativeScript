import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
    selector: "modal",
    moduleId: module.id,
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"],
})

export class ModalComponent {
    barcodescanner: any;

    constructor(private param: ModalDialogParams) {
        this.barcodescanner = new BarcodeScanner();
    }

    close() {
        this.param.closeCallback();
    }

    public onScanResult(evt) {
        console.log(`onScanResult: ${evt.text} (${evt.formart})`);
    }

    openNotification() {
        console.log("OPEN NOTIFICATION");
        this.close();

        this.barcodescanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT. Also, try the volume buttons!", // IOS only, default 'Close'
            cancelLabelBackgroundColor: "#333333", // IOS only, default '#000000' (black)

            showFlipCameraButton: true, // default fasle
            preferFrontCamera: false, // default false
            showTorchButton: true, // default false
            beepOnScan: true, // Play on Suppress beep on scan (default true)
            torchOn: false, // launch with the flashlight on (default false)
            closeCallback: () => {
                console.log("Scanner closed");
            }, // invoked when the scanner was closed (success or abort)

            openSettingIfPermissionWasPreviouslyDenied: true // On IOS you can send the user to the settings app if access was previously denied
        }).then((result) => {
            // Note that this Promis is never invoked when a 'continuousScanCallback' function is provided
            console.log({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
          }, (errorMessage) => {
            console.log("No scan. " + errorMessage);
          }
        );
    }
}