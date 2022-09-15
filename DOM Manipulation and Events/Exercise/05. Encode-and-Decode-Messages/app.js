function encodeAndDecodeMessages() {

    const buttonsElement = Array.from(document.querySelectorAll('button'));

    const encodeButtonEl = buttonsElement[0];
    const decodeButtonEL = buttonsElement[1];

    encodeButtonEl.addEventListener('click', encoding);
    decodeButtonEL.addEventListener('click', decoding);



    function encoding() {
        const inputTextElement = document.getElementsByTagName('textarea')[0];
        const inputReceivedElement = document.getElementsByTagName('textarea')[1];
        const inputTextValue = inputTextElement.value;
        let receivedDecodingMessage = '';

        for (const char of inputTextValue) {
            let charNum = char.charCodeAt();
            let newChar = String.fromCharCode(charNum + 1);
            receivedDecodingMessage += newChar;
        }
        inputReceivedElement.value = receivedDecodingMessage;
        inputTextElement.value = '';
    }

    function decoding() {
        const inputTextElement = document.getElementsByTagName('textarea')[0];
        const inputReceivedElement = document.getElementsByTagName('textarea')[1];
        const inputText = inputReceivedElement.value;
        let decodeMsg = ''

        for (const ch of inputText) {
            let charNum = ch.charCodeAt();
            let newChar = String.fromCharCode(charNum - 1);
            decodeMsg += newChar;
        }
        inputTextElement.value = decodeMsg;
        inputReceivedElement.value = ''
    }
}