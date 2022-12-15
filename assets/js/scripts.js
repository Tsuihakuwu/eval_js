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

//ne pas submit avec la touche enter pour tout les exercices
document.onkeydown = function () {
    if (window.event.keyCode == '13') {
        return false;
    }
}

///////////////////////////////////////////////////// Ex1 /////////////////////////////////////////////////////

// Exercice 1 - Calcul du nombre de jeunes, de moyens et de vieux

// Il s'agit de dénombrer les personnes d'âge strictement inférieur à 20 ans, les personnes d'âge strictement supérieur à 40 ans et celles dont l'âge est compris entre 20 ans et 40 ans (20 ans et 40 ans y compris).

// Le programme doit demander les âges successifs.

// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.

// Donnez le programme Javascript correspondant qui affiche les résultats.

// //Event listener
evjs_ex1_sb1.addEventListener("click", function () { sb_entry1_evjs_ex1() });

var my_array_evjs_ex1 = [];
var dynidx = 0;

function sb_entry1_evjs_ex1() {
    if (parseInt(document.getElementById("evjs_ex1_inp").value) <= 0 || isNaN(parseInt(document.getElementById("evjs_ex1_inp").value))) {
        document.getElementById('evjs_ex1_op2').innerHTML = "<small>La valeur saisie doit être supérieure à zéro et être un nombre</small>";
        document.getElementById('evjs_ex1_op2').setAttribute('class', 'text-danger text-center');
    }
    else if (parseInt(document.getElementById("evjs_ex1_inp").value) >= 100) {
        document.getElementById('evjs_ex1_op2').innerHTML = "<small>La valeur saisie doit être inférieure à cent</small>";
        document.getElementById('evjs_ex1_op2').setAttribute('class', 'text-danger text-center');
    }
    else if (parseInt(document.getElementById("evjs_ex1_inp").value) != 0) {
        document.getElementById('evjs_ex1_op2').setAttribute('class', 'text-dark');
        document.getElementById('evjs_ex1_op2').innerHTML = "";
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
        var idxtmp = dynidx + 2;
        label.innerHTML = "Entrée n°" + idxtmp + " :&nbsp";
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
        var idxtmp = dynidx + 2;
        label.innerHTML = "Entrée n°" + idxtmp + " :&nbsp";
        document.getElementById("evjs_ex1_op2").appendChild(input);
        document.getElementById("evjs_ex1_op2").appendChild(button);
        document.getElementById("evjs_ex1_op2").appendChild(br);
        setAttributes(button, { 'class': 'evjs_ex1_b', 'type': 'button', 'value': 'Envoyer', 'id': 'evjs_ex1_button' + dynidx, 'onclick': 'sb_dynentry_evjs_ex1(' + dynidx + ')' });
        setAttributes(input, { 'class': 'evjs_ex1_i', 'type': 'number', 'value': (Math.floor(Math.random(100) * 100)) + 1, 'id': 'evjs_ex1_input' + dynidx });
        var idxtmp2 = dynidx - 1;
        my_array_evjs_ex1[dynidx] = parseInt(document.getElementById('evjs_ex1_input' + idxtmp2).value);
        for (i = 0; i < my_array_evjs_ex1.length; i++) {
            var tmp = dynidx - 1;
            document.getElementById('evjs_ex1_button' + tmp).setAttribute("style", "display:none")
        }
        dynidx++;
    }
}

function sb_dynentry_evjs_ex1(dynidx) {
    if (parseInt(document.getElementById('evjs_ex1_input' + dynidx).value) >= 100) {
        document.getElementById('evjs_ex1_op2').innerHTML = "";
        display_switch("evjs_ex1_sb1", "");
        var arrayLength_evjs_ex1 = my_array_evjs_ex1.length;
        var table_evjs_ex1 = document.createElement('table');
        setAttributes(table_evjs_ex1, { "id": "tb_evjs_ex1", "class": "table" })
        var en = 0;
        var ado = 0;
        var adu = 0;
        var age = 0;

        var pa = 0;
        for (var i = 0, tr, td1, td2, td3; i < arrayLength_evjs_ex1; i++) {
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td2 = document.createElement('td');
            td3 = document.createElement('td');
            td1.appendChild(document.createTextNode(i + 1));
            td2.appendChild(document.createTextNode(my_array_evjs_ex1[i]));
            if (my_array_evjs_ex1[i] < 11) {
                td3.appendChild(document.createTextNode('Enfant'));
                setAttributes(td3, { "style": "color:purple" })
                en++;
            }
            else if (my_array_evjs_ex1[i] >= 11 && my_array_evjs_ex1[i] < 18) {
                td3.appendChild(document.createTextNode('Adolescent'));
                setAttributes(td3, { "style": "color:blue" })
                ado++;
            }
            else if (my_array_evjs_ex1[i] >= 18 && my_array_evjs_ex1[i] <= 60) {
                td3.appendChild(document.createTextNode('Adulte'));
                setAttributes(td3, { "style": "color:green" })
                adu++;
            }
            else if (my_array_evjs_ex1[i] > 60) {
                td3.appendChild(document.createTextNode('Agé'));
                setAttributes(td3, { "style": "color:red" })
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
        if (en > 1) { var mult_en = 's'; }
        else { var mult_en = ''; }
        if (ado > 1) { var mult_ado = 's'; }
        else { var mult_ado = ''; }
        if (adu > 1) { var mult_adu = 's'; }
        else { var mult_adu = ''; }
        if (age > 1) { var mult_age = 's'; }
        else { var mult_age = ''; }
        var res = "Les entrées contiennent " + en + " enfant" + mult_en + ", " + ado + " adolescent" + mult_ado + ", " + adu + " adulte" + mult_adu + ", " + " et " + age + " personne" + mult_age + " agée" + mult_age + ".";
        p = document.createElement('p');
        p.appendChild(document.createTextNode(res));
        document.getElementById("evjs_ex1_op2").appendChild(p);
    }
    else if (parseInt(document.getElementById('evjs_ex1_input' + dynidx).value) < 100) {
        my_array_evjs_ex1[dynidx + 1] = parseInt(document.getElementById('evjs_ex1_input' + dynidx).value);
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
evjs_ex2_sb.addEventListener("click", function () { evjs_ex2(parseInt(document.getElementById('evjs_ex2_inp').value)) });

function evjs_ex2(inp_table) {
    if (isNaN(parseInt(document.getElementById('evjs_ex2_inp').value))) {
        document.getElementById("evjs_ex2_op").innerHTML = "";
        document.getElementById("evjs_ex2_op").innerHTML = "<small>Erreur : L'entrée n'est pas un numérique</small>";
        setAttributes(document.getElementById("evjs_ex2_op"),{'class':'text-danger'});
    }
    else {
        document.getElementById("evjs_ex2_op").innerHTML = "";
        var n = inp_table;
        setAttributes(document.getElementById("evjs_ex2_op"),{'class':'text-dark text-center'});
        for (var i = 1; i - 1 < 10; i++) {
            let res = i * n;
            document.getElementById("evjs_ex2_op").innerHTML = document.getElementById("evjs_ex2_op").innerHTML + "<br/>" + n + " " + " x " + " " + i + " = " + res;
        }
    }
}

///////////////////////////////////////////////////// Ex3 /////////////////////////////////////////////////////

// Exercice 3 : recherche d'un prénom

// Un prénom est saisi au clavier. On le recherche dans le tableau tab donné ci-après.

// Si le prénom est trouvé, on l'élimine du tableau en décalant les cases qui le suivent, et en mettant à blanc la dernière case. Si le prénom n'est pas trouvé un message d'erreur apparait et aucun prénom ne se supprime.

//  var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

// ( exemple : ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "]; )

// //Event listener
window.addEventListener("load", function () { aff_tab() });
evjs_ex3_sb.addEventListener("click", function () { tb3_supp() });

var my_array_evjs_ex3 = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

function aff_tab() {
    var table_evjs_ex3 = document.createElement('table');
    for (var i = 0; i < my_array_evjs_ex3.length; i++) {
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        p = document.createElement('p');
        td1.appendChild(document.createTextNode(i + 1));
        td2.appendChild(document.createTextNode(my_array_evjs_ex3[i]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        table_evjs_ex3.appendChild(tr);
        setAttributes(tr, { "id": "tr" + i });
        document.getElementById("evjs_ex3_op").appendChild(table_evjs_ex3);
    }
    setAttributes(table_evjs_ex3, { "border": "2", "width": "249px", "id": "evjs_ex3_table", "class": "table my-3" });
}

function tb3_supp() {
    aex3_lgh = my_array_evjs_ex3.length;
    for (var i = 0; i < aex3_lgh; i++) {
        if (document.getElementById('evjs_ex3_inp').value.toLowerCase() == my_array_evjs_ex3[i].toLowerCase()) {
            //L'arnaque du siècle pour ne pas faire deux boucles 
            my_array_evjs_ex3.splice(i, 1);
            my_array_evjs_ex3.push('');
            document.getElementById('evjs_ex3_er').innerHTML = "";
            break;
        }
        else {
            document.getElementById('evjs_ex3_er').innerHTML = "Erreur : Aucune correspondance dans le tableau !";
        }
    }
    document.getElementById('evjs_ex3_op').innerHTML = "";
    aff_tab();
}

///////////////////////////////////////////////////// Ex4 /////////////////////////////////////////////////////

// Exercice 4 : total d'une commande

// A partir de la saisie du prix unitaire noté PU d'un produit et de la quantité commandée QTECOM, afficher le prix à payer PAP, en détaillant la remise REM et le port PORT, sachant que :

//     TOT = ( PU * QTECOM )
//     la remise est de 5% si TOT est compris entre 100 et 200 € et de 10% au-delà
//     le port est gratuit si le prix des produits ( le total remisé ) est supérieur à 500 €. Dans le cas contraire, le port est de 2%
//     la valeur minimale du port à payer est de 6 €

// Testez tous les cas possibles afin de vous assurez que votre script fonctionne.

// Ci-dessous, un jeu de tests :

//     Saisir 600 € et quantité = 1 : remise 10% (-60 €) soit 540,00 et frais port = 0; à payer : 540 €
//     Saisir 501 € et quantité = 1 : remise 10% (-50,1 €) soit 450,90 et frais port 2% (de 450,90 €) soit +9,01 € ; à payer : 450,90+9.01 = 459,91 €.
//     Saisir 100 € et quantité = 2 : 200 € donc remise 5% soit 190 € et frais de port 2% soit 3,8 € mini 6 €; à payer : 190+6 = 196 €
//     Saisir 3 € et quantité = 1 : remise 0, frais de port 2% soit 0.06 € donc le minimum de 6 € s'applique; à payer : 3+6 = 9 €

//Event listener
evjs_ex4_sb.addEventListener("click", function () { calculpap() });

var pu, qtecom, tot, pap, rem, port = 0;

function calculpap() {

    document.getElementById('evjs_ex4_erpu').innerHTML = "";
    document.getElementById('evjs_ex4_erqt').innerHTML = "";

    //Gestion exception NaN dans les champs
    if (isNaN(parseInt(document.getElementById('evjs_ex4_inp1').value)) || isNaN(parseInt(document.getElementById('evjs_ex4_inp2').value))) {
        if (isNaN(parseInt(document.getElementById('evjs_ex4_inp1').value))) {
            document.getElementById('evjs_ex4_erpu').innerHTML = "Veuillez entrer un prix valide";
        }
        if (isNaN(parseInt(document.getElementById('evjs_ex4_inp2').value))) {
            document.getElementById('evjs_ex4_erqt').innerHTML = "Veuillez entrer une quantité valide";
        }
        return false;
    }
    //Gestion exception 0 dans les champs
    if (parseInt(document.getElementById('evjs_ex4_inp2').value)==0 || parseInt(document.getElementById('evjs_ex4_inp1').value)==0) {
        if (parseInt(document.getElementById('evjs_ex4_inp1').value)==0) {
            document.getElementById('evjs_ex4_erpu').innerHTML = "Veuillez entrer un prix valide";
        }
        if (parseInt(document.getElementById('evjs_ex4_inp2').value)==0) {
            document.getElementById('evjs_ex4_erqt').innerHTML = "Veuillez entrer une quantité valide";
        }
        return false;
    }

    pu = parseInt(document.getElementById('evjs_ex4_inp1').value);
    qtecom = parseInt(document.getElementById('evjs_ex4_inp2').value);

    tot = pu * qtecom;

    //calcul pourentage de remise
    if (tot > 200) { rem = 10; }
    else if (tot >= 100 && tot <= 200) { rem = 5 }
    else { rem = 0 }
    //calcul du prix total avec remise
    var calc_rem = ((tot * rem) / 100);
    var tot_rem = tot - calc_rem;
    //calcul des frais de port
    if (tot_rem >= 500) { port = 0 }
    else { port = Math.round(((tot_rem * 2) / 100) * 100) / 100 }
    //frais de port minimaux
    if (((tot_rem * 2) / 100) < 6) { port = 6 }
    //Calcul prix final à payer
    pap = tot_rem + port;

    //clear
    document.getElementById('evjs_ex4_op').innerHTML = "";
    //Affichage total de base
    document.getElementById('evjs_ex4_op').innerHTML += "Total de la commande : " + tot + "€<br>";
    //Si il y a une remise
    if (rem != 0) { document.getElementById('evjs_ex4_op').innerHTML += "Vous bénéficiez d'une remise de " + rem + "% <br>(soit <b>" + calc_rem + "€</b> d'économisé !)<br>"; }
    //Si les frais de ports sont offerts
    if (port == 0) { document.getElementById('evjs_ex4_op').innerHTML += "Les frais de port vous sont offert !<br>" }
    //Si les frais de port sont forcés au minimum
    else if (port == 6) { document.getElementById('evjs_ex4_op').innerHTML += "Les frais de port minimum s'appliquent (" + port + "€)<br>" }
    //Affichage des frais de port dans le cas contraire
    else { document.getElementById('evjs_ex4_op').innerHTML += "Les frais de port sont d'un montant de " + port + "€<br>" }
    roundpap = Math.round(pap * 100) / 100;
    document.getElementById('evjs_ex4_op').innerHTML += "Total à régler : " + roundpap + "€<br>";
}

///////////////////////////////////////////////////// Ex5 /////////////////////////////////////////////////////

//Formulaire Jarditou

//Event listener
evjs_jarditou_sb.addEventListener("click", function () { form_valid_jarditou(document.getElementById('evjs_ex5')) });

function tored(id) { document.getElementById(id).setAttribute('style', 'color:red') }

function togreen(id) { document.getElementById(id).setAttribute('style', 'color:green') }

function form_valid_jarditou(myForm) {

    regex_nom = /[a-zA-Z]/g;
    regex_prenom = regex_nom;
    regex_ddn = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    regex_cp = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/ //Remplacé par un meilleur regex qui filtre uniquement les format code postaux valide en France (01 à 98)
    regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (regex_nom.test(myForm.elements['nom'].value)) {
        document.getElementById('er_nom').innerHTML = "Le champ est valide";
        document.getElementById('er_nom').setAttribute("class", "text-success error");
    }
    else {
        document.getElementById('er_nom').innerHTML = "Veuillez entrer votre nom";
        document.getElementById('er_nom').setAttribute("class", "text-danger error");
    }

    if (regex_nom.test(myForm.elements['prenom'].value)) {
        document.getElementById('er_prenom').innerHTML = " Le champ est valide";
        document.getElementById('er_prenom').setAttribute("class", "text-success error");
    }
    else {
        document.getElementById('er_prenom').innerHTML = " Veuillez entrer votre prénom";
        document.getElementById('er_prenom').setAttribute("class", "text-danger error");
    }

    if (regex_ddn.test(myForm.elements['ddn'].value)) {
        document.getElementById('er_ddn').innerHTML = " Le champ est valide";
        document.getElementById('er_ddn').setAttribute("class", "text-success error");
    }
    else {
        document.getElementById('er_ddn').innerHTML = " Veuillez entrer une date de naissance valide";
        document.getElementById('er_ddn').setAttribute("class", "text-danger error");
    }
    //Contrôle si la date est supérieur à aujourd'hui pour erreur
    var startDate = Date.parse(document.getElementById('ddn').value);
    var today = new Date();
    if (!isNaN(startDate) && startDate > today.getTime()) {
        document.getElementById('er_ddn').innerHTML = " Veuillez entrer une date de naissance valide";
        document.getElementById('er_ddn').setAttribute("class", "text-danger error");
    }

    if (regex_cp.test(myForm.elements['cp'].value)) {
        document.getElementById('er_cp').innerHTML = " Le champ est valide";
        document.getElementById('er_cp').setAttribute("class", "text-success error");
    }
    else {
        document.getElementById('er_cp').innerHTML = " Veuillez entrer un code postal valide (Format 00000)";
        document.getElementById('er_cp').setAttribute("class", "text-danger error");
    }

    if (regex_email.test(myForm.elements['email'].value)) {
        document.getElementById('er_mail').innerHTML = " Le champ est valide";
        document.getElementById('er_mail').setAttribute("class", "text-success error");
    }
    else {
        document.getElementById('er_mail').innerHTML = " Veuillez entre une adresse mail valide (Format utilisateur@societe.dom)";
        document.getElementById('er_mail').setAttribute("class", "text-danger error");
    }

    if (document.getElementById('sujet').value == '') {
        document.getElementById('er_sujet').innerHTML = "Veuillez renseigner le sujet de votre demande";
        document.getElementById('er_sujet').setAttribute("class", "text-danger error");
    }
    else {
        document.getElementById('er_sujet').innerHTML = " Le champ est valide";
        document.getElementById('er_sujet').setAttribute("class", "text-success error");
    }

    if (document.getElementById('question').value == '') {
        document.getElementById('er_quest').innerHTML = "Veuillez saisir votre question";
        document.getElementById('er_quest').setAttribute("class", "text-danger error");
    }
    else {
        document.getElementById('er_quest').innerHTML = " Le champ est valide";
        document.getElementById('er_quest').setAttribute("class", "text-success error");
    }

    if (!myForm.accept.checked) {
        document.getElementById('er_accept').innerHTML = "Veuillez accepter le traitement informatique de ce formulaire";
        document.getElementById('er_accept').setAttribute("class", "text-danger error_left");
    }
    else {
        document.getElementById('er_accept').innerHTML = "Conditions d'utilisation acceptées";
        document.getElementById('er_accept').setAttribute("class", "text-success error_left");
    }
    return false;
}