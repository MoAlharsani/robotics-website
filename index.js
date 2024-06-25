document.getElementById('toggleInfo').addEventListener('click', function() {
    var infoDiv = document.getElementById('info');
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
        this.textContent = 'اخفاء المعلومات';
    } else {
        infoDiv.style.display = 'none';
        this.textContent = 'انقر لمعرفة المزيد!';
    }
});
