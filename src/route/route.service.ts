import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecommandRouteInput } from './dtos/recommandRoute.dto';
import { Route } from './entitis/route.entity';

@Injectable()
export class RouteService {

    constructor(
        @InjectRepository(Route)
        private routeRepository: Repository<Route>
    ){

    }

    async getRecommandRoute(recommandRouteInput:RecommandRouteInput): Promise<Route>{

        const game = await this.routeRepository.find({
            character: recommandRouteInput.character,
            season: recommandRouteInput.season
        });
        const bestRoute = RouteService.calculateSimilarity(recommandRouteInput.enemy_character_count, game)
        return bestRoute;
    }

    static calculateSimilarity(tartgetData: number[], routes:Route[]): Route{
        const tartgetDataPercent = RouteService.change_Conut_To_Percent(tartgetData);
        const arrSimilarPercent = routes.map((e)=>{
            const perCentArr = RouteService.change_Conut_To_Percent(e.enemy_character_count);
            return RouteService.similarity(tartgetDataPercent, perCentArr);
        })
        
        const bestSimilarRouteIndex =  RouteService.indexOfMax(arrSimilarPercent);
        return routes[bestSimilarRouteIndex];
    }

    static similarity(a_Arr: number[],b_Arr: number[]){
        const difference =a_Arr.map((e, i)=>
            (e - b_Arr[i]) ** 2
        )
        const sum = difference.reduce((p,c) => p + c);
        return Math.floor(Math.sqrt(sum) * 10000) / 10000;
    }

    static change_Conut_To_Percent(numberArr: number[]){
        const sum = numberArr.reduce((p,c) => p + c);
        return numberArr.map((e,i)=> Math.floor( (e / sum) * 10000)/100);  
    }

    static indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    }
}
