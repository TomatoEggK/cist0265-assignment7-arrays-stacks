// hw8_stacks.js
// CIST 0265 — Week 8 Homework: Stacks

// ─── Provided Stack Class (do not modify) ──────────────
class Stack {
  #items = [];
  push(item)   { this.#items.push(item); }
  pop()        { return this.#items.pop(); }
  peek()       { return this.#items[this.#items.length - 1]; }
  isEmpty()    { return this.#items.length === 0; }
  get size()   { return this.#items.length; }
  clear()      { this.#items = []; }
  toString()   { return [...this.#items].reverse().join(' | '); }
}

// ════════════════════════════════════════════
// EXERCISE 4 — Multi-Base Converter  (15 pts)
// ════════════════════════════════════════════
// Extend the decimal→binary idea from the slides.
// TODO: convert a decimal number to any base (2–16).
const DIGITS = "0123456789ABCDEF";

function baseConverter(decimal, base) {
    const stack = new Stack();

    // Handle the edge case where decimal is 0 by returning "0".
    if (decimal == 0) {
        return "0";
    }

    // must work for any base from 2 to 16
    if (base < 2 || base > 16) {
        throw new Error("Base must work for any base from 2 to 16");
    }

    while (decimal > 0) {
        // remainder is the next digit
        const remainder = decimal % base;
        // Push it to the stack
        stack.push(remainder);
        // Remove the last digit by dividing
        decimal = parseInt(decimal / base);
    }

    let result = "";
    // Pop until the stack is empty
    while (!stack.isEmpty()) {
        // gives digits in the correct order
        const r = stack.pop();
        // Convert using DIGITS
        result += DIGITS[r];
    }
    return result;
}

// ════════════════════════════════════════════
// EXERCISE 5 — Balanced Symbols Checker  (20 pts)
// ════════════════════════════════════════════
// Extend the parentheses example from the slides.
// Also handle [], {} — and skip non-bracket characters.
// TODO: return true if all symbols are balanced, false otherwise.
function isBalanced(str) {
    const stack = new Stack();

    // Loop through every character
    for (let i = 0; i < str.length; i++) {
        const c = str[i];

        // if see opening brackets, then push
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        }

        // if see closing brackets, then pop and check
        else if (c === ")" || c === "]" || c === "}") {
            // If nothing to match, it's wrong
            if (stack.isEmpty()) {
                return false;
            }
            // last opening bracket
            const top = stack.pop(); 
            // Check matching type
            if (c === ")" && top !== "(") return false;
            if (c === "]" && top !== "[") return false;
            if (c === "}" && top !== "{") return false;
        }
        // If stack is empty, all matched
        return stack.isEmpty();
    }
}

// ════════════════════════════════════════════
// EXERCISE 6 — BONUS: Browser History  (15 pts)
// ════════════════════════════════════════════
// Use two stacks to simulate Back / Forward navigation.
class BrowserHistory {
    #back    = new Stack(); // pages you can go back to
    #forward = new Stack(); // pages you can go forward to
    #current = null;        // page currently displayed

    // TODO: visit(url) — push current to #back, clear #forward, set #current.
    visit(url) { 
        // If we already have a current page, it becomes "back history"
        if (this.#current !== null) {
            this.#back.push(this.#current);
        }
        // Visiting a new page clears the forward history
        this.#forward.clear();
        // Set new current page
        this.#current = url;
    }

    // TODO: back() — push #current to #forward, pop #back to #current.
    back()    { 
        // Error if no url to go back
        if (this.#back.isEmpty()) {
            return "Can not go back";
        }
        // Move current to forward stack
        this.#forward.push(this.#current);
        // Pop last page from back stack to become current
        this.#current = this.#back.pop();

        return this.#current ?? "No history"; 
    }

    // TODO: forward() — mirror of back().
    forward() { 
        // Error if no url to go forward
        if (this.#forward.isEmpty()) {
            return "No forward history";
        }
        // Move current to back stack
        this.#back.push(this.#current);
        // Pop next page from forward stack to become current
        this.#current = this.#forward.pop();

        return this.#current ?? "No forward history"; 
    }

    current() { return this.#current; }
}

module.exports = { baseConverter, isBalanced, BrowserHistory };