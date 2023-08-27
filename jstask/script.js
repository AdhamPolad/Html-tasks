let setOfRequests = ["hello world", "madam", "racecar", "redder", "madam"];

function isPalindrome(string) {
    let reversedString = "";

    for (let index = string.length - 1; index >= 0; index--) {
        const element = string[index];
        reversedString += element;
    }

    return string === reversedString;
}

for (let index = 0; index < setOfRequests.length; index++) {
    const elementInSetOfRequests = setOfRequests[index];
    console.log(
        `${elementInSetOfRequests} isPalindrome ` +
        isPalindrome(elementInSetOfRequests)
    );
}


