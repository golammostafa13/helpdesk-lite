import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';

@Injectable()
export class TicketsService {
    private ticketId = 9;
    private readonly tickets: Ticket[] = [
        {
            id: 1,
            subject: 'Unable to login',
            description: 'User is unable to log in using valid credentials.',
            priority: 'high',
            status: 'open',
            createdAt: '2026-11-01T10:30:00Z',
        },
        {
            id: 2,
            subject: 'Payment processing issue',
            description: 'Payment transaction is failing during checkout.',
            priority: 'high',
            status: 'open',
            createdAt: '2026-11-01T11:45:00Z',
        },
        {
            id: 3,
            subject: 'Update profile information',
            description: 'User wants to update their registered email address.',
            priority: 'low',
            status: 'closed',
            createdAt: '2026-11-02T08:15:00Z',
        },
        {
            id: 4,
            subject: 'Dashboard loading slowly',
            description: 'Dashboard takes more than 10 seconds to load.',
            priority: 'medium',
            status: 'open',
            createdAt: '2026-11-02T09:20:00Z',
        },
        {
            id: 5,
            subject: 'Password reset request',
            description: 'User is not receiving the password reset email.',
            priority: 'medium',
            status: 'closed',
            createdAt: '2026-11-03T12:00:00Z',
        },
        {
            id: 6,
            subject: 'Application crash',
            description: 'Application crashes when submitting the support form.',
            priority: 'high',
            status: 'open',
            createdAt: '2026-11-03T14:30:00Z',
        },
        {
            id: 7,
            subject: 'Feature request',
            description: 'Add dark mode support to the application.',
            priority: 'low',
            status: 'open',
            createdAt: '2026-11-04T07:45:00Z',
        },
        {
            id: 8,
            subject: 'Incorrect notification',
            description: 'User receives duplicate notifications for a single event.',
            priority: 'medium',
            status: 'closed',
            createdAt: '2026-11-04T09:00:00Z',
        }];

    findAll(status?: Ticket['status'], priority?: Ticket['priority']) {
        let tickets = this.tickets;
        if(status){
            tickets = tickets.filter((ticket) => ticket.status == status);
        }
        if(priority){
            tickets = tickets.filter((ticket) => ticket.priority == priority);
        }
        return tickets;
    }
    findOne(id: number) {
        const ticket = this.tickets.find((item) => item.id === id)
        if (!ticket) {
            throw new NotFoundException(`Ticket with ID ${id} not found`)
        }
        return ticket;
    }
    createTicket(payload: CreateTicketDto){
        const newTicket: Ticket = {
            id: this.ticketId++,
            subject: payload.subject,
            description: payload.description,
            priority: payload.priority,
            status: 'open',
            createdAt: new Date().toISOString()
        }
        this.tickets.push(newTicket);
        return newTicket;
    }
}
