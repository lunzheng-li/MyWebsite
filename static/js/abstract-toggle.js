function toggleAbstract(el) {
    // Find the paragraph containing this toggle
    var paragraph = el.closest('p');
    if (paragraph) {
        // The abstract-content div should be the next sibling of the paragraph
        var next = paragraph.nextElementSibling;
        if (next && next.classList.contains('abstract-content')) {
            next.classList.toggle('show');
        }
    }
}
