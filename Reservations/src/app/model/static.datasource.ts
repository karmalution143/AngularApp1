import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { Reservation, AvailableSlot } from "./reservations.model"; // Ensure you import the correct models

@Injectable()
export class StaticDataSource {
    private reservations: Reservation[] = [
        new Reservation(1, "Green Lake Conservation Area", "A beautiful lake surrounded by forest.", [
            new AvailableSlot(1, "9:00 AM - 12:00 PM", true),
            new AvailableSlot(2, "12:00 PM - 3:00 PM", true),
            new AvailableSlot(3, "3:00 PM - 6:00 PM", true)
        ]),
        new Reservation(2, "Sunny Hills Conservation Area", "Rolling hills with scenic views.", [
            new AvailableSlot(4, "9:00 AM - 12:00 PM", true),
            new AvailableSlot(5, "12:00 PM - 3:00 PM", true),
            new AvailableSlot(6, "3:00 PM - 6:00 PM", true)
        ]),
        new Reservation(3, "Mountain View Conservation Area", "Stunning views of the mountains.", [
            new AvailableSlot(7, "9:00 AM - 12:00 PM", true),
            new AvailableSlot(8, "12:00 PM - 3:00 PM", true),
            new AvailableSlot(9, "3:00 PM - 6:00 PM", true)
        ]),
        new Reservation(4, "River Bend Conservation Area", "A serene river setting perfect for relaxation.", [
            new AvailableSlot(10, "9:00 AM - 12:00 PM", true),
            new AvailableSlot(11, "12:00 PM - 3:00 PM", true),
            new AvailableSlot(12, "3:00 PM - 6:00 PM", true)
        ])
    ];

    getReservations(): Observable<Reservation[]> {
        return from([this.reservations]);
    }
}
