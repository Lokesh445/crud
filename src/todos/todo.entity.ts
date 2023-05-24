import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//Here we have all the required fields based on bussiness logics

@Entity({ name: 'Todos' })
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: String;

    @Column()
    Description: String;

    @Column()
    isActive: Boolean;
}