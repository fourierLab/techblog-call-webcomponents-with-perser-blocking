'use strict';
const html = '<div style="display: flex; justify-content: center; align-items: center; color: white; background-color: #222; height: 1000px;">WebComponentsで動的に生成したHTML</div>';

class FrSample extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({mode: 'closed'});
    }

    render() {
        this._root.innerHTML = `${html}`;
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('fr-sample', FrSample);
