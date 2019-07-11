function test_indefinite_article() {
  const test_words = ["", "a", "g", "x", "user", "hour", "year", "Testing", "Otter", "Moose", "Bacon fillet", "Historic event", "Honorable Mention", "U.S. Currency", "Unified Front"];
  const matches = ["an", "an", "a", "an", "a", "an", "a", "a", "an", "a", "a", "a", "an", "a", "a"];
  
  for (var i in test_words) {
    var w = test_words[i];
    var ia = indefiniteArticle.letter(w);
    if (ia != matches[i]) {
      return "FAIL: Word: " + w + " doesn't match! '"+ matches[i] + "' != '" + ia + "'";
    }
  }
  
  return "Test Passes!";
}

function test_indefinite_article_word() {
  const test_words = ["", "a", "g", "x", "user", "hour", "year", "Testing", "Otter", "Moose", "Bacon fillet", "Historic event", "Honorable Mention", "U.S. Currency", "Unified Front", 'a beer', 'an apple'];
  const matches = ["an", "an", "a", "an", "a", "an", "a", "a", "an", "a", "a", "a", "an", "a", "a", '', ''];
  const results = matches.map((m, i) => test_words[i] ? `${m} ${test_words[i]}`.trim() : '');
  
  for (var i in test_words) {
    var w = test_words[i];
    var ia = indefiniteArticle.word(w);
    if (ia != results[i]) {
      return "FAIL: Word: " + w + " doesn't match! '"+ results[i] + "' != '" + ia + "'";
    }
  }
  
  return "Test Passes!";
}
