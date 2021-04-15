
		var inv = 
			[
				{ICode:101,ItemName:'Roses',Rate:'25',Unit:'Piece'},
				{ICode:102,ItemName:'Roses',Rate:'205',Unit:'Bunch'},
				{ICode:103,ItemName:'Roses',Rate:'520',Unit:'Bouquet'},
				{ICode:104,ItemName:'Tulips',Rate:'35',Unit:'Piece'},
				{ICode:105,ItemName:'Tulips',Rate:'250',Unit:'Bunch'},
				{ICode:106,ItemName:'Tulips',Rate:'600',Unit:'Bouquet'},
				{ICode:107,ItemName:'Daffodil',Rate:'45',Unit:'Piece'},
				{ICode:108,ItemName:'Daffodil',Rate:'150',Unit:'Bunch'},
				{ICode:109,ItemName:'Daffodil',Rate:'250',Unit:'Bouquet'}
			];
			
		var loadData = function(){
			
			var cb = $("#inm");
			
			$(inv).each(function(){
				var option = $("<option></option>");
				option.attr("value",this.Rate);
				option.text(this.ItemName+" "+this.Unit);
				cb.append(option);
			});
		}
		
		var loadRate = function(){
			$("#irt").val($('#inm').val());
		}
		
		var computePrice = function(){
			$("#ipr").val($('#irt').val()*$('#iqt').val());
		}
		
		var updateFooter=function(){
			$("#icount").text($("#invTable>tbody>tr").length);
			
			var billAmt =0;
			
			$("#invTable>tbody>tr td:nth-child(5)").each(function(){
				billAmt += parseFloat($(this).text());
			});
			
			$("#billAmt").text(billAmt);
		}
		
		var addItem = function(){
			var tableBody = $("#invTable>tbody");
			var row = $("<tr></tr>");
			
			var col1 = $("<td></td>"); 
			col1.text(tableBody.children("tr").length+1);
			var col2 = $("<td></td>");					
			col2.text($($("#inm").children("option")[$("#inm").prop("selectedIndex")]).text());
			var col3 = $("<td></td>");
			col3.text($("#irt").val());
			var col4 = $("<td></td>");
			col4.text($("#iqt").val());
			var col5 = $("<td></td>");
			col5.text($("#ipr").val());
			
			var removeBtn = $("<button></button>");
			removeBtn.text("remove");
			removeBtn.attr("type","button");
			removeBtn.click(function(){
				row.remove();
				updateFooter();
			});
			var col6 = $("<td></td>");			
			col6.append(removeBtn);
			
			row.append(col1);
			row.append(col2);
			row.append(col3);
			row.append(col4);
			row.append(col5);
			row.append(col6);
			row.appendTo(tableBody);
			
			updateFooter();
		}
		
		$(function(){
			loadData();
			$('#inm').change(loadRate);
			$('#iqt').change(computePrice);
			$('#inm').change(computePrice);
			$("#btnAdd").click(addItem);
		});