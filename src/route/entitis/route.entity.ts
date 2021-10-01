import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@InputType({ isAbstract: true})
@Entity()
@ObjectType()
export class Route {

    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;
    
    @Column()
    @Field(type => String)
    route: string;
    
    @Column()
    @Field(type => Number)
    character: number;   
    
    @Column()
    @Field(type => Number)
    season: number;   
    
    @Column()
    @Field(type => Number)
    routeId : number;
    
    @Column("int", { array: true })
    @Field(type => [Number])
    enemy_character_count: number[]; 
    
    @Column()
    @Field(type => Number)
    count: number;

    @Column()
    @Field(type => Number)
    likeScore: number;
}