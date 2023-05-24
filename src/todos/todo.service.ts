import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { Todo } from "./todo.entity";
import { CreateTodo } from "./dto/todo.dto";


//here we have the common interface to use different ORMs
@Injectable()
export default class TodoService {


    constructor(
        @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    ) { }

    async create(dto: CreateTodo) {
        const todo = this.todoRepository.create(dto);

        return await this.todoRepository.save(todo);
    }

    findMany() {
        return this.todoRepository.find()
    }

    async update(id: number, dto: CreateTodo): Promise<Todo> {
        const updatedTodo = await this.todoRepository.findOne({ where: { id } });

        // Update the properties of the retrieved todo entity with the values from the dto
        updatedTodo.title = dto.title;
        updatedTodo.Description = dto.Description;

        return this.todoRepository.save(updatedTodo);
    }

    async Delete(id: number, dto: CreateTodo): Promise<Todo> {
        const updatedTodo = await this.todoRepository.findOne({ where: { id } });

        return this.todoRepository.remove(updatedTodo);
    }


}