import { Injectable } from "@nestjs/common";
import { Appointment, AppointmentStatus } from "./appointment.model";
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppointmentsService {
    private appointments: Appointment[] = [];

    getAllAppointments(): Appointment[] {
        return this.appointments;
    }

    requestAppointment(title: string, description: string): Appointment {
        const appointment: Appointment = {
            id: uuid(),
            title,
            description,
            status: AppointmentStatus.PENDING,
        };

        this.appointments.push(appointment);
        return appointment;
    }

    
}