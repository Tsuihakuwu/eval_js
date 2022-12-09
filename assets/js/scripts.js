//////////////////////////////////////////// Fonctions utilitaires ////////////////////////////////////////////

//Switch affichage de deux classes d'éléments
function display_switch(item1, item2) {
    for (i = 0; i < document.getElementsByClassName(item1).length; i++) {
        document.getElementsByClassName(item1)[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName(item2).length; i++) {
        document.getElementsByClassName(item2)[i].style.display = "inline";
    }
}

//set multiples attributes en une ligne
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

///////////////////////////////////////////////////// Ex1 /////////////////////////////////////////////////////

// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux

// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

// Le programme doit demander les âges successifs.

// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

// Donnez le programme Javascript correspondant qui affiche les résultats.

// //Event listener
evjs_ex1_sb1.addEventListener("click", function(){sb_entry1_evjs_ex1()});

var my_array_evjs_ex1 = [];
var dynidx = 0;

function sb_entry1_evjs_ex1() {
    if (parseInt(document.getElementById("evjs_ex1_inp").value) == 0) {
        document.getElementById('evjs_ex1_op2').innerHTML = "La valeur saisie doit être differente de zéro.";
    }
    else if (parseInt(document.getElementById("evjs_ex1_inp").value) != 0) {
        document.getElementById('evjs_ex1_sb1').setAttribute("style", "display:none;");
        add_input_evjs_ex1();
    }
}

function add_input_evjs_ex1() {
    if (dynidx == 0) {
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        button = document.createElement('input');
        document.getElementById("evjs_ex1_op2").appendChild(label);
        var idxtmp = dynidx+2;
        label.innerHTML = "Entrée n°" + idxtmp + " : ";
        document.getElementById("evjs_ex1_op2").appendChild(input);
        document.getElementById("evjs_ex1_op2").appendChild(button);
        document.getElementById("evjs_ex1_op2").appendChild(br);
        setAttributes(button, { 'class': 'evjs_ex1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'evjs_ex1_button' + dynidx, 'onclick': 'sb_dynentry_evjs_ex1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'evjs_ex1_i', 'type': 'number', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'evjs_ex1_input' + dynidx });
        my_array_evjs_ex1[dynidx] = parseInt(document.getElementById('evjs_ex1_inp').value);
        dynidx++;
    }
    else if (dynidx > 0) {
        input = document.createElement('input');
        label = document.createElement('label');
        br = document.createElement('br');
        button = document.createElement('input');
        document.getElementById("evjs_ex1_op2").appendChild(label);
        var idxtmp = dynidx+2;
        label.innerHTML = "Entrée n°" + idxtmp + " : ";
        document.getElementById("evjs_ex1_op2").appendChild(input);
        document.getElementById("evjs_ex1_op2").appendChild(button);
        document.getElementById("evjs_ex1_op2").appendChild(br);
        setAttributes(button, { 'class': 'evjs_ex1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'evjs_ex1_button' + dynidx, 'onclick': 'sb_dynentry_evjs_ex1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'evjs_ex1_i', 'type': 'number', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'evjs_ex1_input' + dynidx });
        var idxtmp2 = dynidx-1;
        my_array_evjs_ex1[dynidx] = parseInt(document.getElementById('evjs_ex1_input' + idxtmp2).value);
        for(i=0;i<my_array_evjs_ex1.length;i++){
            var tmp = dynidx-1;
            document.getElementById('evjs_ex1_button' + tmp).setAttribute("style","display:none")
        }
        dynidx++;
    }
}

function sb_dynentry_evjs_ex1(dynidx) {
    if (parseInt(document.getElementById('evjs_ex1_input' + dynidx).value) >= 100) {
        document.getElementById('evjs_ex1_op2').innerHTML = "";
        display_switch("evjs_ex1_sb1","");
        var arrayLength_evjs_ex1 = my_array_evjs_ex1.length;
        var table_evjs_ex1 = document.createElement('table');
        setAttributes(table_evjs_ex1,{"id":"tb_evjs_ex1"})
        var en = 0;
        var ado = 0;
        var adu = 0;
        var age = 0;

        var pa = 0;
        for (var i=0, tr, td1, td2, td3; i < arrayLength_evjs_ex1; i++) {
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td3 = document.createElement('td');
            td1.appendChild(document.createTextNode(i + 1));
            td2.appendChild(document.createTextNode(my_array_evjs_ex1[i]));
            if(my_array_evjs_ex1[i]<11){
                td3.appendChild(document.createTextNode('Enfant'));
                setAttributes(td3,{"style":"color:purple"})
                en++;
            }
            else if(my_array_evjs_ex1[i]>=11&&my_array_evjs_ex1[i]<18){
                td3.appendChild(document.createTextNode('Adolescent'));
                setAttributes(td3,{"style":"color:blue"})
                ado++;
            }
            else if(my_array_evjs_ex1[i]>18&&my_array_evjs_ex1[i]<=60){
                td3.appendChild(document.createTextNode('Adulte'));
                setAttributes(td3,{"style":"color:green"})
                adu++;
            }
            else if(my_array_evjs_ex1[i]>60){
                td3.appendChild(document.createTextNode('Agé'));
                setAttributes(td3,{"style":"color:red"})
                age++;
            }
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table_evjs_ex1.appendChild(tr);
            setAttributes(tr, { "id": "tr" + i });
        }
        br = document.createElement('br');
        document.getElementById("evjs_ex1_op2").appendChild(table_evjs_ex1);
        document.getElementById("evjs_ex1_op2").appendChild(br);
        setAttributes(table_evjs_ex1, { "border": "2", "width": "249px" });
        if(en>1){var mult_en = 's';}
        else {var mult_en = '';}
        if(ado>1){var mult_ado = 's';}
        else {var mult_ado = '';}
        if(adu>1){var mult_adu = 's';}
        else {var mult_adu = '';}
        if(age>1){var mult_age = 's';}
        else {var mult_age = '';}
        var res = "Les entrées contiennent "+ en + " enfant"+mult_en+", "+ ado +" adolescent"+mult_ado+", "+ adu + " adulte"+mult_adu+", "+" et " + age + " personne"+mult_age+" agée"+mult_age+".";
        p = document.createElement('p');
        p.appendChild(document.createTextNode(res));
        document.getElementById("evjs_ex1_op2").appendChild(p);
    }
    else if (parseInt(document.getElementById('evjs_ex1_input' + dynidx).value) < 100) {
        my_array_evjs_ex1[dynidx+1] = parseInt(document.getElementById('evjs_ex1_input' + dynidx).value);
        add_input_evjs_ex1();
    }
}

///////////////////////////////////////////////////// Ex2 /////////////////////////////////////////////////////

// Exercice 2 : Table de multiplication

// Ecrivez une fonction qui affiche une table de multiplication.

// Votre fonction doit prendre un paramètre qui permet d'indiquer quelle table afficher.

// Par exemple, TableMultiplication(7) doit afficher :

// 1 x 7 = 7

// 2 x 7 = 14

// 3 x 7 = 21 ...

//Event Listener
evjs_ex2_sb.addEventListener("click", function(){evjs_ex2(parseInt(document.getElementById('evjs_ex2_inp').value))});

function evjs_ex2(inp_table) {
    document.getElementById("evjs_ex2_op").innerHTML = "";
    var n = inp_table;
    for (var i = 0; i - 1 < 10; i++) {
        let res = i * n;
        document.getElementById("evjs_ex2_op").innerHTML = document.getElementById("evjs_ex2_op").innerHTML + "<br/>" + n + " " + " x " + " " + i + " = " + res;
    }
}

///////////////////////////////////////////////////// Ex3 /////////////////////////////////////////////////////

// Exercice 3 : recherche d'un prénom

// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

//  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )

