function updateCharCount(textareaId, limitId) {
    const textarea = document.getElementById(textareaId);
    const limitSpan = document.getElementById(limitId);
    const maxLength = 500; 

    textarea.addEventListener('input', function() {
        const currentLength = textarea.value.length;
        limitSpan.textContent = currentLength; 

        if (currentLength >= maxLength) {
            textarea.value = textarea.value.substring(0, maxLength); 
            limitSpan.textContent = maxLength; 
        }
    });
}

updateCharCount('textarea1', 'limit1');
updateCharCount('textarea3', 'limit3');
