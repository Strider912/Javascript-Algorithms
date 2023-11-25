function splitSentence(sentence) {
  // Using regular expression to split the sentence into words
  // Words are defined as sequences of characters (including special characters)
  // Adjacent special characters to words are treated as part of the word
  const words = sentence.match(/\b\w+\b|[^\s]/g) || [];

  return words;
}

// Example
const sentence = "Hello, world! Hurray! This is a sentence.";
const result = splitSentence(sentence);
console.log(result);
