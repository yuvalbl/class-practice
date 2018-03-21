let btnPressed;

const btnTabEncrypt = document.querySelector("#btnNavEncr");
const btnTabDecrypt = document.querySelector("#btnNavDecr");
const frmEncrypt = document.querySelector("#encrypt");
const frmDecrypt = document.querySelector("#decrypt");
const btnEncrypt = document.querySelector("#encrypt .btnCode");
const btnDecrypt = document.querySelector("#decrypt .btnCode");

btnTabEncrypt.addEventListener("click",btnTabEncryptClick);
btnTabDecrypt.addEventListener("click",btnTabDecryptClick);
btnEncrypt.addEventListener("click",btnEncryptClick);
btnDecrypt.addEventListener("click",btnDecryptClick);

function Init(){
    btnTabEncrypt.classList.add('selected');
    btnPressed ="Encrypt";
    frmEncrypt.classList.add('displayFlex');
    frmDecrypt.classList.remove('displayFlex');
    frmDecrypt.classList.add('visiblity');
}

function btnTabEncryptClick(){
    if (btnPressed ==="Encrypt"){
        return;
    }
    btnTabEncrypt.classList.toggle('selected');
    btnTabDecrypt.classList.toggle('selected');
    frmEncrypt.classList.toggle('visiblity');
    frmDecrypt.classList.toggle('visiblity');
    frmEncrypt.classList.toggle('displayFlex');
    frmDecrypt.classList.toggle('displayFlex');
    btnPressed ="Encrypt";
}

function btnTabDecryptClick(){
    if (btnPressed ==="Decrypt"){
        return;
    }
    btnTabDecrypt.classList.toggle('selected');
    btnTabEncrypt.classList.toggle('selected');
    frmEncrypt.classList.toggle('visiblity');
    frmDecrypt.classList.toggle('visiblity');
    frmEncrypt.classList.toggle('displayFlex');
    frmDecrypt.classList.toggle('displayFlex');
    btnPressed ="Decrypt";
}
function convertTextToCode(key,text){
    let code="";
    for (let i=0;i<text.length;i++){
        let num = text.charCodeAt(i)+key;
        let char = String.fromCharCode(num);
        code +=char;
    }
    return code;
}

function btnEncryptClick(){
    if (Vaild("Encrypt")){
        const key = Number(document.querySelector('input[type=number]#codeKeyEnc').value); 
        const text = document.querySelector('input[type=text]#inpTextEnc').value; 
        document.querySelector('#pOutputEnc').textContent = convertTextToCode(key,text);
    }
}

function btnDecryptClick(){
    if (Vaild("Decrypt")){
        const key = Number(document.querySelector('input[type=number]#codeKeyDec').value) * -1; 
        const text = document.querySelector('input[type=text]#inpTextDec').value; 
        document.querySelector('#pOutputDec').textContent = convertTextToCode(key,text);
    }
}

function Vaild(type){
    if (keyTextEmpty(type)){
        alert ("Key field is empty")
        return false;
     }
    if (codeTextEmpty(type)){
      alert ("Code field is empty")
      return false;
      }   
      
      return true;
}
function keyTextEmpty(type){
    if (type === "Encrypt")
    {        
        const keyText = document.querySelector('input[type=number]#codeKeyEnc').value;  
        return keyText === ""; 
    }
    else{
        const keyText = document.querySelector('input[type=number]#codeKeyDec').value;
        return keyText === ""; 
    }
}

function codeTextEmpty(type){
    if (type === "Encrypt")
    {        
        const codeText = document.querySelector('input[type=text]#inpTextEnc').value;  
        return codeText === ""; 
    }
    else{
        const codeText = document.querySelector('input[type=text]#inpTextDec').value;
        return codeText === ""; 
    }


}

Init();