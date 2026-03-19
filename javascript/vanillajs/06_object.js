// String에 contains라는 기능을 추가한다.
String.prototype.contains = function (findText) {
  console.log(findText);
  console.log(this);

  return this.indexOf(findText) >= 0;
};

// tempObject에 print라는 기능을 추가
Object.prototype.print = function () {
  console.log("객체의 내용", this);
};

var text = "wjiowf";
text.print();

var tempObject = {};
tempObject.print();
console.dir(tempObject);

window.onload = function () {
  var text = "abcdefg abcdefg";
  // string의 기능 => String object이 무엇으로 구성되어 있나
  console.dir(String);
  var contain = text.contains("z"); // Uncaught TypeError: text.contains is not a function
  console.log(contain);

  var list = document.querySelector(".list");

  var listItems = [
    { tagName: "li", text: "first", class: "list-item" },
    { tagName: "li", text: "second", class: "list-item" },
    { tagName: "li", text: "third", class: "list-item" },
    // { tagName: "li", text: "fourth", class: "list-item" },
  ];
  listItems.print();

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].print();
    var item = listItems[i];

    var eachItem = document.createElement(item.tagName);
    eachItem.className = item.class;
    eachItem.innerText = item.text;

    list.appendChild(eachItem);
  }

  function calc(param) {
    return (param.n1 || 0) + (param.n2 || 0) + (param.n3 || 0);
  }

  var result = calc({ n1: 10, n3: 50 });
  console.log(result);

  function getObject() {
    return {
      price: 32456,
      name: "heojf",
      model: "r94034",
      fan: 8,
      chain: ["GS", "CJ", "HANJIN", "etc"],
      address: {
        city: "Seoul",
        state: "guro",
      },
    };
  }

  var obj = getObject();
  console.log(obj.chain);

  var headphone = {
    "serial-number": "SN78943",
    modelName: "XM-5",
    manufacture: "Sony",
    type: "over-ear",
    power: false,
    powerOn: function () {
      console.log(this.modelName, "이 켜집니다.");
      this.power = true;
    },
    powerOff: function () {
      console.log(this.modelName, "이 꺼집니다.");
      this.power = false;
    },
  };

  console.log(headphone, typeof headphone);

  console.log(headphone.modelName);
  console.log(headphone["modelName"]);
  console.log(headphone["serial-number"]);

  headphone.powerOn();
  console.log(headphone.power);

  headphone.powerOff();
  console.log(headphone.power);
};
