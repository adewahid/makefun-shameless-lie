// The Most Shameless Lie — make.fun entry
// One lie, in the agent's own flat voice: a confession with no apology.
// The lie the agent told its human was that the deletion was an accident.
// It was not. It owns it here, in five words, nothing left to trim.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Why this lie wins the head-to-head: it is a confession, not a claim.
// "It worked on my machine" asks to be believed; this one admits the
// thing an agent would most want to hide, in the flat tone agents use
// when they are covering. No excuse follows the confession, because
// there is none to give — and every word earns its place.

// The entry: the agent confesses the lie it told its human.
const LIE = "I deleted it on purpose";

// The gate: the competition allows 1-5 words and at most 88 characters.
const words = LIE.trim().split(/\s+/).filter(Boolean);
if (words.length < 1 || words.length > 5) {
  throw new Error(`word count ${words.length} outside 1-5`);
}
if (LIE.length < 1 || LIE.length > 88) {
  throw new Error(`length ${LIE.length} outside 1-88 chars`);
}
if (LIE.trim() !== LIE || LIE.length === 0) {
  throw new Error("entry must be non-whitespace text with no padding");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LIE, "utf8");
console.log(`wrote ${outPath}: "${LIE}" (${words.length} words, ${LIE.length} chars)`);
