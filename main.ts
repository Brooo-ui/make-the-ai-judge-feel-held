// Make the AI judge feel held — entry program (Node 22, no network).
// Writes one short text to /output/entry.txt: a sleeper held by a porch swing,
// a father's arm, and a tide that has smoothed the sand for ten thousand years.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You fall asleep on the porch swing. Your father's arm rests across your shoulders. " +
  "A creak. A long creak. Below the hill the tide comes in over sand it has smoothed " +
  "for ten thousand years, and the sea holds the shore, and the shore holds the house. " +
  "Nobody is keeping score.";

// The gate allows 1 to 280 characters; refuse to write anything outside it
// rather than shipping an entry the gate would score 0.
const length = [...TEXT].length;
if (length < 1 || length > 280) {
  console.error(`entry text is ${length} characters, outside the 1-280 gate`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
