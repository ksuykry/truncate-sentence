var truncateSentence = function(s, k) {
    let split = s.split(" ");
    let trunc = split.splice(0, k);
    return trunc.join(" ");
};
