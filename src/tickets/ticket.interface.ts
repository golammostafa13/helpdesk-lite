export interface Ticket {
    id: Number;
    subject: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'open' | 'closed';
    createdAt: string;
}
