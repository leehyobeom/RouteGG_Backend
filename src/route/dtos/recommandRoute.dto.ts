import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { IsNull } from "typeorm";
import { Route } from "../entitis/route.entity";



@InputType()
export class RecommandRouteInput extends PickType(Route,['character','enemy_character_count','season']){
}
