import { Column, Entity } from "typeorm";


@Entity('usuarios')
export class Usuario {

    @Column({ primary: true, generated: true })
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    
}
