<script>
  const texts = [
    "Frontend Development",
    "Web Development",
    "Entry Data Process",
    "Data Visualization"
  ];
  
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  const typingElement = document.querySelector(".typing-text");

  function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;
    if (letter.length === currentText.length) {
      setTimeout(erase, 2000);
    } else {
      setTimeout(type, 100);
    }
  }

  function erase() {
    letter = currentText.slice(0, --index);
    typingElement.textContent = letter;
    if (letter.length === 0) {
      count++;
      index = 0;
      setTimeout(type, 500);
    } else {
      setTimeout(erase, 50);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    type();
  });
</script>
