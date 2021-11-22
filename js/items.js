$(function () {
  $("#elastic_grid_demo").elastic_grid({
    showAllText: "Todos",
    filterEffect: "popup", // moveup, scaleup, fallperspective, fly, flip, helix , popup
    hoverDirection: true,
    hoverDelay: 0,
    hoverInverse: false,
    expandingSpeed: 500,
    expandingHeight: 500,
    items: [
      {
        //Item1
        title: "<br>Corazón Lotería",
        description: `
                <p>
                Corazón de hoja de lata con acabados de tarjetas de lotería 
                disponible en todas las tiendas, temas de varios colores. 
                </p>
                <p><h3>$245.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/1.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 2
      {
        title: "<br>Nicho de Madera",
        description: `
                <p>
                Nicho de madera  elaborado con madera de patol y pintado a base de 
                pinturas acrílicas disponible solo en corazón divino varias versión
                (San pascual, San Miguel Arcángel ,Madre Teresa de Calcuta).
                </p>
                <p><h3>$2350.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/2.jpg", "images/small/3.jpg"],
        large: ["images/large/2.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 3
      {
        title: "<br>Hombre en Bañador",
        description: `
                <p>
                Decorativo elaborado a base de hoja de lata y pintado con pinturas 
                acrílicas disponible en todas las tiendas, bañador en varios colores
                (rosa ,azul ,verde)
                </p>
                <p><h3>$195.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/3.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 4
      {
        title: "<br>Mano Floreada",
        description: `
                <p>
                Mano Floreada; decorativo elaborado a base de hoja de lata y pintada con pinturas 
                acrílicas en la palama de la mano contiene un espejo disponible en los colores (rosa, morado).
                </p>
                <p><h3>$230.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/4.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
      //Item 5
      {
        title: "<br>Sirena Gorda",
        description: `
                <p>
                Sirena elaborada con hoja de lata y pintada con pintada a base de pintura 
                acrílica disponible en las versiones (rubia, morena).
                </p>
                <p><h3>$85.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/5.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
      //Item 6
      {
        title: "<br>Sirena Frida Kahlo",
        description: `
                <p>
                Sirena con cara de Frida Kahlo, elaborada con hoja de lata y pintada 
                a base de pintura acrílica disponible en varias combinaciones de 
                colores además de que nos puedes especificar en cualquier caso que quisieras 
                alguno en específico.
                </p>
                <p><h3>$135.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/6.jpg", "images/small/3.jpg"],
        large: ["images/large/1.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
      //Item 7
      {
        title: "<br>Nicho de Concha",
        description: `
                <p>
                Nicho de concha e elaborado con hoja de lata y pintado a base de pinturas de acrílico 
                disponible en varias versiones no en colores en específico.
                </p>
                <p><h3>$135.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/7.jpg", "images/small/3.jpg"],
        large: ["images/large/7.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 8
      {
        title: "<br>Cruz de Nopal",
        description: `
                <p>
                Cruz de nopal elaborada con piezas de nopal secado a la intemperie 
                previamente y pequeñas piezas de maya; hermosa decoración disponible 
                en varios en varios tamaños. 
                </p>
                <p><h3>$170.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/8.jpg", "images/small/3.jpg"],
        large: ["images/large/8.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 9
      {
        title: "<br>Imán Catrina",
        description: `
                <p>
                Imán de catrina elaborado con hoja de lata pintado con pinturas a 
                base de aceite disponible en sus versiones de color de sombrero (azul, verde, rosa).
                </p>
                <p><h3>$65.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/9.jpg", "images/small/3.jpg"],
        large: ["images/large/9.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 10
      {
        title: "<br>Corazón de Oro",
        description: `
                <p>
                Corazón de hoja de lata NO pintado elaborado con hoja en oro 
                y plata con esmalte de protección para el cuidado y su preservación de este.
                </p>
                <p><h3>$70.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/10.jpg", "images/small/3.jpg"],
        large: ["images/large/10.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 11
      {
        title: "<br>Mano Divina",
        description: `
                <p>
                Mano Divina elaborada a base de hoja de lata pintada a base de pinturas de acrílico con una 
                apertura para alguna imagen que contiene un vidrio de protección de esta. 
                </p>
                <p><h3>$70.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/11.jpg", "images/small/3.jpg"],
        large: ["images/large/11.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 12
      {
        title: "<br>Estrella Floreada",
        description: `
                <p>
                Estrella floreada elaborada con hoja de lata y pintada a base de pinturas 
                de acrílico las ediciones de los colores de las flores pueden
                cambiar pero los colores de fondo disponible son (rosa, azul, verde) 
                </p>
                <p><h3>$220.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/12.jpg", "images/small/3.jpg"],
        large: ["images/large/12.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 13
      {
        title: "<br>Guirnalda de Corazón",
        description: `
                <p>
                Guirnalda elaborada de hoja de lata y pintada a 
                base de pinturas de acrílico único colores 
                disponible (Blanco)
                </p>
                <p><h3>$320.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/13.jpg", "images/small/3.jpg"],
        large: ["images/large/13.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 14
      {
        title: "<br>Corazón Vela",
        description: `
                <p>
                Corazón vela elaborado de hoja de lata y pintado a base 
                de pinturas de acrílico tiene un pequeño apartado donde 
                du nombre del mismo corazón hace presencia puesto que es 
                para una vela de circulo. Colores disponibles 
                (rojo, azul, verde, rosa)
                </p>
                <p><h3>$320.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/14.jpg", "images/small/3.jpg"],
        large: ["images/large/14.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 15
      {
        title: "<br>Corazón Oxidado",
        description: `
                <p>
                El corazón oxidado es elaborado con hoja de lata. El 
                óxido se hace a base de químicos que hacen que su 
                deterioro sea más rápido para que lleguemos a dar ese 
                acabado.
                </p>
                <p><h3>$70.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/15.jpg", "images/small/3.jpg"],
        large: ["images/large/15.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 16
      {
        title: "<br>Exvoto",
        description: `
                <p>
                Los exvotos son elaborados en una hoja de lata y pintados 
                con pintura acrílica sus diseños pueden variar puesto que 
                cada uno cuenta una historia diferente ¿Quieres ver más 
                modelos? ¡Ponte en contacto con nosotros!
                </p>
                <p><h3>$320.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/16.jpg", "images/small/3.jpg"],
        large: ["images/large/16.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 17
      {
        title: "<br>Corazón de Hierro",
        description: `
                <p>
                El corazón de hierro es elaborado con hoja de lata y esa 
                tonalidad es posible con una tinta que nosotros mismos 
                fabricamos y la cual llamamos Antique después de eso es 
                protegida con un esmalte para la perseveración del 
                producto.
                </p>
                <p><h3>$120.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/17.jpg", "images/small/3.jpg"],
        large: ["images/large/17.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },

      //Item 18
      {
        title: "<br>Corazón Milagro",
        description: `
                <p>
                Corazón de madera de patol con milagros incrustados de 
                color plata pintado a base de pinturas acrílicas 
                disponible en tres tamaños.
                </p>
                <p><h3>$120.00MXN$</h3></p>
                <div class="colores">
                <p class="text_c color_txt">Color</p> 
                <div class="colores_cards">
                    <div class="rojo card_c"></div>
                    <div class="azul card_c"></div>
                    <div class="amarillo card_c"></div>
                    <div class="rosa card_c"></div>
                </div>
                <p class="subtitulo_card text_c">20 unidades disponibles</p>
                 </div>`,
        thumbnail: ["images/small/18.jpg", "images/small/3.jpg"],
        large: ["images/large/18.png", "images/large/3.jpg"],
        img_title: [
          "Imagen Corazon "
        ],
        button_list: [
          {
            title: "Comprar",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          {
            title: "Añadir al Carrito",
            url: "http://porfolio.bonchen.net/",
            new_window: true,
          },
          { title: "♡", url: "http://porfolio.bonchen.net/", new_window: true },
        ],
        tags: ["Corazón"],
      },
    ],
  });
});
