import { IsIn, IsOptional } from "class-validator";
import { Ticket } from "../ticket.interface.js";

export class FilterTicketsQueryDto {
    @IsOptional()
    @IsIn(['closed', 'open'])
    status?: Ticket['status'];
    @IsOptional()
    @IsIn(['high', 'medium', 'low'])
    priority?: Ticket['priority'];
}
