import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto.js';
import { TicketsService } from './tickets.service.js';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }
    @Get()
    findAll(@Query() filterTicketsQueryDto: FilterTicketsQueryDto) {
        return this.ticketsService.findAll(filterTicketsQueryDto.status, filterTicketsQueryDto.priority);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.ticketsService.findOne(id)
    }
    @Post()
    createTicket(@Body() createTicketDto: CreateTicketDto) {
        return this.ticketsService.createTicket(createTicketDto);
    }
}
