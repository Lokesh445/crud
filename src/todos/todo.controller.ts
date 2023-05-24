import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import TodoService from "./todo.service";
import { CreateTodo } from "./dto/todo.dto";



//Here we have the methods for crud

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post()
    create(@Body() dto: CreateTodo) {
        return this.todoService.create(dto);
    }

    @Get()
    findMany() {
        return this.todoService.findMany();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateTodo) {
        return this.todoService.update(id, dto);
    }

    @Delete(':id')
    Delete(@Param('id') id: number, @Body() dto: CreateTodo) {
        return this.todoService.Delete(id, dto);
    }

}