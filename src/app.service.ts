import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCookie(user: string): string {
    const listFortunePhrases: string[] = [
      'El éxito llegará cuando menos lo esperes.',
      'Un pequeño cambio puede llevar a grandes resultados.',
      'La perseverancia es la clave del éxito.',
      'Tu creatividad te llevará lejos en la vida.',
      'Hoy es un buen día para tomar nuevas decisiones.',
      'La paciencia es una virtud que será recompensada.',
      'No temas arriesgarte; las mejores oportunidades están fuera de tu zona de confort.',
      'Un viaje de mil millas comienza con un solo paso.',
      'El mejor predictor del futuro es el presente.',
      'Confía en tu intuición; es más sabia de lo que crees.',
    ];
    const fortuneNumber = Math.floor(Math.random() * listFortunePhrases.length);
    return `${user}, ${listFortunePhrases[fortuneNumber]}`;
  }
}
