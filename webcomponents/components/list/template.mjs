class ListTemplate extends HTMLElement {
  constructor() {
    super()
    const items = document.getElementById('list')
    var content = items.content.cloneNode(true);
    this.appendChild(content);
  }
}

window.customElements.define('list-template', ListTemplate);
