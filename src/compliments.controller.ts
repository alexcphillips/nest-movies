import { Controller, Get, Param } from '@nestjs/common';
import { ComplimentsService } from './compliments.service';

@Controller('compliments')
class ComplimentsController {
  constructor(private complimentsService: ComplimentsService) {}

  @Get(':name')
  randomComplimentByName(@Param('name') name: string): string {
    const result = this.complimentsService.getRandomCompliment(name);
    return `${result.to}, ${result.text}`;
  }
}

export default ComplimentsController;
