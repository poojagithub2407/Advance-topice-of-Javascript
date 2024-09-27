function createCounter() {
     let count = 0;
     return {
          increament: function () {
               count++;
               console.log(count);
          },

          getCount: function () {
               return count;
          }
     }
}

const counter = createCounter();
counter.increament();
counter.increament();
console.log(counter.getCount());
