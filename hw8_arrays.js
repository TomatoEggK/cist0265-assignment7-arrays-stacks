// hw8_arrays.js
// CIST 0265 — Week 8 Homework: Arrays

// ════════════════════════════════════════════
// EXERCISE 1 — Temperature Analysis  (15 pts)
// ════════════════════════════════════════════
// A week of recorded high temperatures (°F).
const weeklyTemps = [72, 68, 75, 80, 65, 90, 55];

// TODO 1a: Use reduce() to calculate the average temperature.
function averageTemp(temps) {
    // reduce: Combine the array into a single value
    const sum = temps.reduce((acc, cur) => {
        return acc + cur; // acc is the cumulative value, cur is the current temperature.
    }, 0); // 0 is the initial acc

    const avg = sum / temps.length; // Average value = Sum / Number

    // Round to 2 decimal places.
    // toFixed returns a string, Number() converts to a number.
    return Number(avg.toFixed(2));
}

// TODO 1b: Use filter() to return only days above 70°F.
function hotDays(temps, threshold = 70) {
    // filter: Return a new array only contained elements that meet the condition.
    return temps.filter((t) => t > threshold);
}

// TODO 1c: Use map() to convert all temps from °F to °C.
// Formula: C = (F - 32) * 5/9  (round to 1 decimal place)
function toCelsius(temps) {
    // map: Transform each item to a new value and return a new array
    return temps.map((f) => {
        const c = (f - 32) * 5 / 9;          // °F to °C
        return Number(c.toFixed(1));         // Round to 1 decimal
    });
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
    // not allowed to mutate, so make a copy 
    const copy = arr.slice();

    // localeCompare: A more accurate comparison
    copy.sort((a, b) => a.name.localeCompare(b.name));

    return copy;
}

// TODO 2b: Return only CS students with grade >= 90, sorted
// by grade descending. Use chained filter() + sort().
function topCSStudents(arr) {
    return arr
    .filter(function (student) {
      return student.major === "CS" && student.grade >= 90;
    })
    .sort(function (a, b) {
      return b.grade - a.grade; // 降序：高分在前
    });
}

// TODO 2c: Build a grade report using reduce().
// Return: { highest: ..., lowest: ..., average: ... }
function gradeReport(arr) {
    var result = arr.reduce(function (acc, student) {
        // Update the highest score
        if (student.grade > acc.highest) {
        acc.highest = student.grade;
        }
        // Update the lowest score
        if (student.grade < acc.lowest) {
        acc.lowest = student.grade;
        }
        // Cumulative total score used to calculate average
        acc.sum += student.grade;
        return acc;
    }, {
        highest: -1,
        lowest: 10000,
        sum: 0
    });

    // average
    var average = result.sum / arr.length;
    // Return: { highest: ..., lowest: ..., average: ... }
    return {
        highest: result.highest,
        lowest: result.lowest,
        average: average
    };
}

// ════════════════════════════════════════════
// EXERCISE 3 — BONUS: Two-Pointer Problems  (15 pts)
// ════════════════════════════════════════════
// Two classic two-pointer techniques on flat arrays.
// moveZeroes([0,1,0,3,12]) → [1,3,12,0,0]  (in-place, stable)

// TODO 3a: moveZeroes(arr) — move all 0s to the end in-place.
// Non-zero order must be preserved. Do not use filter().
function moveZeroes(arr) {
    // write is the position to put a non zero value
    var write = 0;

    // put all non zero values to the front of the array
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[write] = arr[i];
            write++;
        }
    }
    // fill with 0 in the last positions
    for (var j = write; j < arr.length; j++) {
        arr[j] = 0;
    }
}

// TODO 3b: twoSum(arr, target) — return indices [i, j] where
// arr[i] + arr[j] === target. Array is sorted ascending.
// Return null if no pair exists. O(n) time, O(1) space.
function twoSum(arr, target) {
    var left = 0;
    var right = arr.length - 1;

    // 'left' moves to the right and 'right' moves to the left
    while (left < right) {
        var sum = arr[left] + arr[right];

        if (sum == target) {
            return [left, right]; // answer
        } 
        else if (sum < target) {
        // sum needs to be larger so 'left' moves to the right
            left++;
        } 
        else {
            // sum needs to be smaller so 'right' moves to the left
            right--;
        }
    }
    // not found
    return null;
}

module.exports = { averageTemp, hotDays, toCelsius, sortByName, topCSStudents, gradeReport, moveZeroes, twoSum };