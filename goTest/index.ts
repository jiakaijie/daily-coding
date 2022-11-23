// const fd11231 = (cb: (e: Event) => void, time: number): ((e: Event) => void) => {
//   let timer: NodeJS.Timeout | null = null;
//   return function (e) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       cb.call(this, e);
//     }, time);
//   }
// }

// interface JL {
//   (cb: (e: Event) => void, time: number): (e: Event) => void;
// }

// const jl123: JL = (cb, time) => {
//   let timer: NodeJS.Timeout | null = null;
//   return function (e) {
//     if (timer) {
//       clearTimeout(timer)
//     }
    
//     timer = setTimeout(() => {
//       cb.call(this, e);
//     }, time)
//   }
// }