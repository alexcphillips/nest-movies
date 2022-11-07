import { Module } from '@nestjs/common';
import ComplimentsController from './compliments.controller';
import { ComplimentsService } from './compliments.service';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ComplimentsController],
  providers: [ComplimentsService],
})
export class AppModule {}
