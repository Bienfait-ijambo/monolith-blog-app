import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { AppDataSource } from "../../../infrastructure/typeorm/data-source"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column({
        nullable :true
    })
    image: string


    constructor(userName:string,email: string, password:string, role: string){
        this.userName = userName
        this.email=email;
        this.password=password;
        this.role=role;
    }


}




