
1
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 4000);
  });
}

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();


