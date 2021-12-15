const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Something Async");
        }, 2000)
      : reject(new Error("Upsss"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before");
doSomething();
console.log("After");

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before1");
anotherFunction();
console.log("After1");
