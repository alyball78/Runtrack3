<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour03 (Job1)</title>
    <style>
        .p-20 {
            height: 100px;
            font-style: italic;
        }
    </style>
</head>

<body>
    <div id="bienvenue">
        <button id="boutonOk">ok</button>
        <p class="p-20" id="texte" style="display:none;">"Les logiciels et les cathédrales, c'est un peu la même chose -d'abord on les construit, ensuite on prie"</p>
    </div>
    <button id="boutonMasquer">masquer</button>
    <!-- librairie importé via Content Delivery Network -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            $("button#boutonMasquer").click(function() {
                $("div#bienvenue").hide();
            });
            $("button#boutonOk").click(function() {
                $("p#texte").show(100);

            });
        });
    </script>
</body>

</html>