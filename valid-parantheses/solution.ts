function isValid(s: string): boolean {
    if (s.length <= 1) return false;
    let next: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (openings.includes(s[i])) {
            next.push(counterparts[s[i]]);
        } else if(s[i] === next[next.length - 1]) {
            next.splice(next.length - 1, 1);
        } else {
            return false;
        }
    }
    return next.length === 0;
};

let openings: string[] = ['(', '[', '{'];
let counterparts = {
    '(': ')',
    '[': ']',
    '{': '}'
}