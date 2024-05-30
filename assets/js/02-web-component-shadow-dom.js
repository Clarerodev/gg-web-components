class GgMyElement extends HTMLElement {
    constructor() {
        super();
        // Set Shadow DOM
        this.attachShadow({ mode: "open" })
        //this._root = this.attachShadow({ mode: "closed" })
    }

    connectedCallback() {
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = ` <p>I'm in the Shadow Root!</p>`;
        else
            this._root.innerHTML = ` <p>I'm in the second layer!</p>`;
    }
}

customElements.define('gg-my-element', GgMyElement)