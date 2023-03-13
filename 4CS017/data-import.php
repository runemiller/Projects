<?php

    $url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $_GET['weather_city'] . '&appid=292024376621b620e4dec02b6e8d494a&units=metric';

    // Get data from openweathermap and store in JSON object
    $data = file_get_contents($url);
    $json = json_decode($data, true);

    // Fetch required fields
    $weather_description = $json['weather'][0]['description'];
    $weather_temperature = $json['main']['temp'];
    $weather_wind = $json['wind']['speed'];          
    $weather_when = date("Y-m-d H:i:s"); // now
    $weather_city = $json['name']; // name of city  
    $weather_tempmin = $json['main']['temp_min'];
    $weather_tempmax = $json['main']['temp_max'];   

    // Build INSERT SQL statement
    $sql_insert = "INSERT INTO weather (weather_description, weather_temperature, weather_wind, weather_when, weather_city, weather_tempmin, weather_tempmax)
    VALUES('{$weather_description}', {$weather_temperature}, {$weather_wind}, '{$weather_when}', '{$weather_city}', '{$weather_tempmin}', '{$weather_tempmax}')";

    // Run SQL statement and report errors
    if (!$mysqli -> query($sql_insert)) {
        echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
    }

?>
