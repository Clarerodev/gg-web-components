class GgMyElement extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('gg-my-template');
        const templateContent = template.content;

        // Set Shadow DOM
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(templateContent.cloneNode(true))
    }
}

customElements.define('gg-my-element', GgMyElement)
