const template = document.createElement("template");
template.setAttribute("id", "listWithjs");
template.innerHTML = `
<style>
  :host{}
  #s .item{padding-left: 30px;}
</style>
<div class="ui list" id="s">
  <div class="item">Apples</div>
  <div class="item">Pears</div>
  <div class="item">Oranges</div>
</div>
`;
document.body.append(template);

class ListTemplateWithjs extends HTMLElement {
  constructor() {
    super()
    const items = document.getElementById('listWithjs')
    var content = items.content.cloneNode(true);
    this.appendChild(content);
  }
}

window.customElements.define('list-template-withjs', ListTemplateWithjs);
