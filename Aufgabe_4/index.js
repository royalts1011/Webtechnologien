class Task extends HTMLElement {
  constructor() {
    //Super muss immer zuerst aufgerufen werden
    super();
    // Element-Funktionalität wird ab hier definiert
    const shadow = this.attachShadow({
      mode: "open",
    });

    var user = this.getAttribute("user");
    var date = this.getAttribute("date");
    var duration = this.getAttribute("duration");
    var description = this.getAttribute("description");

    this.shadowRoot.innerHTML = `
                                    <div class="card is-shady">
                                        <div class="card-content">
                                            <div class="content">
                                                <h2>${user}</h2>
                                            </div>
                                            <div>
                                                <h4>Date: ${date}</h4>
                                                <h4>Duration: ${duration}</h4>
                                                <h4>Description: ${description}</h4>
                                                <span class="button is-link modal-button" data-target="modal-image2">Done</span>
                                            </div>
                                        </div>
                                    </div>
                                `;

    const bulmaLink = document.createElement("LINK");
    bulmaLink.setAttribute("rel", "stylesheet");
    bulmaLink.setAttribute("href", "bulma.css");
    shadow.appendChild(bulmaLink);
  }
}
customElements.define("task-card", Task);

function load(user, date, duration, description) {
  var parentNode = document.getElementById("idxTask");
  var ChildNode = ` <task-card class="column"
        user="${user}"
        date="${date}"
        duration="${duration}"
        description="${description}"
      >
        {" "}
      </task-card>`;

  parentNode.insertAdjacentHTML("beforeend", ChildNode);
}

function fetchTask() {
  var node = document.getElementById("idxTask");
  node.innerHTML = "";

  var tmp = document.getElementById("5").value;
  fetch(`http://localhost:3000/Aufgabe_4?user=${tmp}`)
    .then((resp) => resp.json())
    .then(function (data) {
      let task = data.docs; // Get the results
      return task.map(function (task) {
        var user = task.user;
        var duration = task.duration;
        var date = task.duration;
        var description = task.description;
        load(user, date, duration, description);
      });
    });
}

function saveData() {
  var user_sav = document.getElementById("1").value;
  var date_sav = document.getElementById("2").value;
  var duration_sav = document.getElementById("3").value;
  var description_sav = document.getElementById("4").value;
  var task = {
    user: user_sav,
    date: date_sav,
    duration: duration_sav,
    description: description_sav,
  };

  (async () => {
    const rawResponse = await fetch("http://localhost:3000/Aufgabe_4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const content = await rawResponse.json();

    console.log(content);
  })();
}
