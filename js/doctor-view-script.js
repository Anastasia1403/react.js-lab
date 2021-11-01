class Model {
  constructor() {
    this.getData();
  }

  getData = (data) => {
    this.patients = data;
  };

  bindPatientsListChanged(callback) {
    this.onPatientsListChanged = callback;
  }

  editResolution(id, updatedText) {
    for (let pat in this.patients) {
      if (this.patients[pat].id == id)
        this.patients[pat].resolution = updatedText;
    }

    this.onPatientsListChanged(this.patients);
  }

  deletePatient(id) {
    Object.keys(this.patients).map((pat) =>
      this.patients[pat].id == id ? delete this.patients[pat] : null
    );
    this.onPatientsListChanged(this.patients);
  }
}

class View {
  constructor() {
    this.main = this.getElement(".my-patients");

    this._deletedPatient;
    this._editedText;

    this.createSettingsWindow();
    this._initLocalListeners();
  }
  settingButtonListener = () => {
    const settingsButtons = document.querySelectorAll(".patient-card__edit");
    for (let but of settingsButtons) {
      but.addEventListener("click", (event) => {
        const id = parseInt(event.target.closest(".patient-card").id);
        this.togglerSettingsWindow(id);
      });
    }
  };

  createSettingsWindow = () => {
    this.windowSettings = this.createElement("div", "patient-card__settings");
    this.windowSettings.classList.add("window-close");
    this.windowSettings.innerHTML = `<button class="patient-card__settings-button edit">Edit a resolution</button> 
        <button class="patient-card__settings-button">Edit an appontment</button> 
        <button class="patient-card__settings-button delete">Delete</button>`;

    return this.windowSettings;
  };

  togglerSettingsWindow = (id) => {
    if (this.windowSettings.classList.contains("window-close")) {
      document.getElementById(id).append(this.windowSettings);
    }

    this.windowSettings.classList.toggle("window-close");
  };

  _initLocalListeners() {
    this.main.addEventListener("input", (event) => {
      if (event.target.classList.contains("editable")) {
        this._editedText = event.target.innerText;
      }
    });
  }

  bindEditResolution(handler) {
    this.main.addEventListener("focusout", (event) => {
      if (this._editedText) {
        const id = parseInt(event.target.closest(".patient-card").id);
        handler(id, this._editedText);
        this._editedText = "";
        const pat = event.target.closest(".patient-card");
        const editField = pat.querySelector(".patient-card__resolution");
        editField.contentEditable = false;
        editField.classList.remove("editable");
      }
    });
  }

  bindDeletePatient(handler) {
    this.main.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete")) {
        handler(event.target.closest(".patient-card").id);
      }
    });
  }

  editResolutionModeOn() {
    this.main.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit")) {
        const pat = event.target.closest(".patient-card");
        const editField = pat.querySelector(".patient-card__resolution");
        editField.contentEditable = true;
        editField.classList.add("editable");
        this.togglerSettingsWindow();
      }
    });
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  };

  displayPatients = (patients) => {
    while (
      !this.main.lastElementChild.classList.contains("my-patients__header")
    ) {
      this.main.removeChild(this.main.lastChild);
    }
    if (!Object.keys(patients).length) {
      const divEmpty = this.createElement("div", "my-patients__list_empty");
      divEmpty.innerHTML =
        "You have no patients yet.<br> To create a patient profile, please contact your administrator.";
      this.main.append(divEmpty);
    } else {
      const patientList = this.createElement("ul", "my-patients__list");
      this.main.append(patientList);

      Object.keys(patients).forEach((patient) => {
        const patientCard = this.createElement("li", "patient-card");
        patientCard.id = patients[patient].id;
        let status;
        let indicatorColor;
        if (patients[patient].appointmentStatus === "confirm") {
          status = "Appointment is confirmed";
          indicatorColor = "#34C197";
        } else if (patients[patient].appointmentStatus === "waiting") {
          status = "Waiting for confirmation... ";
          indicatorColor = "#7297FF";
        } else if (patients[patient].appointmentStatus === "canceled") {
          status = "Appointment is canceled";
          indicatorColor = "#FF2567";

        }
        patientCard.innerHTML = `<header class="patient-card__header">
          <div class="avatar-wrapper">
              <img class="avatar patient-card__avatar" src="${patients[patient].imageUrl}" alt="">
          </div>
          <div class="patient-card__headline">
              <h3 class="patient-card__name">${patients[patient].firstName} ${patients[patient].lastName}</h3>
              <div class="patient-card__status"> 
              <div class="patient-card__status-indicator" style="background-color: ${indicatorColor}"> </div>
              <div class="patient-card__status-text">${status}</div></div>
              
          </div>
          
          <button class="patient-card__edit">
          <img class="icon" src="img/svg/more-vertical.svg" alt="">
          </button>
      </header>
    <div class="patient-card__info">
       <div class='patient-card__info-item patient-card__info-time'>
           <img src="img/svg/clock-three.svg" alt="clock">
           <div class="patient-card__time">${patients[patient].appointmentDate}</div>
       </div>
       <div class='patient-card__info-item patient-card__info-resolution'>
           <img src="img/svg/clipboard-blank.svg" alt="clock">
           <div class="patient-card__resolution">${patients[patient].resolution}</div>
       </div>
      </div>`;

        patientList.append(patientCard);
      });
    }
    this.settingButtonListener();
  };
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.getData(this.loadData());
    this.model.bindPatientsListChanged(this.onPatientsListChanged);
    this.view.bindEditResolution(this.handleEditResolution);
    this.view.bindDeletePatient(this.handleDeletePatient);
    this.view.editResolutionModeOn();
    this.onPatientsListChanged(this.model.patients);
  }

  onPatientsListChanged = (patients) => {
    this.view.displayPatients(patients);
  };

  handleEditResolution = (id, text) => {
    // debugger
    this.model.editResolution(id, text);
  };
  handleDeletePatient = (id) => {
    this.model.deletePatient(id);
  };

  loadData = () => {
    return {
      patient1: {
        id: 1,
        firstName: "Jane",
        lastName: "Cooper",
        imageUrl: "img/avatar-patient-1.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "confirm",
        resolution:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      patient2: {
        id: 2,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "canceled",
        resolution:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      patient3: {
        id: 3,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "waiting",
        resolution:
          "We will invite you in for a full review every year",
      },
      patient4: {
        id: 4,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "canceled",
        resolution:
          "юWe will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels. We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels.",
      },
      patient5: {
        id: 5,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "waiting",
        resolution:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels.We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      patient6: {
        id: 6,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "canceled",
        resolution:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      patient7: {
        id: 7,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "confirm",
        resolution:
          "We will invite you in for a full review every year",
      },
      patient8: {
        id: 8,
        firstName: "Eleanor",
        lastName: "Pena",
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: "Thu Sept 10, 2021 4 pm – 5 pm",
        appointmentStatus: "confirm",
        resolution:
          "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels. We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels",
      },
      patient9: {
        id: 9,
        firstName: 'Eleanor',
        lastName: 'Pena',
        imageUrl: "img/avatar-patient-2.png",
        appointmentDate: 'Thu Sept 10, 2021 4 pm – 5 pm',
        appointmentStatus: 'confirm',
        resolution: "We will invite you in for a full review every year and more frequently if you are struggling with blood sugar levels"
    },
    };
  };
}

const app = new Controller(new Model(), new View());
