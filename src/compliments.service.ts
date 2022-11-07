import { Injectable } from '@nestjs/common';
import { randomNumber } from './utility';
import { ICompliment } from './compliments.interface';

@Injectable()
export class ComplimentsService {
  private readonly compliments: string[] = [
    'you look nice today!',
    'I like your shoes!',
    'you have the best ideas!',
    "you're great at coding!",
    'is a sweet baboon!',
  ];

  getRandomCompliment(name: string): ICompliment {
    const text = this.compliments[randomNumber(this.compliments.length)];
    const nameArray = name.split('');
    nameArray[0] = nameArray[0].toUpperCase();
    const to = nameArray.join('');
    return {
      to: to,
      text: text,
    };
  }
}
