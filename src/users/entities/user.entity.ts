import { PrimaryGeneratedColumn, Column, BeforeInsert, Entity} from 'typeorm';
import * as bcrypt from 'bcrypt';

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
    private beforeInsert(){
        this.password = bcrypt.hashSync(this.password, 5);
    }

}
