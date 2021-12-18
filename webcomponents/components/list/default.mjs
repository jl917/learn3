class ListDefault extends HTMLElement {
  constructor() {
    super()

    const items = document.createElement('div');
    items.classList.add('ui', 'list')

    for (let e of ['Apples', 'Pears', 'Oranges']) {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerText = e;
      items.append(item);
    }

    this.append(items);
  }
}

window.customElements.define('list-default', ListDefault);
