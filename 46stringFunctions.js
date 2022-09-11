<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String functions</title>
    <style>

    </style>
</head>
<body>
    <div class="container"></div>

    <script>
        var str1="This is a string.";
        var str="My name is Aditya";
        console.log(str1);

        //Occurance of first substring
        var position=str1.indexOf('is');
        console.log(position);

        //Occurance of last substring
        position=str1.lastIndexOf('is');
        console.log(position);

        //var substr1=str.substr(1,6);
        //var substr1=str.substring(1,5);
        var substr1=str.slice(1,5);
        console.log(substr1);

        var replaced=str.replace('Aditya','Addy');
        console.log(str);
        console.log(replaced);

        console.log(str.toUpperCase());
        console.log(str.toLowerCase());

        console.log(str.concat(' Raj.'));

        console.log(str.charAt(3));

        var str2="     This   is   check       ";
        console.log(str2);
        console.log(str2.trim());

    </script>
</body>
</html>
