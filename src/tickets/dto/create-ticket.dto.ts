import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { Ticket } from "../ticket.interface.js";

export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()
    subject: Ticket['subject'];
    @IsString()
    @IsNotEmpty()
    description: Ticket["description"];
    @IsString()
    @IsNotEmpty()
    @IsIn(['low', 'medium', 'high'])
    priority: Ticket["priority"]
}
