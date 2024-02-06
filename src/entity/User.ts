import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class Recipes {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({type: "json"})
    ingredients: object

    @Column()
    directions: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
