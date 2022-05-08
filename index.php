<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
//La fonction makeArray contruit un tableau selon les propriétés entrées en paramètres )
function makeArray($caseNumber, $min, $max)
{
    $tableau = [];
    for ($index = 0 ; $index < $caseNumber ; $index++) {
        $tableau[$index] = rand($min, $max);
    }
    return ($tableau);
}

function sortArray($array) {
    // La variable tableauTrié est initalisée à false
    $arraySorted = false;

    //Tant que la variable tableauTrié est fausse
    while ($arraySorted == false) {
        // on l'initialise à vrai en début de boucle
        $arraySorted = true;
        $currentKey = 0;
        //on parcours le tableau avec un foreach
        foreach ($array as $currentKey => $currentValue) {
            // On saute la première case
            if ($currentKey > 0) {
                //Si la valeur de l'index est plus petite que celle du précédent
                if ($array[$currentKey] < $array[$currentKey - 1]){
                    // On intervertis les valeurs
                    $tampon = $currentValue;
                    $array[$currentKey] = $array[$currentKey - 1];
                    $array[$currentKey - 1] = $tampon;
                    // Et le tableau n'est pas trié
                    $arraySorted = false;
                        foreach ($array as $value) {
                            echo $value . ' ';
                        }
                    echo '<br/>';   
                    break;
                }

            }
            
        }
    //Et on recommence la boucle. Si, arrivé ici arraySorted n'a pas changé de valeur, c'est que le tableau est trié : on pourra sortit de la boucle.
    }
    return ($array);
}

$monTableau = makeArray(50, 0, 100);

echo 'voici un tableau pas trop trié !<br/><br/>';
foreach ($monTableau as $value) {
    echo $value . ' ';
}

echo '<br/><br/>Je vais trier ce tableau : <br/><br/>';
$monTableau = sortArray($monTableau);

foreach ($monTableau as $value) {
    echo $value . ' ';
}
echo '<br/><br/> Et Voilàà <br/>';
?>

</body>
</html>