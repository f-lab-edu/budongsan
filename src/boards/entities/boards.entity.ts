import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('boards')
export class BoardsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    public static validate(title: string): boolean {
        const isValid = title;
        if (!isValid) {
            throw new Error('The title cannot be blank.');
        }
        return true;
    }
}