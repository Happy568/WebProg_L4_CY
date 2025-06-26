document.getElementById("calculate").addEventListener("click", function() {

   
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters").value);
    
        
        var totalCost = costPerLiter * litersPurchased;
    
            
            document.getElementById("total-cost").textContent = "Total cost: AED" + totalCost.toFixed(2);
});


document.getElementById("dark-mode-toggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});