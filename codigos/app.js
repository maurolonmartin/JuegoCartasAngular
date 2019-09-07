angular.module('JuegoCartas', [])
    .controller('ControlJuego', function ($scope) {

        //Conjunto de cartas
        $scope.cartas = [];
        //Lista de grupos encontradas
        $scope.grupos = [];

        //Metodo para repartir las cartas
        $scope.repartir = function () {
            for (var i = 0; i < 10; i++) {
                $scope.cartas[i]=new Carta();

            };
            $scope.grupos=[];
        };

        //Metodos para allar los grupos
        $scope.verificar = function () {
            // Declarar los contadores de las cartas
        

        };
    });


        