

   
        function reverseWordsInSentence(sentence) {
            const words = sentence.split(' ');
            const reversedWords = words.map(word => {
                return word.split('').reverse().join('');
            });
            const reversedSentence = reversedWords.join(' ');
            return reversedSentence;
        }

        function reverseAndDisplay() {
            const inputSentence = document.getElementById('sentenceInput').value;
            const reversedSentence = reverseWordsInSentence(inputSentence);
            document.getElementById('reversedOutput').textContent = reversedSentence;
        }
   
