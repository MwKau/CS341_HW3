// Zhi Chen
// I couldn't get Spec 5 working, the splitting up between functions and events seemed to break my code.
$(document).ready(function(){

    // Events
    $("#month_dropdown").click(function(){
        var e = document.getElementById("month_dropdown_list");
        var month = e.options[e.selectedIndex].text;
        $("#month_dropdown_current").text(month);

        
        // Recieve object response
        var toppingData = $.post('/orders');

        $("#cherry_history").text(String(toppingData[0].quantity) + "Cherry");
        $("#plain_history").text(String(toppingData[1].quantity) + "Plain");
        $("#chocolate_history").text(String(toppingData[2].quantity) + "Chocolate");
    });


    $("#sumbit_order").click(function(){
        // Find if vegan
        var orderText = $("textarea#custom_instructions").val();
        var isVegan = orderText.indexOf("vegan");
        var topping = $("input[name='topping']:checked").val();
        var quantity = $("#topping_quantity").val();

        // If vegan was found in text, display an alert, otherwise update page
        if (isVegan != -1) {
            alert("The cheesecake contain dairy")
        } else {
            // Change shown elements
            $("#order_form").hide();
            $("#order_result").show();

            // Fills out order info
            $("#returned_topping").text("Your topping: " + topping);
            $("#returned_quantity").text("Your quantity: " + quantity);
            $("#returned_notes").text("Your notes: " + orderText);
        }

    });

});