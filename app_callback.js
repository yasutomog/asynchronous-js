function add1000(n) {
  setTimeout(() => {
    console.log(n + 1000);
  }, 2000);
}

function add100(n) {
  setTimeout(() => {
    console.log(n + 100);
    add1000(n + 100)
  }, 2000);
}

function add10(n) {
  setTimeout(() => {
    console.log(n + 10);
    add100(n + 10);
  }, 2000);
}

function proc(n) {
  console.log(n);
  add10(n);
}

proc(1);
