<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String and String methods</title>
</head>
<body>
    <div class="container">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda architecto voluptatem molestiae, distinctio amet excepturi tempore nemo, sequi tenetur incidunt nisi consectetur accusantium accusamus repellendus id veritatis ullam eligendi! Cumque quae iure dolorum fugiat?</p>
    </div>
    <script>
        var string="aditya";  //  OR var string='aditya';
        var message=" is a good boy.";
        console.log(string+message);

        var name="Aditya";
        var channel="Addy in Nyc.";
        var str=`${name} is a "good person" and his 'channel' is ${channel}`;
        console.log(str);

        var len=name.length;
        console.log(`The length of name is ${len}`);

        console.log("Hello\nworld\twith Aditya");
    </script>
</body>
</html>
