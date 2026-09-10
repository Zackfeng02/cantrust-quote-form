const test = require("node:test");
const assert = require("node:assert/strict");
const conversation = require("../conversation.js");

test("conversation bank covers six themes evenly with bilingual prompts", () => {
  assert.equal(conversation.CARDS.length, 36);
  assert.deepEqual(Object.keys(conversation.CATEGORIES), [
    "family", "self", "imagination", "thinking", "friendship", "feelings"
  ]);

  for (const category of Object.keys(conversation.CATEGORIES)) {
    assert.equal(conversation.CARDS.filter(card => card.category === category).length, 6);
  }

  for (const card of conversation.CARDS) {
    assert.ok(card.id);
    for (const field of ["z", "e", "a4z", "a4e", "a7z", "a7e", "tz", "te"]) {
      assert.equal(typeof card[field], "string");
      assert.ok(card[field].length > 4, `${card.id} is missing ${field}`);
    }
  }
});

test("a themed deck contains every card once before reshuffling", () => {
  const deck = conversation.buildDeck("feelings", null, () => 0.42);
  assert.equal(deck.length, 6);
  assert.equal(new Set(deck.map(card => card.id)).size, 6);
  assert.ok(deck.every(card => card.category === "feelings"));
});

test("a fresh deck avoids immediately repeating the previous card", () => {
  const firstDeck = conversation.buildDeck("family", null, () => 0);
  const repeatedCandidate = firstDeck[0].id;
  const nextDeck = conversation.buildDeck("family", repeatedCandidate, () => 0);
  assert.notEqual(nextDeck[0].id, repeatedCandidate);
});
