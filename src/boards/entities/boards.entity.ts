import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('boards')
export class BoardsEntity {
    @PrimaryGeneratedColumn()
    boardId: number;

    @Column()
    title: string;

    @Column()
    contents: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    public static validate(title: string, contents: string): boolean {
        const isTitleValid = title;
        const isContentsValid = contents;

        if (!isTitleValid) {
            throw new Error('The title cannot be blank.');
        } else if (!isContentsValid) {
            throw new Error('The contents cannot be blank.');
        }

        return true;
    }
}