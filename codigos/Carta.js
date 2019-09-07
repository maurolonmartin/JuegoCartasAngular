//Declaracion de la clase carta
function Carta() {
    this.indice = Math.floor(Math.random() * 40) + 1;

    //Metodo para obtener imagen
    this.obtenerImagen = function () {
        return "imagenes/Cartas/Carta" + this.indice.toString() + ".jpg";
    }

    /* Metodo que devuelve el indice en la lista de nombres de carta
    AS=0, dos=1, Tres=2..... caballo=8, rey=9*/
    this.obtenerNombre = function () {
        numero = this.indice % 10;
        switch (numero) {
            case 0:
                return "Rey";
            case 1:
                return "As";
            case 8:
                return "Sota";
            case 9:
                return "Caballo";
            default:
                return numero.toString();
        }
    };
    //Metodo devuelve la pinta de la carta
    this.obtenerPinta = function () {
        if (this.indice <= 10)
            return "Oros";
        else if (this.indice <= 20)
            return "Copas";
        else if (this.indice <= 30)
            return "Espadas";
        else
            return "Bastos";
    };

};