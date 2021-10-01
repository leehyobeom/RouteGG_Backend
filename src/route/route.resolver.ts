
import { Args, Query, Resolver } from '@nestjs/graphql';
import { RecommandRouteInput } from './dtos/recommandRoute.dto';
import { Route } from './entitis/route.entity';
import { RouteService } from './route.service';

@Resolver(of => Route)
export class RouteResolver {
    constructor(
        private routeService: RouteService
    ){}

    @Query(returns => Route)
    getRecommandRoute(
        @Args('input') 
        recommandRouteInput:  RecommandRouteInput
        ): Promise<Route>{
        return this.routeService.getRecommandRoute(recommandRouteInput);
    }

    @Query(returns => Boolean)
    hi(   
    ){
        return true;
    }
}
