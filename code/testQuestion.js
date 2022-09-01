const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "最终失败");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "很快失败");
});

Promise.any([pErr, pSlow, pFast])
  .then((value) => {
    console.log(value);  //
  }).catch((err) => {
    console.log(err);  //[AggregateError: All promises were rejected]
});