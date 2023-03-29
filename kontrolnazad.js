//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)
function ispisBrojeva() {
  for (let i = 0; i < 101; i++) {
    if (i % 2 == 0 && !(i == 0)) {
      console.log(i);
    }
  }
}
//ispisBrojeva();

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak";

function danTjednu(value) {
  switch (value) {
    case 1:
      console.log("Ponedeljak");
      break;
    case 2:
      console.log("Utorak");
      break;
    case 3:
      console.log("Srijeda");
      break;
    case 4:
      console.log("Četvrtak");
      break;
    case 5:
      console.log("Petak");
      break;
    case 6:
      console.log("Subota");
      break;
    case 7:
      console.log("Nedelja");
      break;

    default:
      console.log("krivi unos treba biti broj između 1-7");
      break;
  }
}
/*
danTjednu(1);
danTjednu(9);
danTjednu("hello");*/

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function okretanje(tekst) {
  tempString = "";
  tempBroj = 0;
  for (let i = tekst.length - 1; i >= 0; i--) {
    tempString += tekst[i];
    if (!(tekst[i] == " ")) {
      tempBroj++;
    }
  }
  console.log(tempString, tempBroj);
}

//okretanje("Pisanje zadataka nije jednostavan posao");

//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
const somePeople = {
  Donald: "Knuth",
  Bjarne: "Stroustrup",
  Ada: "Lovelace",
  Kent: "Beck",
  Martin: "Fowler",
  Erich: "Gamma",
};
//INPUT: somePeople
//OUTPUT: "Ada"

function najkraciKljuc(People) {
  let templength = ;
  let tempkey = "";
  for (const key in People) {
    if(key.length<templength)
    console.log(key.length);
    /*if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }*/
  }
}

najkraciKljuc(somePeople);

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
  {
    eventName: "Izasla je Java",
    eventYear: 1995,
  },
  {
    eventName: "Izasao je C#",
    eventYear: 2000,
  },
  {
    eventName: "Izasao je Python",
    eventYear: 1991,
  },
  {
    eventName: "Izasao je C++",
    eventYear: 1985,
  },
  {
    eventName: "Izasao je JavaScript",
    eventYear: 1995,
  },
];
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]
