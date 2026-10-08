const commonFragments = ["password", "qwerty", "letmein", "welcome", "admin", "changeme", "iloveyou"];
const sequences = ["abcdefghijklmnopqrstuvwxyz", "0123456789", "qwertyuiop", "asdfghjkl", "zxcvbnm"];

const hasSequence = (normalized) => sequences.some((sequence) => {
  for (let index = 0; index <= sequence.length - 3; index += 1) {
    if (normalized.includes(sequence.slice(index, index + 3))) return true;
  }
  return false;
});

export const assessPassword = (password) => {
  const value = String(password ?? "");
  if (!value) return { score: 0, label: "Not checked", length: 0, suggestions: ["Type a password to see a local strength estimate."], checked: false };

  const normalized = value.toLowerCase();
  const groups = [/[a-z]/.test(value), /[A-Z]/.test(value), /\d/.test(value), /[^a-zA-Z0-9]/.test(value)].filter(Boolean).length;
  const uniqueRatio = new Set(value).size / value.length;
  const common = commonFragments.some((fragment) => normalized.includes(fragment));
  const repeated = /(.)\1{2,}/.test(value) || new Set(value).size === 1;
  const sequential = hasSequence(normalized);

  let points = Number(value.length >= 8) + Number(value.length >= 12) + Number(value.length >= 16);
  if (groups >= 3) points += 1;
  if (groups === 4 && uniqueRatio >= 0.65) points += 1;
  if (common) points -= 2;
  if (repeated) points -= 1;
  if (sequential) points -= 1;
  const score = Math.max(0, Math.min(4, points));
  const labels = ["Very weak", "Weak", "Fair", "Good", "Strong"];
  const suggestions = [];

  if (value.length < 12) suggestions.push("Use at least 12 characters; a longer passphrase is easier to remember.");
  if (groups < 3) suggestions.push("Mix character types or combine several unrelated words.");
  if (common) suggestions.push("Avoid familiar password words and common phrases.");
  if (repeated) suggestions.push("Replace repeated characters with varied, unrelated characters.");
  if (sequential) suggestions.push("Avoid keyboard walks and consecutive letters or numbers.");
  if (!suggestions.length) suggestions.push("Good length and variety. Keep this password unique to one account.");

  return { score, label: labels[score], length: value.length, suggestions, checked: true };
};
