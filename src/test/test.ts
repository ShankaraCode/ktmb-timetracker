import { getNextTrain } from "../utils/scheduleHelpers";

/**
 * Test to find the next available train based on the from and to stations.
 */
function runGetNextTrainTests() {
  const req = {
    from: "KLSentral",  // String input
    to: "Kajang",       // String input
    date: "2023-10-16T06:00:00+08:00",
  };

  // Directly call the getNextTrain function with the string inputs
  const nextTrain = getNextTrain(req);

  console.log(
    `Test: Find next train from ${req.from} to ${req.to} at 06:00 on a weekday`
  );
  console.log(nextTrain);
}

// runTests();
runGetNextTrainTests();
