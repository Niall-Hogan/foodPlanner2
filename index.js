// Attributes =================================================================
let listOfRec = []; // list to hold all recipies
let shoppingList = [];
let mealList = [];


// constructor ================================================================
class Recipie {
    constructor(name, ingredients = [], type, method = []) {
        this.name = name;
        this.ingredients = ingredients;
        this.type = type;
        this.method = method;

    }
}



// Object creation - passed name and ingredients
let spagBol = new Recipie("Spaghetti Bolognaise", ["Pasta", "Chopped Tomatoes", "Mince","Onion","Garlic"],"<i id = typeTitle>Dinner</i>" ,["1. Fry chopped tomatoes, onion and garlic with mince \n 2. Boil Pasta \n 3. Add cheese"]);
let roastDinner = new Recipie("Roast Dinner", ["Sausage", "Gravy", "Potatoes", "Yorshire Pudidngs", "Frozen Veg"],"<i id = typeTitle>Dinner</i>",);
let baconEgg = new Recipie("Bacon and Egg ",["Bacon","Eggs","Bread"],"<i id = typeTitle>Breakfast</i>");
let baconBrie = new Recipie("Bacon and Brie ",["Bacon", "Brie", "Eggs"],"<i id = typeTitle>Lunch</i>");
let burrito = new Recipie("Burrito",["Wraps","Rice","Mince","Cheese","Lettuce","Jalapenos","Nachos"],"<i id = typeTitle>Dinner</i>")
let eggsAvo = new Recipie("Eggs Avocado Toast",["Eggs","Avocado","Bread"],"<i id = typeTitle>Breakfast</i>"); 
let scramEggs = new Recipie("Scrambled Eggs",["Eggs","Ham","Cheese"],"<i id = typeTitle>Breakfast</i>");
let carbonara = new Recipie("Carbonara",["Pasta","Bacon","Onion","Garlic", "Eggs"],"<i id = typeTitle> Breakfast</i>");
let hamCheese = new Recipie("Ham Cheese Sandwich",["Ham","Cheese","Bread"],"<i id = typeTitle>Lunch</i>");
let jacketPot = new Recipie("Jacket Potato",["Jacket Potoates", "Tuna","Cheese","Butter"],"<i id = typeTitle>Lunch</i>");
let stirFry = new Recipie("Stir fry noodles",["Egg Noodles", "Frozen Veg","Chicken","Soy Sauce", "Vinegar","Sugar","Sriracha","Eggs"],"<i id = typeTitle>Dinner</i>");

listOfRec.push(baconBrie,baconEgg,burrito,carbonara,eggsAvo,hamCheese,jacketPot,roastDinner,scramEggs,stirFry,spagBol);



// methods ====================================================================

// prints recipie
function printRec(x) {

    var text1 = x.name ;
    var text2 = "";
    var text3 = x.method;
    var text4 = x.type;
    
    
    for (i = 0; i < 1;i++)
    {
        text2 += "<h4 id = desct >Ingredients needed:</h4>";
       
        for (j = 0; j < x.ingredients.length; j++)
        {
         text2 += "<li>" + x.ingredients[j] + "</li>";
    
        }
    }
    
    document.getElementById("rTitle").innerHTML = text1;
    document.getElementById("typeTitle").innerHTML = text4;

    document.getElementById("ing").innerHTML = text2;
    document.getElementById("howToCook").innerHTML = text3;
   

}


function GetSelectedText () {

    
    var selText = "";
    if (window.getSelection) {  // all browsers, except IE before version 9
        if (document.activeElement && (document.activeElement.tagName.toLowerCase () == "textarea" || document.activeElement.tagName.toLowerCase () == "input")) 
        {
            var text = document.activeElement.value;
            selText = text.substring (document.activeElement.selectionStart, document.activeElement.selectionEnd);
        }
        else {
            var selRange = window.getSelection ();
            selText = selRange.toString ();
        }
    }
    else {
        if (document.selection.createRange) {       // Internet Explorer
            var range = document.selection.createRange ();
            selText = range.text;
        }
    }
    if (selText !== "") {
        
        document.getElementById("search").value = selText;

       
    }
}

//loops through list of recipies
function searchRec() {

    var found = false;
    var toSearch = document.getElementById("search").value;
        
    for (i = 0; i < listOfRec.length; i++) {
        var x = listOfRec[i];
        if (x.name == toSearch) {
            var found = true;
            printRec(x); // passing object to print function
            break;

        }

    }

    if (found == false) {
        alert("Not Found");
    }

}


// adds recipie to list DEFUNCT UNTIL DATABASE
function addRec() {

    var rName = document.getElementById("newRecName").value;
    var rIng = [] = document.getElementById("newRecIngs").value;

    var rIngs = rIng.split(',');
    let newRec = new Recipie(rName, rIngs);
    listOfRec.push(newRec);

    
    displayAllRec();
   



}

// Adds ingredients to shopping list and meal to meal list
function addShopping()
{
    var toSearch = document.getElementById("rTitle").innerHTML;
    
    
    for (i = 0; i < listOfRec.length; i++)
    {
        var x = listOfRec[i];
       
        if (x.name == toSearch) {

            mealList.push(x.name);

            for(j = 0; j < x.ingredients.length; j++)
            {                
                shoppingList.push(x.ingredients[j]);
            }
            checkDuplicate(x);
        }
    }
    
    printLists();
    
}


// removes ingredient already owned from shopping list
function ownedIngredient()
{

    var ing = document.getElementById("ownedIng").value;

    console.log(ing);

    for (i = 0; i < shoppingList.length;i++)
    {
        if (ing == shoppingList[i])
        {
            console.log("FOUND!")
            shoppingList.splice(i,1);
        }
    }
    printLists();


}

// checks for duplicate items in shopping and meal lists
function checkDuplicate(x)
{
    
    shoppingList.sort();
    mealList.sort();

    for (k= 0 ; k < shoppingList.length; k++)
    {
        if(shoppingList[k] == shoppingList[k+1])
        {
            console.log("found");
            shoppingList.splice(k,1);
            
        }
    }

    for (l= 0 ; l < mealList.length; l++)
    {
        if(mealList[l] == mealList[l+1])
        {
            console.log("found");
            mealList.splice(l,1);
            
        }
    }

}

// prints shopping and meal lists
function printLists()
{
    shoppingList.sort();
    
    document.getElementById("shopListBox").innerHTML= "";
    document.getElementById("Meals").innerHTML ="";

    for(k = 0; k < shoppingList.length; k++)
    
    {
        var y =  shoppingList[k];
        document.getElementById("shopListBox").innerHTML += y + "\n";
        
    }
    
    for(l = 0; l < mealList.length;l++)
    {
        var z = mealList[l]
        document.getElementById("Meals").innerHTML += z + "\n";
    }

}

// displays list of all recipies
function displayAllRec() {

    document.getElementById("allRecs").innerHTML = "";
    document.getElementById("allRecs").disabled = true;
    document.getElementById("shopListBox").disabled = true;
   

    for (i = 0; i < listOfRec.length; i++) {
        var x = listOfRec[i];
        
        document.getElementById("allRecs").innerHTML +=  x.name + "\n";
    }



}
