function toggleAbstract(el) {
    var content = el.parentElement.nextElementSibling;
    if (content && content.classList.contains('abstract-content')) {
        content.classList.toggle('show');
    }
}
