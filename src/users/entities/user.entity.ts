import { PrimaryGeneratedColumn, Column, BeforeInsert, Entity, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ScrapEntity } from 'src/scrap/scrap.entity';

@Entity('tb_user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    userNo: number;

    @Column()
    userId: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    private beforeInsert() {
        this.password = bcrypt.hashSync(this.password, 5);
    }

    @OneToMany(() => ScrapEntity, scrap => scrap.user)
    bridges: ScrapEntity[];

}
