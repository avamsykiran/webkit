
   var items =[];
   
   computePrice = function(){
    price = $("#iqt").val() * $("#irt").val();
	$("#ipr").val(price);
   }
   
   loadItem = function(){
	item={}; //an empty JSON
	
	item.slno   = items.length+1;
	item.name   = $("#inm").val();
	item.rate   = parseFloat($("#irt").val());
	item.qty    = parseFloat($("#iqt").val());
	item.price  = parseFloat($("#ipr").val());
	items.push(item);
	
	resetForm();
	
	return item;
   }
   
   resetForm = function(){
	$("#inm").val("");
	$("#irt").val(0);
	$("#iqt").val(0);
	$("#ipr").val(0);   
   }
   
   removeItem = function(row){
	   index = $("#invTable tbody tr").index(currentRow);
	   items.splice(index,1);
	   currentRow.remove();
	   updateFooter();
   }
   
   appendItem = function(item){
	   
	   newTR = $("<tr></tr>");
	   newTR.append("<td>"+item.slno+"</td>");
	   newTR.append("<td>"+item.name+"</td>");
	   newTR.append("<td>"+item.rate+"</td>");
	   newTR.append("<td>"+item.qty+"</td>");	   
	   newTR.append("<td>"+item.price+"</td>");
	   
	   newButton = $("<button type='button'>DELETE</button>")
	   lastColumn = $("<td></td>");
	   lastColumn.append(newButton);

	   newTR.append(lastColumn);

	   $("#invTable tbody").append(newTR);
	   
	   newButton.click(function(){
		   currentRow = $(this).parent().parent();		   
		   removeItem(currentRow);
	   });
	  
   }
   
   updateFooter = function(){
	   $("#icount").text(items.length);
	   
	   billAmt = 0;
	   for(i=0;i<items.length;i++){
		   billAmt += items[i].price;
	   }
	   
	   $("#billAmt").text(billAmt);
   }
   
 $(document).ready(function(){
   resetForm();
      
   $("#irt").bind('change',computePrice);
   $("#iqt").bind('change',computePrice);
   
   $('#btnAdd').click(function(){
	item = loadItem();
	appendItem(item);
	updateFooter();
   });
 
 });