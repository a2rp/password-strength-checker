import assert from "node:assert/strict";
import test from "node:test";
import { assessPassword } from "./passwordStrength.js";

test("returns an empty state without echoing a password", () => {
  assert.deepEqual(assessPassword(""), { score: 0, label: "Not checked", length: 0, suggestions: ["Type a password to see a local strength estimate."], checked: false });
  assert.equal(assessPassword(null).checked, false);
});

test("rewards length and character variety while clamping the scale", () => {
  const result = assessPassword("orbit!Linen-copper-47");
  assert.equal(result.score, 4);
  assert.equal(result.label, "Strong");
  assert.equal(result.length, 21);
  assert.equal(assessPassword("x".repeat(80)).score <= 4, true);
});

test("flags common fragments, repetition, short values, and sequences", () => {
  const weak = assessPassword("password123");
  assert.equal(weak.score, 0);
  assert.ok(weak.suggestions.some((item) => item.includes("familiar password words")));
  assert.ok(assessPassword("aaaAAA111!!!").suggestions.some((item) => item.includes("repeated characters")));
  assert.ok(assessPassword("Abcdefg12345!").suggestions.some((item) => item.includes("keyboard walks")));
});
