function add1000(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n + 1000);
    }, 2000);
  });
}

function add100(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n + 100);
    }, 2000);
  });
}

function add10(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n + 10);
    }, 2000);
  });
}

async function proc(n) {
  console.log(n);
  n = await add10(n);
  console.log(n);
  n = await add100(n);
  console.log(n);
  n = await add1000(n);
  console.log(n);
}

proc(1);
