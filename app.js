const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
    const text = textarea.value;
    const textlength = textarea.value.length;
    count.innerText = `${textlength}`;
}

document.getElementById('myInput').addEventListener('input', function() {
    var maxLength = 30;
    if(this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength);
    }
});