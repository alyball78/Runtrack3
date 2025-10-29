<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>filtre pokemon</title>
</head>
<body>
    <h1>Vous pouvez trier ce Pokemon en remplissant les champs suivants:</h1>
    <form action="">
<fieldset>
<label for="id">id</label>
    <input type="text" name ="id" id="id">
</fieldset>
    <fieldset>
        <label for="name">nom</label>
    <input type="text" name ="nom" id="name">
   </fieldset>    
<fieldset>
   <label for="type">type</label>
<select name="type" id="type">
<option value="">(aucun)</option>
<option value="Normal">Normal</option>
<option value="Fire">Fire</option>
<option value="Fighting">Fighting</option>
<option value="Water">Water</option>
<option value="Flying">Flying</option>
<option value="Grass">Grass</option>
<option value="Poison">Poison</option>
<option value="Electric">Electric</option>
<option value="Ground">Ground</option>
<option value="Psychic">Psychic</option>
<option value="Rock">Rock</option>
<option value="Ice">Ice</option>
<option value="Bug">Bug</option>
<option value="Dragon">Dragon</option>
<option value="Ghost">Ghost</option>
<option value="Dark">Dark</option>
<option value="Steel">Steel</option>
<option value="Fairy">Fairy</option>

</select>
</fieldset>
<input type="button" value="filtrer" id="filtrerButton">

</form>

<script src="script.js"></script>
</body>
</html>