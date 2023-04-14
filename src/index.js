function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello I am inside setttimeout");
    }, 1000);
  });
}

delay(5000).then((res) => console.log(res));
