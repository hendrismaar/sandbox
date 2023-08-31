import "./styles.css";

const myjson = [
  {
    "Car0": {
      "Color": "Rose red",
      "Tinted windows": false,
      "Wheels" : 4,
      "Roof cargo": null,
      "Entertainment": [
        "FM Radio", 
        " MP3, MP4 and MKV player",
        " harman/kardon speakers"
      ],
      "Accessories": [
        "satnav",
        " cruise control"
      ]
    },
    "Car1": {
      "Color": "Navy blue",
      "Tinted windows": true,
      "Wheels" : 4,
      "Roof cargo": "Thule",
      "Entertainment": [
        "FM Radio", 
        " Apple CarPlay/Android Auto",
        " Bowers & Wikins Premium Sound Speakers"
      ],
      "Accessories": [
        "self drive system",
        " luggage cover"
      ]
    }
  }
];

document.getElementById("app").innerHTML =

`
<div id = "json">
  <h1>Car properties
  <p>Color: ${myjson[0].Car0.Color}</p>
  <p>Tinted windows: ${myjson[0].Car0["Tinted windows"]}</p>
  <p>Wheels: ${myjson[0].Car0.Wheels}</p>
  <p>Roof cargo: ${myjson[0].Car0["Roof cargo"]}</p>
  <p>Entertainment: ${myjson[0].Car0.Entertainment}</p>
  <p>Accessories: ${myjson[0].Car0.Accessories}</p>

</div>
`;

