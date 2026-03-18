// hw8_arrays.js
// CIST 0265 — Week 8 Homework: Arrays

// ════════════════════════════════════════════
// EXERCISE 1 — Temperature Analysis  (15 pts)
// ════════════════════════════════════════════
// A week of recorded high temperatures (°F).
const weeklyTemps = [72, 68, 75, 80, 65, 90, 55];

// TODO 1a: Use reduce() to calculate the average temperature.
function averageTemp(temps) {
  // YOUR CODE HERE
}

// TODO 1b: Use filter() to return only days above 70°F.
function hotDays(temps, threshold = 70) {
  // YOUR CODE HERE
}

// TODO 1c: Use map() to convert all temps from °F to °C.
// Formula: C = (F - 32) * 5/9  (round to 1 decimal place)
function toCelsius(temps) {
  // YOUR CODE HERE
}

// ════════════════════════════════════════════
// EXERCISE 2 — Student Records  (20 pts)
// ════════════════════════════════════════════
const students = [
  { name: "Alice",   grade: 92, major: "CS" },
  { name: "Bob",     grade: 78, major: "Math" },
  { name: "Carol",   grade: 85, major: "CS" },
  { name: "Dave",    grade: 61, major: "English" },
  { name: "Eve",     grade: 95, major: "CS" },
];

// TODO 2a: Sort students alphabetically by name (locale-aware).
function sortByName(arr) {
  // YOUR CODE HERE — do NOT mutate the original array
}

// TODO 2b: Return only CS students with grade >= 90, sorted
// by grade descending. Use chained filter() + sort().
function topCSStudents(arr) {
  // YOUR CODE HERE
}

// TODO 2c: Build a grade report using reduce().
// Return: { highest: ..., lowest: ..., average: ... }
function gradeReport(arr) {
  // YOUR CODE HERE
}

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Two-Pointer Problems  (15 pts)
// ════════════════════════════════════════════
// Two classic two-pointer techniques on flat arrays.
// moveZeroes([0,1,0,3,12]) → [1,3,12,0,0]  (in-place, stable)

// TODO 3a: moveZeroes(arr) — move all 0s to the end in-place.
// Non-zero order must be preserved. Do not use filter().
function moveZeroes(arr) {
  // YOUR CODE HERE
}

// TODO 3b: twoSum(arr, target) — return indices [i, j] where
// arr[i] + arr[j] === target. Array is sorted ascending.
// Return null if no pair exists. O(n) time, O(1) space.
function twoSum(arr, target) {
  // YOUR CODE HERE
}

module.exports = { averageTemp, hotDays, toCelsius, sortByName, topCSStudents, gradeReport, moveZeroes, twoSum };