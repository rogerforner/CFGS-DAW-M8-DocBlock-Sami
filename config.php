<?php
$dir = __DIR__ . '/';

$iterator = Symfony\Component\Finder\Finder::create()
  ->files()
  ->name('*.php')
  ->exclude('fitxers')
  ->exclude('*.md')
  ->in($dir);

$options = [
  'theme' => 'default',
  'title' => 'M08 - UF4 ABP1 - Documentació',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
