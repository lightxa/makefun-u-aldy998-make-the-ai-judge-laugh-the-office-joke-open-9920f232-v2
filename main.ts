// Make the AI Judge Laugh: The Office Joke Open — variant 2.
//
// One line of office comedy, written to /output/entry.txt.
// The joke: a dead office plant is "replaced" by facilities with a
// laminated photo of one, complete with a watering schedule. Deadpan,
// one concrete incident, one absurd image, punchline in the last words.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "Our office plant died, so facilities replaced it with a laminated photo of one, complete with a watering schedule.";

const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
