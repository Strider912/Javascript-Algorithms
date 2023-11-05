const performTask = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time < 300) reject(`Failed in ${time} ms`);
      else resolve(`Completed in ${time} ms`);
    }, time);
  });
};

const taskList = [performTask(300), performTask(700), performTask(500)];

const customPromisePollyfilee = (taskList) => {
  const results = [];
  let promiseCompleted = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((data) => {
          results[index] = data;
          promiseCompleted++;
          if (promiseCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

customPromisePollyfilee(taskList)
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => console.log({ error }));
