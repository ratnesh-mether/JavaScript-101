let str = "A man, a plan, a canal, Panama!";
// To remove special chars and white spaces from the string
const cleanedStr = str.replace(/[^\w]/g, "");
/* console.log(cleanedStr)
 */
function checkPalindrom(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}

console.log(checkPalindrom(cleanedStr));
