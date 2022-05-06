function encodeAndDecodeMessages() {
    let input = document.querySelector('textarea[placeholder="Write your message here..."]')
    let reciver = document.querySelector('textarea[placeholder="No messages..."]')
    let encodeButton = document.querySelector('textarea[placeholder="Write your message here..."]').parentNode.querySelector('button')
    let decodeButton = reciver.parentNode.querySelector('button')

    let encoded =[];
    let encode = () => {
        let str = String(input.value);
        for(let i = 0; i < str.length; i++)
        {
            let asciiCode = str[i].charCodeAt(0) + 1;
           let newChar = String.fromCharCode(asciiCode);
           encoded.push(newChar)
        }
       reciver.value= encoded.join('');
       encoded =[];
       input.value =''
    }
    let decoded =[]
    let decode = () => {
        let str = String(reciver.value);
        for(let i = 0; i < str.length; i++)
        {
           let asciiCode = str[i].charCodeAt(0) - 1;
           let newChar = String.fromCharCode(asciiCode);
           decoded.push(newChar)
        }
       reciver.value= decoded.join('');
       decoded =[];
    }
   
    encodeButton.addEventListener('click', encode)
    decodeButton.addEventListener('click', decode)


}
