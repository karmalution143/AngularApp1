import { Injectable } from "@angular/core";
import { Reservation } from "./reservations.model";
import { StaticDataSource } from "./static.datasource"; // Importing your static data source

@Injectable()
export class ReservationsRepository {
    private reservations: Reservation[] = [];

    constructor(private dataSource: StaticDataSource) {
        // Subscribe to the observable returned by getReservations
        dataSource.getReservations().subscribe(data => {
            this.reservations = data;
        });
    }

    // Fetch all reservations, optionally filtered by reserved ID
    getReservations(reservedID?: number): Reservation[] {
        return this.reservations
            .filter(r => reservedID === undefined || reservedID === r.id); // Ensure you use reservedID
    }

    getReservation(id: number): Reservation | undefined {
        return this.reservations.find(r => r.id === id);
    }
}
