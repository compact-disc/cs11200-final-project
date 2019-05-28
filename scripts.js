var box = 0;
var bin = 0;
var pallet = 0;
var forklift = 0;

var quantityAdded;
var quantityRemoved;


function goToLoginScreen(){
    window.location.href = "login.html";
}

function backToHome(){
    window.location.href = "home.html";
}

function login(){
    
    if(loginInput.value == "username" && passwordInput.value == "password"){
        window.location.href = "home.html";
    }else{
        window.alert("Incorrect username and password combination");
    }
}


function checkForNan(){
    
    if(isNaN(box)){
        console.log("Checked 'box' for NaN")
        box = parseInt(box, 0)
        localStorage.setItem("boxStorage", 0)
        box = parseInt(localStorage.getItem("boxStorage"))
    }if(isNaN(bin)){
        console.log("Checked 'bin' for NaN")
        bin = parseInt(bin, 0)
        localStorage.setItem("binStorage", 0)
        bin = parseInt(localStorage.getItem("binStorage"))
    }if(isNaN(pallet)){
        console.log("Checked 'pallet' for NaN")
        pallet = parseInt(pallet, 0)
        localStorage.setItem("palletStorage", 0)
        pallet = parseInt(localStorage.getItem("palletStorage"))
    }if(isNaN(forklift)){
        console.log("Checked 'forklift' for NaN")
        forklift = parseInt(forklift, 0)
        localStorage.setItem("forkliftStorage", 0)
        forklift = parseInt(localStorage.getItem("forkliftStorage"))
    }else{
        console.log("No numbers checked for NaN")
    }
    
}

function load(){
    

    box = parseInt(localStorage.getItem("boxStorage"));
    console.log(localStorage.getItem("boxStorage"));
    
    bin = parseInt(localStorage.getItem("binStorage"));
    console.log(localStorage.getItem("binStorage"));
    
    pallet = parseInt(localStorage.getItem("palletStorage"));
    console.log(localStorage.getItem("palletStorage"));
    
    forklift = parseInt(localStorage.getItem("forkliftStorage"));
    console.log(localStorage.getItem("forkliftStorage"));
    
}

function addInventory(){
    
    if(addInventorySelect.value == "box"){
        quantityAdded = +document.getElementById("addInventoryBoxQuantity").value;
        
        box = quantityAdded + box;
        
        document.getElementById("addInventoryOutput").value = box;
        
        localStorage.setItem("boxStorage", box);
        console.log(localStorage.getItem("boxStorage"));
        
    }else if(addInventorySelect.value == "bin"){
        quantityAdded = +document.getElementById("addInventoryBoxQuantity").value;
        
        bin = quantityAdded + bin;
        
        document.getElementById("addInventoryOutput").value = bin;
        
        localStorage.setItem("binStorage", bin);
        console.log(localStorage.getItem("binStorage"));
        
    }else if(addInventorySelect.value == "pallet"){
        quantityAdded = +document.getElementById("addInventoryBoxQuantity").value;
        
        pallet = quantityAdded + pallet;
        
        document.getElementById("addInventoryOutput").value = pallet;
        
        localStorage.setItem("palletStorage", pallet);
        console.log(localStorage.getItem("palletStorage"));
        
    }else if(addInventorySelect.value == "forklift"){
        quantityAdded = +document.getElementById("addInventoryBoxQuantity").value;
        
        forklift = quantityAdded + forklift;
        
        document.getElementById("addInventoryOutput").value = forklift;
        
        localStorage.setItem("forkliftStorage", forklift);
        console.log(localStorage.getItem("forkliftStorage"));
    }
    
}

function removeInventory(){

    if(removeInventorySelect.value == "box"){
        quantityRemoved = +document.getElementById("removeInventoryBoxQuantity").value;
        
        box = box - quantityRemoved;
        
        document.getElementById("removeInventoryOutput").value = box;
        
        localStorage.setItem("boxStorage", box);
        console.log(localStorage.getItem("boxStorage"));
        
    }else if(removeInventorySelect.value == "bin"){
        quantityRemoved = +document.getElementById("removeInventoryBoxQuantity").value;
        
        bin = bin - quantityRemoved;
        
        document.getElementById("removeInventoryOutput").value = bin;
        
        localStorage.setItem("binStorage", bin);
        console.log(localStorage.getItem("binStorage"));
        
    }else if(removeInventorySelect.value == "pallet"){
        quantityRemoved = +document.getElementById("removeInventoryBoxQuantity").value;
        
        pallet = pallet - quantityRemoved;
        
        document.getElementById("removeInventoryOutput").value = pallet;
        
        localStorage.setItem("palletStorage", pallet);
        console.log(localStorage.getItem("palletStorage"));
        
    }else if(removeInventorySelect.value == "forklift"){
        quantityRemoved = +document.getElementById("removeInventoryBoxQuantity").value;
        
        forklift = forklift - quantityRemoved;
        
        document.getElementById("removeInventoryOutput").value = forklift;
        
        localStorage.setItem("forkliftStorage", forklift);
        console.log(localStorage.getItem("forkliftStorage"));
    }
    
}

function searchEntireInventory(){
    
    
    document.getElementById("searchBoxOutput").value = box;
    document.getElementById("searchBinOutput").value = bin;
    document.getElementById("searchPalletOutput").value = pallet;
    document.getElementById("searchForkliftOutput").value = forklift;
    console.log("Inventory Loaded!")
    
}