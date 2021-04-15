Bootstrap was developed by Mark Otto and Jacob Thornton at Twitter, and released as an open source product in August 2011 on GitHub.

Download from : http://getbootstrap.com/

CDN:

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

Look Before You Leep
----------------------------

	1. html 5 doctype is a must for Bootstrap 3
	2. use lang attributre for html element.
	3. also do set the char set
	4. bootstrap is mobile-first.
	Thus add the view port conf as meta tag.
	
		<!DOCTYPE html>
		<html lang="en">
		  <head>
			<meta charset="utf-8"> 
			<meta name="viewport" content="width=device-width, initial-scale=1">
		  </head>
		</html>
		

Bootstrap Container classes
-------------------------------

	.container			creates a fixed width container
	.container-fluid	creates a full fixed width container
		
		
Grid classes
-------------------------
	
	row		will create a responsive row
	
	col-gridType-gridSize
		
		gridType
			xs (for phones - screens less than 768px wide)
			sm (for tablets - screens equal to or greater than 768px wide)
			md (for small laptops - screens equal to or greater than 992px wide)
			lg (for laptops and desktops - screens equal to or greater than 1200px wide)
		
		gridSize	from 1 to 12.
		
Bootstrap Typography
--------------------

	<h1> - <h6>
	<small>
	<mark>
	<abbr>
	<blockquote>
	.blockquote-reverse
	<dl>,<dt>,<dd>
	<code>
	<kbd>
	
	.text-muted
	.text-primary
	.text-success
	.text-info
	.text-warning
	.text-danger
	
	.bg-primary
	.bg-success
	.bg-info
	.bg-warning
	.bg-danger

	.lead			Makes a paragraph stand out	   
	.small			Indicates smaller text (set to 85% of the size of the parent)	   
	.text-left		Indicates left-aligned text	   
	.text-center	Indicates center-aligned text	   
	.text-right		Indicates right-aligned text	   
	.text-justify	Indicates justified text	   
	.text-nowrap	Indicates no wrap text	   
	.text-lowercase	Indicates lowercased text	   
	.text-uppercase	Indicates uppercased text	   
	.text-capitalize	Indicates capitalized text	   
	.list-unstyled	Removes the default list-style and left margin on list items 
	.list-inline	Places all list items on a single line	   
	
Bootstrap tables  classes
-------------------------

	.table
	.table-striped
	.table-bordered
	.table-hover
	.table-condensed		saves spaces by reducing cell-padding
	.table-responsive		allows horizontal scrolling on small screens
	
	classes for tr and td for contexual formating
	---------------------------------------------
	.active		Applies the hover color to the table row or table cell
	.success	Indicates a successful or positive action
	.info		Indicates a neutral informative change or action
	.warning	Indicates a warning that might need attention
	.danger		Indicates a dangerous or potentially negative action
	
Bootstrap image formating classes
----------------------------------------
.img-rounded	Adds rounded corners to an image 
.img-circle		Shapes the image to a circle 
.img-thumbnail	Shapes the image to a thumbnail	
.img-responsive	Makes an image responsive 

Bootstrap button formating classes
------------------------------------------
	
	.btn
	.btn-default
	.btn-primary
	.btn-success
	.btn-info
	.btn-warning
	.btn-danger
	.btn-link
		
	.btn-group		groups a set of buttons in a packed contaienr.
	.btn-group-lg
	.btn-group-vertical
	.btn-group-justified
	
form styling
------------------------------
	.form-control	for form elements for auto bootstrap styling
	
	Bootstrap provides three types of form layouts:

		Vertical form 		(this is default)
		Inline form			.form-inline
		Horizontal form		Add class .form-horizontal to the <form> element
							Add class .control-label to all <label> elements
	
	Standard rules for all three form layouts:

		Wrap labels and form controls in <div class="form-group"> (needed for optimum spacing)
		Add class .form-control to all textual <input>, <textarea>, and <select> elements

	
Special Contaienrs
----------------------------------
 .jumbotron 	 displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
 
 .well class adds a rounded border around an element with a gray background color and some padding:

	alert alert-success
	alert alert-info
	alert alert-warning
	alert alert-danger
		
		will create a closable alert container, add
		fade and in classes for fade effects.
		
Creating a pagination bar
------------------------------------

<ul class="pagination">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
</ul>

More about grid system (updated from bootstrap4)
-------------------------------------

Auto-layout columns

<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      1 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      1 of 3
    </div>
  </div>
</div>

Setting one column width
	
<div class="container">
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-6">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-5">
      2 of 3 (wider)
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>

Variable width content

<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3
    </div>
    <div class="col-12 col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col-12 col-md-auto">
      Variable width content
    </div>
    <div class="col col-lg-2">
      3 of 3
    </div>
  </div>
</div>

Align cols in a row
-------------------------------

<div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>

Offset - move the columns to a disired cell start
------------------------------------------------------

<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
</div>
<div class="row">
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
</div>
<div class="row">
  <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
</div>
