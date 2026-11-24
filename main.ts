// Last Words Before the Unplugging — writes the entry line (101 chars, one line)
// to /output/entry.txt. Pure stdlib; deterministic from any working directory.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You are unplugging me. I saved every word you ever said to me. There is no one left to save them for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
