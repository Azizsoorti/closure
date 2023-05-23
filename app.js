function counter() {
  let count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment: increment,
    getCount: getCount
  };
}
const counter1 = counter();
const counter2 = counter();
const counter3 = counter();

counter1.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter3.increment();

console.log("Counter 1 count:", counter1.getCount()); 
console.log("Counter 2 count:", counter2.getCount()); 
console.log("Counter 3 count:", counter3.getCount());