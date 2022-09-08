import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import {css} from "styled-components";


const IndexPage = () => {
  const [numero, agregarNumero] = useState('');
  const [size, agregarTamanio] = useState('');
  const [numeros, agregarNumeros] = useState([]);
  const [resultado, mostrarResultado] = useState('');
  var temporal;

  function agregar(){
    if(numeros.length == 0){
      temporal = parseInt(numero)
      agregarNumeros([temporal])
      console.log(numero)
    }else{
      temporal = parseInt(numero)
      agregarNumeros([...numeros, temporal])
      console.log(numeros)
    }
    
  }


  function cambiar(e){
    agregarNumero(e)
  }

  

  function cortarVarilla(arreglo){
    let n = arreglo.length;
    let val = new Array(n + 1);
        val[0] = 0;
        for (let i = 1; i<=n; i++)
        {
            let max_val = Number.MIN_VALUE;
            for (let j = 0; j < i; j++)
                max_val = Math.max(max_val, arreglo[j] + val[i - j - 1]);
            val[i] = max_val;
        }
        mostrarResultado(val[n]);
        return val[n];
 
  }

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Problema de la varilla - Por Michael Adolfo Huerta Ramirez</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
               
    </Helmet>
     
     <div className="container">
        <div className="jumbotron">
          <h2 className="">Bienvenido al problema de cortar varilla - Por Michael Adolfo Huerta Ramirez</h2>
          <h3>Para la clase de Analis y Diseño de Algoritmos de la carrera de Ciencia de Datos </h3>
          <h4>Profesora: Cecilia Albortante Morato</h4>

          <br></br>
          <p>Este ejemplo usa programación dinámica para resolver un
problema simple al decidir donde cortar varillas de acero.</p>
<p>Dada una varilla de longitud n pulgadas y una tabla de precios pi
para i = 1, 2, ..., n, determinar los ingresos máximos rn que se
pueden obtener cortando la varilla y vendiendo las piezas.</p>
<p><b>¿Como usar el programa?</b></p>
<p>1.- Inserta los precios que deseas obtener por cada trozo de varilla empezando con 1 pulgada,2 pulgadas, 3 pulgadas ...</p>
<p>2.- El tamaño de la varilla es el numero de pulgadas maximo que ingresamos (ej. insertamos 5 valores, entonces sera de 5 pulgadas el tamaño maximo de la varilla) </p>
<p>Corre el programa </p>
        </div>
        <div className="row">
          <div className="col">
              <div className="form-group">
              <input type="number" id="numero"  onChange={(e)=>cambiar(e.target.value)} className="form-control" min="0" required placeholder="Inserte número">

              </input>
              <br></br>
              <button  onClick={()=>agregar()} className="btn btn-success form-control">Agregar número</button>
              </div>

          </div>
          <div className="col">
                  <div className="form-group">
           
                  <textarea id="contenedor" placeholder="arreglo de numeros" className="form-control" value={numeros}/>
                 
                  </div>
            </div>
        </div>
        <div className="jumbotron">
          
           <div className="form-group">
             <br></br>
              <button onClick={()=>cortarVarilla(numeros)} className="btn btn-info form-control">Calcular</button>
           </div>
        </div>
        <div className="jumbotron" >
          <br></br>
             <h2>El resultado es:  <b>{resultado}</b></h2>
        </div>
     </div>
    </>
   
  )
}

export default IndexPage
