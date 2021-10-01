import { Module } from '@nestjs/common';
import { RouteService } from './route.service';
import { RouteResolver } from './route.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Route } from './entitis/route.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Route])],
  controllers: [],
  providers: [RouteService, RouteResolver]
})
export class RouteModule {
    
}
