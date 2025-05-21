<?php

require_once 'config.php';

$type = $_GET['type'] ?? 'current';
$location = $_GET['q'] ?? 'Buenos Aires';
$lang = $_GET['lang'] ?? 'es';
$date = $_GET['dt'] ?? '';

$baseUrl = 'https://api.weatherapi.com/v1/';
if ($type === 'forecast' && $date) {
  $url = "{$baseUrl}forecast.json?key={$apiKey}&q={$location}&dt={$date}&lang={$lang}";
} else {
  $url = "{$baseUrl}current.json?key={$apiKey}&q={$location}&lang={$lang}";
}

header('Content-Type: application/json');
echo file_get_contents($url);