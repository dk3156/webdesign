$(document).ready(function(){

    var itemID = 0;
    var openingSegment = '<div class="row"><div class="col-md-1"></div><div class="col-md-10"><div class="input-group">';
    var closingSegment = '</div></div><div class="col-md-1"></div></div>';


    $("#newTask").focus();

    $("#newTaskBTN").click(function(){
        var newTaskValue = $("#newTask").val();
        addNewTask(newTaskValue);
    });


    $("#newTask").keypress(function(e){
        if(e.keyCode == 13){
            var newTaskValue = $("#newTask").val();
            addNewTask(newTaskValue);
        }
    });

    function resetEvents(){
        $(".completeBTN").unbind("click");
        $(".deleteBTN").unbind("click");
    }

    function bindEvents(){
        resetEvents();

        $(".completeBTN").on('click', function(){
            var valueID = $(this).attr("id").split("_");
            $("#"+valueID[1]).css("text-decoration","line-through");

            $(this).attr("disabled", true);
            $("#remove_"+valueID[1]).attr("disabled", true);
        });

        $(".deleteBTN").click(function(){

        });
    }

    function addNewTask(newTaskValue){
        newTaskValue = newTaskValue.trim();
        if(newTaskValue !=""){
            
            var newEntry = '<input id="' + itemID + '"type="text" class="form-control" placeholder="To do Task" aria-label="To Do App" value="'+ newTaskValue +'" disabled>';

            var b1 = '<button id="status_' + itemID + '"class="btn btn-success completeBTN" type="button"><i class="bi bi-check-circle"></i></button>';

            var b2 = '<button id="remove_' + itemID + '"class="btn btn-danger deleteBTN" type="button"><i class="bi bi-trash3"></i></button>';

            var temp = openingSegment + newEntry + b1 + b2 + closingSegment;
            $(".container").append(temp);

            $("#newTask").val("");
            bindEvents();

            itemID++;
        }
        else
        {
            alert("Please enter a task! >.<");
        }
        
    }
});