const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const buttonSubmit = document.querySelector('button[type="submit"]');

buttonSubmit.addEventListener("click", onButtonSubmit);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  // const shouldResolve = Math.random() > 0.3;
  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
  return promise;
}

// function onButtonSubmit(evt) {
//   evt.preventDefault();

//   const numDelay = Number(delay.value);
//   const numStep = Number(step.value);
//   const numAmount = Number(amount.value);
//   for (let position = 0; position <= numAmount; position += 1) {
//     createPromise(position, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
//     numDelay += numStep;
//   }
//   // numDelay += numStep;
// }
function onButtonSubmit(evt) {
  evt.preventDefault();

  let numDelay = Number(delay.value);
  let numStep = Number(step.value);
  let numAmount = Number(amount.value);

  for (let i = 0; i < amount.value; i += 1) {
    createPromise(1 + i, numDelay + i * numStep)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    numDelay += numStep;
  }
  // numDelay += numStep;
}
