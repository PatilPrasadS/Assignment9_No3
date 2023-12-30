import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string {
    var result : string = "";
    var isPrime : boolean = true;
    if(param == "Prime") {
      if(value <= 1) {
        result = "It is not Prime number";        
      } else {
        for(var i=2; i <= value/2; i++) {
          if(value % i == 0) {
            result = "It is not Prime number";
            isPrime = false;
            break;
          }
        }
        if(isPrime) {
          result = "It is Prime number";
        }
      }
    } else if(param == "Perfect") {
      var sum : number = 0;
      for(var i=0; i <= value/2; i++) {
        if(value % i == 0) {
          sum = sum + i;
        }
      }
      if(value == sum) {
        result = "It is Perfect number";
      } else {
        result = "It is not Perfect number";
      }
    } else if(param == "Even") {
      if(value % 2 == 0) {
        result = "It is Even number";
      } else {
        result = "It is not Even number";
      }
    } else if(param == "Odd") {
      if(value % 2 == 0) {
        result = "It is not Odd number";
      } else {
        result = "It is Odd number";
      }
    }
    return result;
  }

}
