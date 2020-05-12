class AbgabeButton extends HTMLElement {
  constructor() {
    //Super muss immer zuerst aufgerufen werden
    super();
    // Element-Funktionalität wird ab hier definiert
    const shadow = this.attachShadow({
      mode: "open",
    });
    var image = this.getAttribute("imgSrc");
    var name = this.getAttribute("name");
    this.shadowRoot.innerHTML = `<figure class="image is-3by4"><img src=${image}></figure><p><slot name="name" style="color:white">${name}</slot></p>`;
    const bulmaLink = document.createElement("LINK");
    bulmaLink.setAttribute("rel", "stylesheet");
    bulmaLink.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
    );
    shadow.appendChild(bulmaLink);
  }
}
customElements.define("abgabe-2", AbgabeButton);

function addCard() {
  var parentNode = document.getElementById("componentroot");
  var img = "split.jpg";
  var name = "split";
  var ChildNode = `<abgabe-2 class="column is-one-quarter" imgSrc=${img} name=${name}></abgabe-2>`;
  parentNode.insertAdjacentHTML("beforeend", ChildNode);
}
