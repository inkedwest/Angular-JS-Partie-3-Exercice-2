<!DOCTYPE html>
<html ng-app>
  <head>
    <meta charset="utf-8" />
    <title>Exercice 2</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.3/angular.min.js"></script>
  </head>
  <body>
    <div>
    {{ 3.14159265359 | number :2 | number:fractionSize }}
    </div>
  </body>
</html>
