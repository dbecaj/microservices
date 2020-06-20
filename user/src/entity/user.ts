import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar2", 
        nullable: false
    })
    name: string;

    @Column({
        type: "varchar2",
        nullable: false
    })
    address: string;

    @Column({
        nullable: false
    })
    birthdate: Date;

    @Column({ type: "varchar2" })
    phone: string;

    @Column()
    membershipPayment: Date;

    @Column()
    isStudent: boolean;
}