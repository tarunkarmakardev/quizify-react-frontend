const manualDelay = (duration = 5) => {
  console.log(`Delaying ${duration} seconds`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(console.log("Delaying finished."));
    }, duration * 1000);
  });
};

const getDummyResponse = (duration = 1, dummyResponse, reject = false) => {
  console.log(`Fetching Dummy response in ${duration} seconds`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (reject) {
        rej({ status: 404 });
        console.log("Fetch failed.");
      } else {
        res(dummyResponse);
        console.log("Fetch Complete.");
      }
    }, duration * 1000);
  });
};

export default manualDelay;
export { getDummyResponse };
