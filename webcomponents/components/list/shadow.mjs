
class ListShadow extends HTMLElement {
  constructor() {
    super()

    var shadow = this.attachShadow( { mode: 'closed' } );
    const items = document.createElement('div');
    items.classList.add('ui', 'list')
    for (let e of JSON.parse(this.getAttribute('items'))) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerText = e;
      items.append(item);
    }

    shadow.append(items);
  }
}

window.customElements.define('list-shadow', ListShadow);
