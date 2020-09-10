// Attributes =================================================================
let listOfRec = []; // list to hold all recipies
let shoppingList = [];
let mealList = [];


// constructor ================================================================
class Recipie {
    constructor(name, ingredients = [], type, method) {
        this.name = name;
        this.ingredients = ingredients;
        this.type = type;
        this.method = method;

    }
}



// Object creation - passed name and ingredients
let spagBol = new Recipie("Spaghetti Bolognaise", ["Pasta", "Chopped Tomatoes", "Mince","Onion","Garlic"],"<i id = typeTitle>Dinner</i>" ,"1. Fry onion and garlic with mince <br> 2. Boil pasta <br> 3. Add chopped tomatoes to mince until sauce is reduced <br> 4. Mix sauce and pasta <br> 5. Add cheese");
let roastDinner = new Recipie("Roast Dinner", ["Sausage", "Gravy", "Potatoes", "Yorshire Puddings", "Frozen Veg"],"<i id = typeTitle>Dinner</i>", "1. Peel potatoes and boil for 3 minutes, remove and place on baking tray <br> 2. Add oil and flower, place in oven for 20 mins, use water for gravy <br> 3. Fry sausages, when nearly done add frozen veg to pan <br> 4. Put yorkshires in the oven 5");
let baconEgg = new Recipie("Bacon and Egg Sandwich",["Bacon","Eggs","Bread"],"<i id = typeTitle>Breakfast</i>", "1. Fry bacon until crispy <br> 2. Lower heat and fry eggs <br> 3. Toast bread and then butter <br> 4. Assemble sandwich ");
let baconBrie = new Recipie("Bacon and Brie Sandwich",["Bacon", "Brie","Bread", "Eggs"],"<i id = typeTitle>Lunch</i>","1. Fry bacon until crispy <br> 2. Slice brie <br> 3. Toast bread and then butter <br> 4. Assemble sandwich");
let burrito = new Recipie("Burrito",["Wraps","Rice","Mince","Cheese","Lettuce","Jalapenos","Nachos"],"<i id = typeTitle>Dinner</i>","1. Fry mince, adding desired spices <br> 2. Boil rice, drain and add spices <br> 3. Dice lettuce and jalapenos <br> 4. Heat wraps for 10 seconds each side <br> 5. Roll burritos, serve with nachos and add cheese");
let eggsAvo = new Recipie("Eggs Avocado Toast",["Eggs","Avocado","Bread"],"<i id = typeTitle>Breakfast</i>", "1. Fry eggs <br> 2. Peel and slice avocado <br> 3. Toasts bread and butter <br> 4. Serve"); 
let scramEggs = new Recipie("Scrambled Eggs",["Eggs","Ham","Cheese"],"<i id = typeTitle>Breakfast</i>", "1. Crack eggs into pan, allow 1 minute cooking before scrambling <br> 2. Slice ham and add to eggs <br> 3. Serve with grated cheese");
let carbonara = new Recipie("Carbonara",["Pasta","Bacon","Onion","Garlic", "Eggs"],"<i id = typeTitle> Dinner</i>", "1. Fry bacon, dice and put to one side <br> 2. Boil pasta <br> 3. Fry diced onion and garlic <br> 4. Drain pasta, add bacon,onion and garlic to saucepan <br> 5. Place on low heat, crack eggs in and stir ");
let hamCheese = new Recipie("Ham Cheese Sandwich",["Ham","Cheese","Bread"],"<i id = typeTitle>Lunch</i>", "1. Toast and butter bread <br> 2. Add cheese and ham <br> 3. Place in pan to melt cheese");
let jacketPot = new Recipie("Jacket Potato",["Jacket Potoates", "Tuna","Cheese","Butter"],"<i id = typeTitle>Lunch</i>", "1. Half potato and place in oven <br> 2. Mix tuna with mayo <br> 3. Remove potoatoes, spread with butter <br> 4. Add tuna and cheese");
let stirFry = new Recipie("Stir fry noodles",["Egg Noodles", "Frozen Veg","Chicken","Soy Sauce", "Vinegar","Sugar","Sriracha","Eggs"],"<i id = typeTitle>Dinner</i>", "1. Mix soy sauce,vinegar, sriracha, water and sugar to taste <br> 2. Fry chicken <br> 3. Add frozen veg and sauce to chicken <br> 4. Boil noodles and add to pan <br> 5. Add eggs, stir fry and serve");

listOfRec.push(baconBrie,baconEgg,burrito,carbonara,eggsAvo,hamCheese,jacketPot,roastDinner,scramEggs,stirFry,spagBol);



// methods ====================================================================

// prints recipe
function printRec(x) {

    var text1 = x.name ;
    var text2 = "";
    var text3 = x.method;
    var text4 = x.type;
    var text5 = "<h4 id = desct ><br><br>Method:</h4>";
    var text6 = "<br><hr class = line>";
    
    
    for (i = 0; i < 1;i++)
    {
        text2 += "<h4 id = desct >Ingredients needed:</h4>";
       
        for (j = 0; j < x.ingredients.length; j++)
        {
         text2 += "<li>" + x.ingredients[j] + "</li>";
    
        }
    }
    
    document.getElementById("rTitle").innerHTML = text1;
    document.getElementById("typeTitle").innerHTML =text4;

    document.getElementById("ing").innerHTML =text2;
    document.getElementById("howToCook").innerHTML =  text6 + text5 + text3;
   

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

// adds recipe to list DEFUNCT UNTIL DATABASE
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
function removeIngredient()
{

    var ing = document.getElementById("ownedIng").value;


    for (i = 0; i < shoppingList.length;i++)
    {
        if (ing == shoppingList[i])
        {
            
            shoppingList.splice(i,1);
        }
    }
    printLists();


}

function addIngredient()
{

    var ing = document.getElementById("ownedIng").value;

    shoppingList.push(ing);

    checkDuplicate();
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
            
            shoppingList.splice(k,1);
            
        }
    }

    for (l= 0 ; l < mealList.length; l++)
    {
        if(mealList[l] == mealList[l+1])
        {
            
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
