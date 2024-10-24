import { Component } from "@angular/core";
import { Reservation } from "../model/reservations.model";
import { ReservationsRepository } from "../model/reservations.repository"; // Import your repository

@Component({
    selector: "store",
    templateUrl: "./store.component.html",
    standalone: true
})
export class StoreComponent {
    constructor(private repository: ReservationsRepository) { }

    get reservations(): Reservation[] {
        return this.repository.getReservations(); // Fetching reservations
    }
}
