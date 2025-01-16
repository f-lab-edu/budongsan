import { Entity, PrimaryColumn, ManyToOne, CreateDateColumn, JoinColumn } from "typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { BoardsEntity } from "src/boards/entities/boards.entity";

@Entity('scrap')
export class ScrapEntity {
    @PrimaryColumn()
    userNo: number;

    @PrimaryColumn()
    boardId: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => UserEntity, (user) => user.bridges)
    @JoinColumn({ name: 'userNo', referencedColumnName: 'userNo' })
    user: UserEntity;

    @ManyToOne(() => BoardsEntity, (board) => board.bridges)
    @JoinColumn({ name: 'boardId', referencedColumnName: 'boardId' })
    board: BoardsEntity;
}