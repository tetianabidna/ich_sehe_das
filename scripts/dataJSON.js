// An array with objects that are made out of image informations
// The array is in json defined
let dataJSON = [
   {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/dinosaurier_orig.jpeg",
      "imgClonePath": "assets/imgForPlay/dinosaurier_copy.jpeg",
      "imgWidth": 407,
      "imgHeight": 460,
      "coordinatesOfDifferences": [
        {"x": 145, "y": 277}, // 1. Bär Bauch
        {"x": 67, "y": 210},  // 2. Dino Zahn
        {"x": 166, "y": 217},  // 3. Bär Nase
        {"x": 141, "y": 350},  // 4. Tieger Bauch
        {"x": 47, "y": 341},  // 5. Tieger Schwanz
        {"x": 208, "y": 192},  // 6. Stein Ornament
        {"x": 272, "y": 333}  // 7. Fuchs Kleid
      ]
    },
    {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/mark_orig.png",
      "imgClonePath": "assets/imgForPlay/mark_copy.png",
      "imgWidth": 716,
      "imgHeight": 792,
      "coordinatesOfDifferences": [
        {"x": 300, "y": 650},	// 1. Schuhe
        {"x": 96, "y": 554}, // 2. Buch Punkt
        {"x": 629, "y": 475},	// 3. Buch Streifen
        {"x": 417, "y": 675}, // 4. Lesezeichen
        {"x": 374, "y": 196},  // 5. Augenbraun
        {"x": 240, "y": 562},  // 6. Buch Seiten
        {"x": 261, "y": 426}  // 7. Hauptbuch Farbe 
      ]
    },
	{
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/dog_orig.png",
      "imgClonePath": "assets/imgForPlay/dog_copy.png",
      "imgWidth": 1000,
      "imgHeight": 1100,
      "coordinatesOfDifferences": [
        {"x": 612, "y": 800},	// 1. Fehlende Falte am Pfote
        {"x": 513, "y": 499}, // 2. Halsband
        {"x": 100, "y": 887},	// 3. Blumenfarbe
        {"x": 800, "y": 1027}, // 4. Fehlende Blume
        {"x": 659, "y": 431},  // 5. Fehlender Punkt
        {"x": 403, "y": 917},  // 6. Fehlende Linie
        {"x": 515, "y": 115},  // 7. Farbe der Schnabel 
		{"x": 239, "y": 588},  // 8. Graues Haar links 
      ]
    },
    {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/skulptur_orig.png",
      "imgClonePath": "assets/imgForPlay/skulptur_copy.png",
      "imgWidth": 600,
      "imgHeight": 750,
      "coordinatesOfDifferences": [
        {"x": 144, "y": 628},	// 1. Skulptur Fuss
        {"x": 229, "y": 472}, // 2. Skulptur Zähne
        {"x": 419, "y": 418},	// 3. Hose
        {"x": 429, "y": 352}, // 4. T-shirt
        {"x": 343, "y": 423},  // 5. Tasche Hose
        {"x": 203, "y": 587},  // 6. Skulptur Fuss
        {"x": 114, "y": 284},  // 7. Skulptur Stock
        {"x": 159, "y": 181},  // 8. Hammer
        {"x": 275, "y": 432},  // 9. Skulptur Nase
        {"x": 372, "y": 285}  // 10. Zunge  
      ]
    },
    {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/bauernhof_orig.png",
      "imgClonePath": "assets/imgForPlay/bauernhof_copy.png",
      "imgWidth": 669,
      "imgHeight": 732,
      "coordinatesOfDifferences": [
        {"x": 235, "y": 509},	// 1. Träger
        {"x": 524, "y": 348}, // 2. Haus
        {"x": 354, "y": 561},	// 3. Junge vorne Haare
        {"x": 552, "y": 435}, // 4. Pferd Fleck
        {"x": 598, "y": 364},  // 5. Pferdeschwanz
        {"x": 56, "y": 552},  // 6. Hähnchen Flügel
        {"x": 618, "y": 482},  // 7. Holz
        {"x": 379, "y": 288},  // 8. Schwein Blume
        {"x": 340, "y": 154},  // 9. Flugzeug Farbe
        {"x": 51, "y": 343},  // 10. Wolke  
        {"x": 197, "y": 143}  // 11. Raabe Richtung  
      ]
    },
    {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/galaxy_orig.png",
      "imgClonePath": "assets/imgForPlay/galaxy_copy.png",
      "imgWidth": 700,
      "imgHeight": 800,
      "coordinatesOfDifferences": [
        {"x": 168, "y": 486},	// 1. Junge umgedreht
        {"x": 251, "y": 633}, // 2. Ufo Licht
        {"x": 354, "y": 524},	// 3. Stiefelfarbe
        {"x": 485, "y": 580}, // 4. ufo fehlt
        {"x": 387, "y": 296},  // 5. haarfarbe
        {"x": 291, "y": 427},  // 6. steinfarbe
        {"x": 499, "y": 303},  // 7. Farbe
		{"x": 311, "y": 288},	// 8. Ein Auge nur
        {"x": 447, "y": 219}, // 9. Stein extra
        {"x": 115, "y": 368},  // 10. Farbe
        {"x": 277, "y": 219},  // 11. Schuhsohle
        {"x": 232, "y": 331},  // 12. Nase des Hundes
		{"x": 418, "y": 518}  // 13. Jetpack
      ]
    },
    {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/zeitreise_orig.png",
      "imgClonePath": "assets/imgForPlay/zeitreise_copy.png",
      "imgWidth": 600,
      "imgHeight": 700,
      "coordinatesOfDifferences": [
        {"x": 365, "y": 180},	// 1. Stern
        {"x": 473, "y": 469}, // 2. Krone
        {"x": 358, "y": 486},	// 3. Mond auf dem Stein
        {"x": 131, "y": 269}, // 4. Fehlende Säule am Totem
        {"x": 352, "y": 277},  // 5. Falten am Stirn
        {"x": 263, "y": 447},  // 6. Fehlende Buttons
        {"x": 177, "y": 435},  // 7. Totemfarbe
		{"x": 169, "y": 374},	// 8. Totem Zähne
        {"x": 289, "y": 314}, // 9. Fehlende Reflektion
        {"x": 345, "y": 371},  // 10. Krawattenfarbe
        {"x": 416, "y": 427},  // 11. Knopffarbe
        {"x": 212, "y": 299},  // 12. Schildfarbe
		{"x": 274, "y": 199}  // 13. Speerkopf
      ]
    
	},
    {
      "type": "Image",
      "imgOriginalPath": "assets/imgForPlay/jeep_orig.png",
      "imgClonePath": "assets/imgForPlay/jeep_copy.png",
      "imgWidth": 700,
      "imgHeight": 800,
      "coordinatesOfDifferences": [
        {"x": 501, "y": 23},	// 1. Hut
        {"x": 460, "y": 166}, // 2. Schnurbart
        {"x": 422, "y": 333},	// 3. Lenkrad
        {"x": 540, "y": 205}, // 4. Halsband
        {"x": 322, "y": 161},  // 5. Fernglas
        {"x": 655, "y": 610},  // 6. Rad hinten links
        {"x": 81, "y": 640},  // 7. Rad vorne rechts
		{"x": 37, "y": 469},	// 8. Zebralinie
        {"x": 299, "y": 443}, // 9. Scheinwerfer
        {"x": 197, "y": 577},  // 10. Kennschild
        {"x": 534, "y": 483},  // 11. Auto Seitenfarbe
        {"x": 446, "y": 436},  // 12. Zebralinie
		{"x": 188, "y": 469},  // 13. Logo 
		{"x": 564, "y": 620}  // 14. Autoseite 
      ]
    }
];

// Return an object(image information) from the json array that has the corresponding infoObjectIndex
function getSceneInfo(infoObjectIndex){
	return dataJSON[infoObjectIndex];
}

// Return an array with every image information in it
function getDataJSON(){
	return dataJSON;
}