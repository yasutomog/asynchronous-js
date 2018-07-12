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

function proc(n) {
  console.log(n);
  add10(n).then((r) => {
    console.log(r);
    return add100(r);
  }).then((r) => {
    console.log(r);
    return add1000(r);
  }).then((r) => {
    console.log(r);
  });
}

proc(1);
