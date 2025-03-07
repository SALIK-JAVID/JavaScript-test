function decipher(encryptedText, knownWord) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    for (let shift = 0; shift < 26; shift++) {
        let decryptedText = encryptedText.split('').map(char => {
            let index = alphabet.indexOf(char);
            if (index === -1) return char; // Keep non-alphabetic characters as they are
            let newIndex = (index - shift + 26) % 26; // Shift character back
            return alphabet[index < 26 ? newIndex : newIndex + 26];
        }).join('');
        
        if (decryptedText.includes(knownWord)) {
            return decryptedText;
        }
    }
    
    return "No valid decryption found.";
}

// Example usage:
let encryptedText = "Uifsf jt b tfdsfu dpef";
let knownWord = "secret";
console.log(decipher(encryptedText, knownWord));
