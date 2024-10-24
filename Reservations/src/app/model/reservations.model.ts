export class AvailableSlot {
  constructor(
      public id: number,
      public time: string,
      public isAvailable: boolean
  ) {}
}

export class Reservation {
  constructor(
      public id: number,
      public name: string,
      public description: string,
      public availableSlots: AvailableSlot[]
  ) {}
}