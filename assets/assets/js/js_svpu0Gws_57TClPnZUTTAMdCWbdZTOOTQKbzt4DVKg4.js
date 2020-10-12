var sel = 'selected';
var single = document.querySelectorAll('.singlechoice-row');
single.forEach(item => {
    item.addEventListener('click', function(e) {
        for (let i = 0; i < single.length; i++) {
            single[i].classList.remove(sel);
        }
        this.classList.add(sel);
    });
});
document.querySelectorAll('.multichoice-row').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.classList.contains(sel)) {
            this.classList.remove(sel);
            item.querySelector('input').checked = false;
        } else {
            this.classList.add(sel);
            item.querySelector('input').checked = true;
        }
    });
});;