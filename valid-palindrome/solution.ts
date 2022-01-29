function isPalindrome(s: string): boolean {
    s = removeNonAplhanumeric(s);
    if (s.length === 0) return true;
    for (let i = 0; i < s.length; i++) if (s[i] !== s[s.length - i - 1]) return false;
    return true;
};

function removeNonAplhanumeric(s: string): string {
    let regex = new RegExp(/[.,?!;``-\s:@\"#_{}()\]\[']/g)
    s = s.replace(regex, "");
    return s.toLowerCase();
}
