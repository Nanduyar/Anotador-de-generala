function Jugar(){
    document.getElementById ('jugar').style.display="block";
}

function MostrarReglas(){
    document.getElementById ('reglas').style.display="block";
}

function OcultarReglas(){
    document.getElementById ('reglas').style.display="none";
}

function OcultarCantJugadores(){
    document.getElementById ('AddPlayers').style.display="none";
}

function AddPlayers(){
    document.getElementById ('AddPlayers').style.display="block";

}

function OcultarJugar(){
    document.getElementById ('jugar').style.display="none";
}  

function MostrarAnotador(){
    document.getElementById ('anotador').style.display="block";
} 

function OcultarAnotador(){
    document.getElementById ('anotador').style.display="none";
} 

function MostrarJugador3(){
    document.getElementById ('Player3').style.display="block";
    document.getElementById ('AddPlayer3').style.display="none";
    document.getElementById ('AddPlayer4').style.display="block";

} 

function MostrarJugador4(){
    document.getElementById ('Player4').style.display="block";
    document.getElementById ('AddPlayer4').style.display="none";
    document.getElementById ('AddPlayer5').style.display="block";
}

function MostrarJugador5(){
    document.getElementById ('Player5').style.display="block";
    document.getElementById ('AddPlayer5').style.display="none";
    document.getElementById ('AddPlayer6').style.display="block";
}

function MostrarJugador6(){
    document.getElementById ('Player6').style.display="block";
    document.getElementById ('AddPlayer6').style.display="none";
}

function sumar1(){
    var total1 = 0;
    $(".SumaJugador1").each(function() {
        if (isNaN(parseFloat($(this).val()))) {
    total1 += 0;
        } else {
    total1 += parseFloat($(this).val());
    }
    });
    document.getElementById('spTotal1').innerHTML = total1;
  
}

function sumar2(){
        var total2 = 0;
    $(".SumaJugador2").each(function() {
        if (isNaN(parseFloat($(this).val()))) {
    total2 += 0;
        } else {
    total2 += parseFloat($(this).val());
    }
    });
    document.getElementById('spTotal2').innerHTML = total2;
  
}

    function sumar3(){
    var total = 0;
    $(".SumaJugador3").each(function() {
        if (isNaN(parseFloat($(this).val()))) {
    total += 0;
        } else {
    total += parseFloat($(this).val());
    }
    });
    document.getElementById('spTotal3').innerHTML = total;
  
}

function sumar4(){
    var total = 0;
    $(".SumaJugador4").each(function() {
        if (isNaN(parseFloat($(this).val()))) {
    total += 0;
        } else {
    total += parseFloat($(this).val());
    }
    });
     document.getElementById('spTotal4').innerHTML = total;
  
}


function sumar5(){
    var total = 0;
    $(".SumaJugador5").each(function() {
        if (isNaN(parseFloat($(this).val()))) {
    total += 0;
        } else {
        total += parseFloat($(this).val());
    }
    });
    document.getElementById('spTotal5').innerHTML = total;
  
}

function sumar6(){
    var total = 0;
    $(".SumaJugador6").each(function() {
        if (isNaN(parseFloat($(this).val()))) {
    total += 0;
        } else {
        total += parseFloat($(this).val());
    }
    });
  
document.getElementById('spTotal6').innerHTML = total;
  
}

function CapturarPlayer1()
    {
	    var porClassName=document.getElementsByClassName("FormPlayers1")[0].value;
        document.getElementById("Jugador1").innerHTML=porClassName;
    }

function CapturarPlayer2()
    {
	    var porClassName=document.getElementsByClassName("FormPlayers2")[0].value;
        document.getElementById("Jugador2").innerHTML=porClassName;
    }

    function CapturarPlayer3()
    {
	    var porClassName=document.getElementsByClassName("FormPlayers3")[0].value;
        document.getElementById("Jugador3").innerHTML=porClassName;
    }

    function CapturarPlayer4()
    {
	    var porClassName=document.getElementsByClassName("FormPlayers4")[0].value;
        document.getElementById("Jugador4").innerHTML=porClassName;
    }

    function CapturarPlayer5()
    {
	    var porClassName=document.getElementsByClassName("FormPlayers5")[0].value;
        document.getElementById("Jugador5").innerHTML=porClassName;
    }

    function CapturarPlayer6()
    {
	    var porClassName=document.getElementsByClassName("FormPlayers6")[0].value;
        document.getElementById("Jugador6").innerHTML=porClassName;
    }

    function AgregarJugador3(){
        document.getElementById ('Jugador3oculto').style.display="block";
        document.getElementById ('Agregarbtn2Ocultar').id="botonoculto2agregar";
        document.getElementById ('botonoculto3agregar').id="Agregarbtn3Ocultar";
        document.getElementById ('botonoculto3quitar').id="Quitarbtn3Ocultar";   
    }
    function AgregarJugador4(){
        document.getElementById ('Jugador4oculto').style.display="block";
        document.getElementById ('Agregarbtn3Ocultar').id="botonoculto3agregar";
        document.getElementById ('Quitarbtn3Ocultar').id="botonoculto3quitar";
        document.getElementById ('botonoculto4agregar').id="Agregarbtn4Ocultar";
        document.getElementById ('botonoculto4quitar').id="Quitarbtn4Ocultar";
    }
    function AgregarJugador5(){
        document.getElementById ('Jugador5oculto').style.display="block";
        document.getElementById ('Agregarbtn4Ocultar').id="botonoculto4agregar";
        document.getElementById ('Quitarbtn4Ocultar').id="botonoculto4quitar";
        document.getElementById ('botonoculto5agregar').id="Agregarbtn5Ocultar";
        document.getElementById ('botonoculto5quitar').id="Quitarbtn5Ocultar";
    }
    function AgregarJugador6(){
        document.getElementById ('Jugador6oculto').style.display="block";
        document.getElementById ('Agregarbtn5Ocultar').id="botonoculto5agregar";
        document.getElementById ('Quitarbtn5Ocultar').id="botonoculto5quitar";
        document.getElementById ('botonoculto6quitar').id="Quitarbtn6Ocultar";
    }
    
    function QuitarJugador3(){
        document.getElementById ('Jugador3oculto').style.display="none";
        document.getElementById ('botonoculto2agregar').id="Agregarbtn2Ocultar";
        document.getElementById ('Agregarbtn3Ocultar').id="botonoculto3agregar";
        document.getElementById ('Quitarbtn3Ocultar').id="botonoculto3quitar";   
    }
    function QuitarJugador4(){
        document.getElementById ('Jugador4oculto').style.display="none";
        document.getElementById ('botonoculto3agregar').id="Agregarbtn3Ocultar";
        document.getElementById ('botonoculto3quitar').id="Quitarbtn3Ocultar";
        document.getElementById ('Agregarbtn4Ocultar').id="botonoculto4agregar";
        document.getElementById ('Quitarbtn4Ocultar').id="botonoculto4quitar";
    }
    function QuitarJugador5(){
        document.getElementById ('Jugador5oculto').style.display="none";
        document.getElementById ('botonoculto4agregar').id="Agregarbtn4Ocultar";
        document.getElementById ('botonoculto4quitar').id="Quitarbtn4Ocultar";
        document.getElementById ('Agregarbtn5Ocultar').id="botonoculto5agregar";
        document.getElementById ('Quitarbtn5Ocultar').id="botonoculto5quitar";
    }
    function QuitarJugador6(){
        document.getElementById ('Jugador6oculto').style.display="none";
        document.getElementById ('botonoculto5agregar').id="Agregarbtn5Ocultar";
        document.getElementById ('botonoculto5quitar').id="Quitarbtn5Ocultar";
        document.getElementById ('Quitarbtn6Ocultar').id="botonoculto6quitar";
    }
        