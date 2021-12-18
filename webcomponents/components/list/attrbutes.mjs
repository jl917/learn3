class ListAttrbutes extends HTMLElement {
  constructor() {
    super()

    const items = document.createElement('div');
    items.classList.add('ui', 'list')
    for (let e of JSON.parse(this.getAttribute('items'))) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerText = e;
      items.append(item);
    }

    this.append(items);
  }
}

window.customElements.define('list-attrbutes', ListAttrbutes);
