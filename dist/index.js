"use strict";
class ExpandingList extends HTMLUListElement {
    constructor() {
        super();
        this.showul = function (e) {
            var _a;
            const nextul = (_a = e.target) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
            if (nextul.style.display == 'block') {
                nextul.style.display = 'none';
                nextul.parentNode.setAttribute('class', 'closed');
            }
            else {
                nextul.style.display = 'block';
                nextul.parentNode.setAttribute('class', 'open');
            }
        };
        const uls = Array.from(this.querySelectorAll('ul'));
        const lis = Array.from(this.querySelectorAll('li'));
        uls.forEach(ul => {
            ul.style.display = 'none';
        });
        lis.forEach(li => {
            var _a, _b;
            if (li.querySelectorAll('ul').length > 0) {
                li.setAttribute('class', 'closed');
                const childText = li.childNodes[0];
                const newSpan = document.createElement('span');
                newSpan.textContent = childText.textContent;
                newSpan.style.cursor = 'pointer';
                newSpan.onclick = this.showul;
                (_a = childText.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newSpan, childText);
                (_b = childText.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(childText);
            }
        });
    }
}
customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
//# sourceMappingURL=index.js.map