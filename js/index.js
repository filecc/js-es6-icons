(function () {
  /* Add the specified classes to the given HTML element */
  function addClasses(element, classes) {
    classes.forEach((_class) => element.classList.add(_class));
  }

  /* Adds the specified ID to the given HTML element */
  function addID(element, id) {
    element.setAttribute("id", id);
  }

  /* Creates a new HTML element with an object in input */
  function createChild(tag, props = {}) {
    const newElement = document.createElement(tag);

    Object.entries(props).forEach(([key, value]) => {
      switch (key) {
        case "id":
          addID(newElement, value);
          break;
        case "classes":
          addClasses(newElement, value);
          break;
        case "text":
          newElement.textContent = value;
          break;
        default:
          newElement.setAttribute(key, value);
          break;
      }
    });
    return newElement;
  }

  /* Remove the specified classes to the given HTML element */
  function removeClasses(element, classes) {
    classes.forEach((_class) => element.classList.remove(_class));
  }

  /* Toggle the specified classes to the given HTML element */
  function toggleClasses(element, classes) {
    classes.forEach((_class) => element.classList.toggle(_class));
  }

  /* Adds the desired attribute to the given element */
  function addAttributes(element, props) {
    const { ...rest } = props;
    Object.entries(rest).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  // function to get a random number, extreme included
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const icons = [
    {
      name: "cat",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "crow",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "dog",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "dove",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "dragon",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "horse",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "hippo",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "fish",
      prefix: "fa-",
      type: "animal",
      family: "solid",
      color: "orange",
    },
    {
      name: "carrot",
      prefix: "fa-",
      type: "vegetable",
      family: "solid",
      color: "green",
    },
    {
      name: "apple-alt",
      prefix: "fa-",
      type: "vegetable",
      family: "solid",
      color: "green",
    },
    {
      name: "lemon",
      prefix: "fa-",
      type: "vegetable",
      family: "solid",
      color: "green",
    },
    {
      name: "pepper-hot",
      prefix: "fa-",
      type: "vegetable",
      family: "solid",
      color: "green",
    },
    {
      name: "user-astronaut",
      prefix: "fa-",
      type: "user",
      family: "solid",
      color: "blue",
    },
    {
      name: "user-graduate",
      prefix: "fa-",
      type: "user",
      family: "solid",
      color: "blue",
    },
    {
      name: "user-ninja",
      prefix: "fa-",
      type: "user",
      family: "solid",
      color: "blue",
    },
    {
      name: "user-secret",
      prefix: "fa-",
      type: "user",
      family: "solid",
      color: "blue",
    },
    {
      name: "address-book",
      prefix: "fa-",
      type: "address",
      family: "solid",
      color: "blue"
    },
    {
      name: "calendar",
      prefix: "fa-",
      type: "calendar",
      family: "solid",
      color: "blue"
    },
    {
      name: "camera-retro",
      prefix: "fa-",
      type: "camera",
      family: "solid",
      color: "blue"
    },
    {
      name: "car",
      prefix: "fa-",
      type: "car",
      family: "solid",
      color: "red"
    },
    {
      name: "book",
      prefix: "fa-",
      type: "book",
      family: "solid",
      color: "green"
    },
    {
      name: "globe-americas",
      prefix: "fa-",
      type: "globe",
      family: "solid",
      color: "green"
    },
    {
      name: "music",
      prefix: "fa-",
      type: "music",
      family: "solid",
      color: "purple"
    },
    {
      name: "gamepad",
      prefix: "fa-",
      type: "game",
      family: "solid",
      color: "purple"
    },
    {
      name: "coffee",
      prefix: "fa-",
      type: "food",
      family: "solid",
      color: "brown"
    },
    {
      name: "pizza-slice",
      prefix: "fa-",
      type: "food",
      family: "solid",
      color: "brown"
    },
  ];

  
  function randomColor() {
   
    let hexColor = "#";
    while (hexColor.length < 7) {
      if (hexColor.length < 6) {hexColor += (getRandomInt(0, 15).toString(16))}
      else if (hexColor.length >= 6)  {hexColor += (getRandomInt(2, 10).toString(16))} /* never white or pure black */
    }
    
    return hexColor
  }
  

  const typeSelectable = [];
  const typeColor = []

  icons.map((item) => {
    if (!typeSelectable.includes(item.type)) {
      typeColor.push({type: item.type, color: randomColor()})
      typeSelectable.push(item.type);
    }
  });

  function createCol(icon) {
    const { name, prefix, type, family, color } = icon;

    const col = createChild("div", {
      classes: ['col', "p-4"],
      "data-fg-type": type,
    });
    const card = createChild("div", { classes: ["cardIcon"] });
    col.appendChild(card);
    const iconImage = createChild("i", {
      classes: [`${prefix}${family}`, `${prefix}${name}`],
    });
    const iconName = createChild("p", { text: name });
    card.append(iconImage, iconName);
    typeColor.forEach(element => {
      if (element.type === icon.type){
        iconImage.style.color = element.color;
      }
    });

    return col;
  }

  const root = document.getElementById("root");
  const select = document.getElementById("typeSelector");
  const input = document.querySelector("input");

  typeSelectable.forEach((element) => {
    select.appendChild(
      createChild("option", { text: element, value: element })
    );
  });

  icons.forEach((icon) => {
    root.appendChild(createCol(icon));
  });

  function originSet(value, origin){
    let result;
    if (origin === 'select'){
      result = icons.filter(
        (icon) =>
          icon.type.includes(value.toLowerCase())
      );
    } else {
      result = icons.filter(
        (icon) =>
          icon.type.includes(value.toLowerCase()) ||
          icon.name.includes(value.toLowerCase())
      );
    }
    return result
  }

  function search(value, origin) {    
    
    const searched = originSet(value, origin);
    root.textContent = "";
    const setToDisplay = (value.lenght === 0) ? icons : searched;
    if (searched.length === 0) {
      root.appendChild(createChild('span', {classes: ['text-danger', 'text-center', 'p-5'], text: 'No result'}));
    } else {
      setToDisplay.forEach((icon) => {
        root.appendChild(createCol(icon));
      });
    }
    
  }

  select.addEventListener("change", function () {
    const indexSelected = this.selectedIndex;
    const opstionSelected = select.options[indexSelected].value;
    console.log(opstionSelected)
    search(opstionSelected, 'select');
  });

  input.addEventListener("input", function () {
    const value = this.value;
    search(value, 'input');
  });
  
})();
