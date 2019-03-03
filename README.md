# Jquery Gallery Plugin


**How to use:**

You may test by just hosting locally on your machine and see how it works.

Implement in own project:

**- Step 1:**

Copy over the jquery331min.js file to your project folder.

**- Step 2:**

Copy over the JqueryGalleryPlugin.js file to your project folder.

**- Step 3:**

Link jquery331min.js and JqueryGalleryPlugin.js to your HTML file.

Like so:  

```
<body>
	<!-- HTML Markup here -->
	<script src="jquery331min.js" ></script>
	<script src="JqueryGalleryPlugin.js" ></script>
</body>
```

**- Step 4:**

Make a wrapper around your images, like so:
```
<div class="gallery" id="galleryContainer" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
</div>
```

**- Step 5:**

In separate js file or right inside the HTML in a <script>//Plugin code</script> tag, we can apply the plugin like so:
	
	
```	
$("[id=galleryImg]").gallery({
	borderwidth: '1px',
	margin: '20px',
	boxShadowColor: '#888888',
	height: '100px'
});
		  
$("#galleryContainer").galleryContainer({
	height: '50VH',
	flexDirection: 'row'
});
```

Here we can also apply setting inside the plugin to further modify the gallery.
The [id=YourID] is important to get all elements with that exact ID.

		  
So the result code will look somethin like:
```
<body>
	  
	<div class="gallery" id="galleryContainer" >
	  	<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
		<img src="img/jQuery-Logo.jpg" class="imgs"  id="galleryImg" >
	</div>
	  
	  

    
	<script src="jquery331min.js" ></script>
	<script src="JqueryGalleryPlugin.js" ></script>
	  
	  
	<script>
	  	$("[id=galleryImg]").gallery({
			borderwidth: '1px',
			margin: '20px',
			boxShadowColor: '#888888',
			height: '100px'
		});
		  
		$("#galleryContainer").galleryContainer({
			height: '50VH',
			flexDirection: 'row'
		});
	  
	  
	</script>
</body>
```		  
		  
		  
		  
		  
		  
		  
		  
		  
