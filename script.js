function indexOfIgnoreCase(s1, s2) {
  // Edge case: empty substring always found at index 0
    if (s2.length === 0) return 0;
    if (s1.length === 0) return -1;

    const lowerStr = s1.toLowerCase();
    const lowerSub = s2.toLowerCase();

    return lowerStr.indexOf(lowerSub);
  
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
