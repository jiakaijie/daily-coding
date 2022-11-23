// class Single {
//   private static single1: Single;
//   public static getSingle(): Single {
//     if (this.single1 === null) {
//       this.single1 = new Single();
//     }
//     return this.single1;
//   }
// }


// class Observer {
//   a: Map<string, () => void>
//   eventObj: {
//     [key: string]: Array<(...rest: Array<any>) => void>
//   } = {};

//   $on(evnetName: string, callBack: () => void) {
//     this.a = new Map('123', () => {
//       console.log(123);
//     })
//     if (this.eventObj[evnetName]) {
//       this.eventObj[evnetName].push(callBack);
//     } else {
//       this.eventObj[evnetName] = [callBack];
//     }
//   }

//   $emit(evnetName: string, ...rest) {
//     if (!this.eventObj[evnetName]) {
//       return;
//     } else {
//       this.eventObj[evnetName].forEach(item => {
//         item(...rest);
//       })
//     }
//   }

//   $off(evnetName: string) {
//     if (!this.eventObj[evnetName]) {
//       return;
//     } else {
//       delete this.eventObj[evnetName];
//     }
//   }
// }