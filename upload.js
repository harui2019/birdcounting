// 初始化地圖

var southWest = L.latLng(22.97, 119.97),
    northEast = L.latLng(23.12, 120.3),
    bounds = L.latLngBounds(southWest, northEast);

var mymap = L.map('click_map')
  		   .setView([23.065, 120.1], 13)
  		   .setMaxBounds(bounds);
//指定位置

var position = document.getElementById("bird_position");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
				{ 
				  minZoom: 10, 
				  maxZoom: 18, id: "mapbox.comic", 
				  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
 .addTo(mymap);


var marker;
mymap.on('click', function(e) {
    if(marker)
        mymap.removeLayer(marker);
    console.log(e.latlng); // e is an event object (MouseEvent in this case)
    marker = L.marker(e.latlng).addTo(mymap);
    //pan
    //傳給input
    //換個icon
    position.value = e.latlng.lat + ", " + e.latlng.lng;
});

function reset_position(){
  if(marker)
        mymap.removeLayer(marker);
  position.value = "00.0000, 00.0000";
}

// 初始化select

var habitatList = document.getElementById("habitat_list")


var place = ["Northern Taiwan",  "Central Taiwan", "Southern Taiwan", "Eastern Taiwan" ]

for (var p in place){
    var option = document.createElement("option")
    option.innerHTML = place[p];
    habitatList.appendChild(option);
}

//初始化typeahead

var substringMatcher = function(strs) {
  console.log('strs', strs);
  return function findMatches(q, cb) {
    console.log('q', q);
    var matches, substringRegex;
    // an array that will be populated with substring matches
    matches = [];
    // console.log('matches', matches);

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });
    
    // console.log('matches', matches);

    cb(matches);
  };
};

var states = [" Gorsachius melanolophus",
" Milvus migrans",
" Spilornis cheela",
" Accipiter trivirgatus",
" Accipiter virgatus",
" Ictinaetus malayensis",
" Arborophila crudigularis",
" Bambusicola thoracicus",
" Lophura swinhoii",
" Rallina eurizonoides",
" Columba pulchricollis",
" Streptopelia orientalis",
" Chalcophaps indica",
" Treron sieboldii",
" Cuculus sparverioides",
" Cuculus saturatus",
" Otus spilocephalus",
" Otus lettia",
" Glaucidium brodiei",
" Ninox scutulata",
" Megalaima nuchalis",
" Dendrocopos canicapillus",
" Coracina macei",
" Pericrocotus solaris",
" Spizixos semitorques",
" Hypsipetes leucocephalus",
" Myiomela leucura",
" Niltava vivida",
" Hypothymis azurea",
" Zoothera dauma",
" Turdus pallidus",
" Turdus chrysolaus",
" Pomatorhinus erythrogenys",
" Pomatorhinus ruficollis",
" Stachyris ruficeps",
" Garrulax chinensis",
" Garrulax poecilorhynchus",
" Liocichla steerii",
" Alcippe brunnea",
" Alcippe morrisonia",
" Erpornis zantholeuca",
" Urosphena squameiceps",
" Phylloscopus inornatus",
" Abroscopus albogularis",
" Aegithalos concinnus",
" Parus monticolus",
" Parus varius",
" Dicaeum concolor",
" Dicaeum ignipectum",
" Oriolus chinensis",
" Oriolus traillii",
" Dicrurus aeneus",
" Garrulus glandarius",
" Urocissa caerulea",
" Dendrocitta formosae",
" Spilornis cheela",
" Accipiter trivirgatus",
" Accipiter virgatus",
" Ictinaetus malayensis",
" Arborophila crudigularis",
" Bambusicola thoracicus",
" Lophura swinhoii",
" Syrmaticus mikado",
" Columba pulchricollis",
" Streptopelia orientalis",
" Treron sieboldii",
" Cuculus sparverioides",
" Cuculus saturatus",
" Cuculus poliocephalus",
" Otus spilocephalus",
" Glaucidium brodiei",
" Megalaima nuchalis",
" Dendrocopos canicapillus",
" Dendrocopos leucotos",
" Picus canus",
" Pericrocotus solaris",
" Hypsipetes leucocephalus",
" Luscinia indica",
" Luscinia johnstoniae",
" Myiomela leucura",
" Muscicapa ferruginea",
" Ficedula hyperythra",
" Niltava vivida",
" Zoothera dauma",
" Brachypteryx montana",
" Pomatorhinus erythrogenys",
" Pomatorhinus ruficollis",
" Pnoepyga albiventer",
" Stachyris ruficeps",
" Garrulax albogularis",
" Garrulax poecilorhynchus",
" Garrulax morrisonianus",
" Liocichla steerii",
" Actinodura morrisoniana",
" Alcippe cinereiceps",
" Alcippe brunnea",
" Alcippe morrisonia",
" Heterophasia auricularis",
" Yuhina brunneiceps",
" Erpornis zantholeuca",
" Cettia acanthizoides",
" Bradypterus alishanensis",
" Abroscopus albogularis",
" Regulus goodfellowi",
" Aegithalos concinnus",
" Parus monticolus",
" Parus holsti",
" Parus ater",
" Parus varius",
" Sitta europaea",
" Dicaeum concolor",
" Dicaeum ignipectum",
" Carpodacus vinaceus",
" Pyrrhula nipalensis",
" Garrulus glandarius",
" Dendrocitta formosae",
" Nucifraga caryocatactes",
" Syrmaticus mikado",
" Columba pulchricollis",
" Cuculus saturatus",
" Dendrocopos leucotos",
" Picus canus",
" Troglodytes troglodytes",
" Prunella collaris",
" Luscinia indica",
" Luscinia johnstoniae",
" Brachypteryx montana",
" Garrulax morrisonianus",
" Actinodura morrisoniana",
" Alcippe cinereiceps",
" Paradoxornis verreauxi",
" Cettia acanthizoides",
" Regulus goodfellowi",
" Parus ater",
" Sitta europaea",
" Carpodacus vinaceus",
" Pyrrhula erythaca",
" Nucifraga caryocatactes",
" Corvus macrorhynchos",
" Caprimulgus affinis",
" Bambusicola thoracicus",
" Turnix suscitator",
" Rallina eurizonoides",
" Gallirallus striatus",
" Porzana fusca",
" Streptopelia orientalis",
" Streptopelia tranquebarica",
" Streptopelia chinensis",
" Cuculus saturatus",
" Centropus bengalensis",
" Alauda gulgula",
" Hirundo rustica",
" Hirundo tahitica",
" Cecropis striolata",
" Motacilla alba",
" Pycnonotus sinensis",
" Pycnonotus taivanus",
" Lanius cristatus",
" Lanius schach",
" Luscinia calliope",
" Turdus pallidus",
" Turdus chrysolaus",
" Pomatorhinus ruficollis",
" Stachyris ruficeps",
" Garrulax canorus",
" Garrulax taewanus",
" Paradoxornis webbianus",
" Cettia diphone",
" Cettia fortipes",
" Cisticola juncidis",
" Cisticola exilis",
" Prinia crinigera",
" Prinia flaviventris",
" Prinia inornata",
" Passer montanus",
" Dicrurus macrocercus",
" Bambusicola thoracicus",
" Hirundo tahitica",
" Pomatorhinus ruficollis",
" Stachyris ruficeps",
" Paradoxornis webbianus",
" Paradoxornis verreauxi",
" Cettia fortipes",
" Cettia acanthizoides",
" Bradypterus alishanensis",
" Prinia crinigera",
" Pyrrhula erythaca",
" Milvus migrans",
" Accipiter gularis",
" Turnix suscitator",
" Gallirallus striatus",
" Amaurornis phoenicurus",
" Porzana fusca",
" Gallicrex cinerea",
" Gallinula chloropus",
" Streptopelia tranquebarica",
" Streptopelia chinensis",
" Centropus bengalensis",
" Alauda gulgula",
" Hirundo rustica",
" Hirundo tahitica",
" Cecropis striolata",
" Motacilla alba",
" Pycnonotus sinensis",
" Pycnonotus taivanus",
" Lanius cristatus",
" Lanius schach",
" Luscinia calliope",
" Turdus pallidus",
" Turdus chrysolaus",
" Paradoxornis webbianus",
" Cettia diphone",
" Acrocephalus orientalis",
" Cisticola juncidis",
" Cisticola exilis",
" Prinia flaviventris",
" Prinia inornata",
" Passer montanus",
" Dicrurus macrocercus",
" Gorsachius melanolophus",
" Milvus migrans",
" Accipiter trivirgatus",
" Caprimulgus affinis",
" Amaurornis phoenicurus",
" Gallinula chloropus",
" Streptopelia orientalis",
" Streptopelia tranquebarica",
" Streptopelia chinensis",
" Geopelia striata",
" Treron sieboldii",
" Otus bakkamoena",
" Megalaima nuchalis",
" Dendrocopos canicapillus",
" Apus nipalensis",
" Hirundo rustica",
" Hirundo tahitica",
" Cecropis striolata",
" Motacilla alba",
" Pycnonotus sinensis",
" Pycnonotus taivanus",
" Hypsipetes leucocephalus",
" Lanius cristatus",
" Luscinia calliope",
" Turdus pallidus",
" Turdus chrysolaus",
" Cettia diphone",
" Phylloscopus inornatus",
" Phylloscopus borealis",
" Zosterops japonicus",
" Passer montanus",
" Dicrurus macrocercus",
" Dendrocitta formosae"
];

$('#bird_kind').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});



//submit跳轉
function jumptoloading(){
    location.href = "./loading.html";
}