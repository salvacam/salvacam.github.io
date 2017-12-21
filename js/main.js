document.onreadystatechange = function (event) {
  if (document.readyState === 'complete') {

    var capitalizeFirstLetter = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
    * Add class nameClass to tag element
    * @param {object} element - The tag element.
    * @param {string} nameClass - The name of class.
    */
    var addClass = function(element, nameClass) {
      if (element.classList) {
        element.classList.add(nameClass);
      } else {
        element.nameClass += ' ' + nameClass;
      }
    }

    var removeClass = function(el, nameClass) {
      if (el.classList) {
        el.classList.remove(nameClass);
      } else {
        el.nameClass = el.nameClass.replace(new RegExp('(^|\\b)' + nameClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }


    var originalTitle = document.title;

    /*    Event menu button     */
    var navButton = document.querySelector('.navbar-header button');
    var navbar = document.querySelector('#navbar');
    navButton.addEventListener('click', function() {
      if (navbar.classList) {
        navbar.classList.toggle("show");
      } else {
        var classes = navbar.className.split(' ');
        var existingIndex = classes.indexOf("show");

        if (existingIndex >= 0)
          classes.splice(existingIndex, 1);
        else
          classes.push("show");

        navbar.className = classes.join(' ');
      }
    });


    /*    Event "cursos" button     */
    var alternarCursos = document.getElementById('alternar-cursos');
    var formacionComplementaria = document.getElementById('formacionComplementaria');
    alternarCursos.addEventListener('click', function(e) {
      e.preventDefault();
      if (alternarCursos.textContent == 'ver') {
        alternarCursos.textContent ='ocultar';
        addClass(formacionComplementaria, "selected");
      } else {
        alternarCursos.textContent = 'ver';
        removeClass(formacionComplementaria, "selected");
      }
    });

    /***********************************************************/
    /*******                 ROUTE                    **********/
    /***********************************************************/


    var elementsNav = document.querySelectorAll('.router');

    /**
    * Add class 'selected' for div and link with id-content and id
    * and remove class 'selected' rest of div and link
    * @param {string} id - Identificator of tags element.
    */
    var selectNav = function(id) {
      // Removed class selected for all element, link and div
      Array.prototype.forEach.call(elementsNav, function(el, i) {
        //el.classList.remove('selected');
        removeClass(el, "selected");
      });

      // Add class selected for link
      var linkSelect = document.querySelector('#'+id);
      addClass(linkSelect, "selected");

      // Add class selected for div
      var viewSelect = document.querySelector('#'+id +"-content");
      addClass(viewSelect, "selected");

      //Change title of page, add the id, format capitaliza, to the original title
      document.title = originalTitle + " - " + capitalizeFirstLetter(id);
    }


    // Removed #path from href
    if (window.location.href.indexOf('#') > 0) {
      var path = window.location.href.substring(window.location.href.indexOf('#')+1);
      window.location.hash = "";
    }

    // Select div and link initial
    selectNav("inicio");

    // Add event for click in link
    var elementsNavLink = document.querySelectorAll('a.router');
    Array.prototype.forEach.call(elementsNavLink, function(el, i) {
      el.addEventListener('click', function() {
        // Hide link when width 600px or less
        //document.getElementById("navbar").classList.remove('show');
        removeClass(document.getElementById("navbar"), "show");
        selectNav(this.id);
      });
    });




    /***********************************************************/
    /*******                 DATA                     **********/
    /***********************************************************/

  var trabajos = [
    {
      "empresa": 'Fidesol',
      "empleo": 'Desarrollador Web Front-End.',
      "descripcion": "Desarrollador front-end para reingenieria de proyecto web, con uso del framework Backbone.js.",
      "lugar": "Granada",
      "fecha": "Julio 2016 – Actualmente"
    },
    {
      "empresa": 'Intelligenia',
      "url": 'https://salvacam.github.io/asset/recomendacion.pdf',
      "empleo": 'Desarrollador Web Back-End y Front-End.',
      "descripcion": "Desarrollo para varios proyectos, como programador front-end, backend (PHP) y gestión de bases de datos MySQL y SQL SERVER.",
      "lugar": "Granada",
      "fecha": "Junio 2015 – Junio 2016"
    },
    {
      "empresa": 'NanoBytes Informática y Telecomunicaciones',
      "empleo": 'Realización de prácticas de Desarrollo de Aplicaciones Web.',
      "descripcion": "Maquetación e implementación del front-end de aplicación CloudWeb. Maquetación de web de la empresa.",
      "lugar": "Granada",
      "fecha": "Abril 2015 – Junio 2015"
    },
    {
      "empresa": 'Soluciones y Sistemas Informáticos',
      "empleo": 'Realización de prácticas de Administración de Sistemas Informáticos en Red.',
      "descripcion": "Diseño e implementación de tienda web. Reparación de equipos informáticos e instalaciones de red. Creación de aplicación web para gestión de contraseñas.",
      "lugar": "Armilla (Granada)",
      "fecha": "Abril 2013 – Junio 2013"
    },
    {
      "empresa": 'Estudio de Arquitectura Ignacio de Teresa',
      "empleo": 'Delineante.',
      "descripcion": "Delineación de proyectos de diferentes dimensiones de edificación y urbanismo.",
      "lugar": "Granada",
      "fecha": "Octubre 2007 – Junio 2014"
    }
  ];

  var formacion = [
    {
      'nombre': 'Técnico Superior en Desarrollo de Aplicaciones Web',
      'entidad': 'I.E.S. Zaidín-Vergeles, Granada.',
      'matricula': true,
      'fecha' : 'Junio 2015'
    },
    {
      'nombre': 'Técnico Superior en Administración de Sistemas Informáticos en Red',
      'entidad': 'I.E.S. Zaidín-Vergeles, Granada.',
      'matricula' : true,
      'fecha' : 'Junio 2013'
    },
    {
      'nombre': 'Técnico superior en Desarrollo y Aplicación de Proyectos de Construcción',
      'entidad': 'Complejo Educativo “SAFA-SAN LUIS”. El Pto Sta María (Cádiz)',
      'fecha' : 'Junio 2006'
    }
  ];

  var cursos = [
      {
        'nombre': 'Sass Workflow',
        'url': 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-R9DJ5MCV.pdf',
        'entidad': 'Udemy',
        'fecha': 'Diciembre 2017'
      },
      {
        'nombre': 'LESS de cero a experto',
        'url': 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-RSLQ51YX.pdf',
        'entidad': 'Udemy',
        'fecha': 'Agosto 2017'
      },
      {
        'nombre': 'Creando Apps. Aprende a programar aplicaciones móviles.',
        'url': 'https://miriadax.net/files/10132/badge/2b584727-874d-4db8-89d5-3d08c1d03bf6.pdf',
        'entidad': 'Miríada X',
        'fecha': 'Enero 2017'
      },
      {
        'nombre': 'Gestión de proyectos con metodologías Ágiles y enfoques Lean.',
        'url': 'https://s3.amazonaws.com/pdf-certificate/10460871.pdf',
        'entidad': 'Miríada X',
        'fecha': 'Enero 2017'
      },
      {
        'nombre': 'Desarrollo de juegos web en JavaScript y HTML5 (Phaser)',
        'url': 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-YAQ44LIV.pdf',
        'entidad': 'Udemy',
        'fecha': 'Enero 2017'
      },
      {
        'nombre': 'ECMAScript 6: Avanza tu conocimiento de JS al nivel 6',
        'url': 'https://www.udemy.com/certificate/UC-FDEQQMF5/',
        'entidad': 'Udemy',
        'fecha': 'Diciembre 2016'
      },
      {
        'nombre': 'Anatomy of Backbone.js',
        'url': 'https://www.codeschool.com/users/1221030',
        'entidad': 'Code School',
        'fecha': 'Agosto 2016'
      },
      {
        'nombre': 'Introducción a la metodología ágil Kanban',
        'url': 'https://salvacam.github.io/asset/kanban.pdf',
        'entidad': 'Intelligenia',
        'fecha': 'Junio 2016'
      },
      {
        'nombre': 'Writing for the Web',
        'url': 'https://salvacam.github.io/asset/Subject_Certificate_22_May_2016.pdf',
        'entidad': 'Open2Study',
        'fecha': 'Mayo 2016'
      },
      {
        'nombre': 'Probar Django | Construir una Aplicación Web en Python',
        'url': 'https://www.udemy.com/certificate/UC-C3YPRKDR',
        'entidad': 'Udemy',
        'fecha': 'Mayo 2016'
      },
      {
        'nombre': 'User Experience for the Web',
        'url': 'https://salvacam.github.io/asset/Subject_Certificate_08_May_2016.pdf',
        'entidad': 'Open2Study',
        'fecha': 'Mayo 2016'
      },
      {
        'nombre': 'Agilidad y Lean. Gestionando los proyectos y negocios del s. XXI (5ª. edición)',
        'url': 'https://miriadax.net/files/10132/badge/1ff5b76e-abaa-4e36-8845-bcddff5a7d70.pdf',
        'entidad': 'Miríada X',
        'fecha': 'Abril 2016'
      },
      {
        'nombre': 'AngularJS - Desde Hola Mundo hasta una Aplicación',
        'url': 'https://www.udemy.com/certificate/UC-JLL09Q2W/',
        'entidad': 'Udemy',
        'fecha': 'Enero 2016'
      },
      {
        'nombre': 'SQL com MySQL Avanzado',
        'url': 'https://salvacam.github.io/asset/aulaMento_sql2.pdf',
        'entidad': 'Aula Mentor',
        'fecha': 'Diciembre 2015'
      },
      {
        'nombre': 'Angular.js Desde Cero, Aprende Creando una APP Web',
        'url': 'https://www.udemy.com/certificate/UC-B685FCU8/',
        'entidad': 'Udemy',
        'fecha': 'Noviembre 2015'
      },
      {
        'nombre': 'Desarrollo de servicios en la nube con HTML5, Javascript y node.js',
        'url': 'https://miriadax.net/files/10132/badge/59aa6093-1e9d-48fe-bd1d-f9c2e66daf74.pdf',
        'entidad': 'Miríada X',
        'fecha': 'Junio 2015'
      },
      {
        'nombre': 'Creación y retoque de imágenes con software libre',
        'url': 'https://miriadax.net/files/10132/badge/799dc409-a130-46a7-98cf-a06bd658467d.pdf',
        'entidad': 'Miríada X',
        'fecha': 'Octubre 2014'
      },
      {
        'nombre': 'Android: Introducción a la programación',
        'url': 'http://upvx.upv.es/credenciales/21VrUqTp7221.pdf',
        'entidad': 'UPV[X]',
        'fecha': 'Mayo 2014'
      },
      {
        'nombre': 'Desarrollo de Aplicaciones en HTML5 y para Dispositivos Móviles Firefox O.S.',
        'url': 'https://miriadax.net/files/10132/badge/3f49030d-6319-4c85-b5e8-0f25c49af4b0.pdf',
        'entidad': 'Miríada X',
        'fecha': 'Diciembre 2013'
      },
      {
        'nombre': 'CCNA Exploration: Routing Protocols and Concepts',
        'entidad': 'Cisco',
        'fecha': 'Junio 2012'
      },
      {
        'nombre': 'CCNA Exploration: Network Fundamentals',
        'entidad': 'Cisco',
        'fecha': 'Junio 2011'
      },
    ];


  var proyectos = [
    {
      'nombre': 'Simple Movie',
      'url': 'https://salvacam.github.io/simpleMovie/',
      'alt': 'Simple Movie',
      'img': 'simpleMovie',
      'git': 'https://github.com/salvacam/simpleMovie'
    },
    {
      'nombre': 'Horario Bus Granada',
      'url': 'https://salvacam.github.io/horario/',
      'alt': 'Horario Bus Granada',
      'img': 'horario',
      'git': 'https://github.com/salvacam/horario'
    },
    {
      'nombre': 'Juego HTML5',
      'url': 'https://salvacam.github.io/game_mooc/',
      'alt': 'Juego HTML5',
      'img': 'juego_html5',
      'git': 'https://github.com/salvacam/game_mooc'
    },
    {
      'nombre': 'Todo List con ANGULARJS',
      'url': 'http://salvacam.github.io/todo_list',
      'alt': 'Todo List con ANGULARJS',
      'img': 'todo_list',
      'git': 'https://github.com/salvacam/todo_list'
    },
    /*
    {
      'nombre': 'Reproductor en html5 de Goear.com',
      'url': 'http://salvacam.github.io/goear-player/',
      'alt': 'Reproductor en HTML5 de Goear',
      'img': 'goear',
      'git': 'https://github.com/salvacam/goear-player'
    },
    */
    {
      'nombre': 'Quiz en NodeJS sobre Express',
      'url': 'http://quiz-salva.herokuapp.com',
      'alt': 'Quiz en NodeJS',
      'img': 'quiz',
      'git': 'https://github.com/salvacam/quiz'
    },
    {
      'nombre': 'Aplicación web en tiempo real',
      'url': 'http://localizacionjs.herokuapp.com',
      'alt': 'Aplicación en tiempo real',
      'img': 'localizacion',
      'git': 'https://github.com/salvacam/localizacionjs',
      'doc': 'https://salvacam.github.io/asset/doc/Doc_.pdf',
      'slide': 'http://slides.com/salvacam/localizacionjs/',
    },
    {
      'nombre': 'Cesta de la compra de un tienda de deportes',
      'url': 'https://calcicolous-moonlig.000webhostapp.com/practica5',
      'alt': 'Tienda on line',
      'img': 'tienda',
      'git': 'https://github.com/salvacam/Practica-5',
      'doc': 'http://salvacam.github.io/asset/doc/Practica5.pdf',
    },
    {
      'nombre': 'Web Paracaidismo',
      'url': 'http://salvacam.github.io/Web-Deporte-Riesgo',
      'alt': 'Deportes extremos',
      'img': 'deportes',
      'git': 'https://github.com/salvacam/Web-Deporte-Riesgo'
    },
    {
      'nombre': 'Juego "Hundir la flota" en JavaScript',
      'url': 'http://salvacam.github.io/Barquitos',
      'alt': 'Hundir la flota en JavaScript',
      'img': 'barquitos',
      'git': 'https://github.com/salvacam/Barquitos'
    },
    {
      'nombre': 'Podometro en HTML5',
      'url': 'http://salvacam.github.io/Podometro',
      'alt': 'Podometro en HTML5',
      'img': 'podometro',
      'git': 'https://github.com/salvacam/Podometro'
    },
    {
      'nombre': 'Web Restaurante Indio Yantra',
      'url': 'https://salvacam.github.io/Web-Restaurante/',
      'alt': 'Restaurante',
      'img': 'restaurante',
      'git': 'https://github.com/salvacam/Web-Restaurante',
    },
    {
      'nombre': 'Gestión de una carta de restaurante mediante Ajax',
      'url': 'https://calcicolous-moonlig.000webhostapp.com/practica4',
      'alt': 'Carta restaurante',
      'img': 'carta',
      'git': 'https://github.com/salvacam/Practica-4',
      'doc': 'https://salvacam.github.io/asset/doc/Practica4.pdf',
    },
    {
      'nombre': 'Web turística sobre Egipto',
      'url': 'https://salvacam.github.io/Web-turistica/',
      'alt': 'Egipto',
      'img': 'egipto',
      'git': 'https://github.com/salvacam/Web-turistica',
    },
    {
      'nombre': 'Web empresa de transporte',
      'url': 'https://salvacam.github.io/Web-empresa-de-transporte',
      'alt': 'empresa de transporte',
      'img': 'transporte',
      'git': 'https://github.com/salvacam/Web-empresa-de-transporte',
    },
    {
      'nombre': 'Aplicación web de venta de inmuebles',
      'url': 'https://calcicolous-moonlig.000webhostapp.com/practica2',
      'alt': 'Inmobiliaria',
      'img': 'inmobiliaria',
      'git': 'https://github.com/salvacam/Practica-2',
      'doc': 'https://salvacam.github.io/asset/doc/Practica2.pdf',
    }
  ];

    /***********************************************************/
    /*******                 TEMPLATE                 **********/
    /***********************************************************/


    var replaceText = function(content, key, value) {
      return content.replace("{{"+ key +"}}", value ? value : "");
    }

    var replaceTemplate = function(template, object) {
      for(var key in object) {
        template = replaceText(template, key, object[key]);
      }
      return template;
    }

    var ifSimple = function(template, object, key) {
      if(object[key]) {
        var startPos = template.indexOf("{%if "+key);
        var endPos = template.indexOf("%}", startPos);
        var borrar = template.substring(startPos, endPos + 2);
        template = template.replace(borrar, "");

        template = replaceText(template, key, object[key]);
        template = template.replace("{%endif%}", "");
      } else {

        var startPos = template.indexOf("{%if");
        var endPos = template.indexOf("{%endif%}");
        var borrar = template.substring(startPos, endPos + 9);
        template = template.replace(borrar, "");
      }
      return template;
    }

    var ifComplete = function(template, object, key) {
      if(object[key]) {
        var startPos = template.indexOf("{%if "+key);
        var endPos = template.indexOf("%}", startPos);
        var borrar = template.substring(startPos, endPos + 2);
        template = template.replace(borrar, "");

        template = replaceText(template, key, object[key]);

        startPos = template.indexOf("{%else%}");
        endPos = template.indexOf("{%endif%}", startPos);
        borrar = template.substring(startPos, endPos + 9);
        template = template.replace(borrar, "");
      } else {

        var startPos = template.indexOf("{%if");
        var endPos = template.indexOf("{%else%}");
        var borrar = template.substring(startPos, endPos + 9);
        template = template.replace(borrar, "");
        template = template.replace("{%endif%}", "");
      }
      return template;
    }

    var ifSimpleTemplate = function(template, object) {
      for(var key in object) {
        template = ifSimple(template, object, key);
      }
      return template;
    }


    /*    Render template     */

    trabajos.forEach(function(trabajo) {
      var template = document.getElementById("trabajosTemplate").innerHTML;
      template = replaceTemplate(template, {
        "empresa": trabajo.empresa,
        "empleo": trabajo.empleo,
        "descripcion": trabajo.descripcion,
        "lugar": trabajo.lugar,
        "fecha": trabajo.fecha
      });


      template = ifComplete(template, trabajo, "url");
      template = replaceText(template, "empresa", trabajo.empresa);

      var el = document.createElement('li');

      el.innerHTML = template;

      document.querySelector('#trabajos').appendChild(el);
    });


    formacion.forEach(function(titulo) {
      var template = document.getElementById("titulosTemplate").innerHTML;
      template = replaceTemplate(template, {
        "nombre": titulo.nombre,
        "entidad": titulo.entidad,
        "fecha": titulo.fecha
      });
      template = ifSimple(template, titulo, "matricula");

      var el = document.createElement('li');

      el.innerHTML = template;

      document.querySelector('#titulacion').appendChild(el);
    });

    cursos.forEach(function(titulo) {
      var template = document.getElementById("cursosTemplate").innerHTML;
      template = replaceTemplate(template, {
        "nombre": titulo.nombre,
        "entidad": titulo.entidad,
        "fecha": titulo.fecha
      });
      template = ifComplete(template, titulo, "url");
      template = replaceText(template, "nombre", titulo.nombre);

      var el = document.createElement('li');

      el.innerHTML = template;

      document.querySelector('#formacionComplementaria').appendChild(el);
    });

    proyectos.forEach(function(project) {
      var template = document.getElementById("porfolioTemplate").innerHTML;
      template = replaceTemplate(template, {
        "url": project.url,
        "img": project.img,
        "alt": project.alt,
        "nombre": project.nombre
      });

      template = ifSimpleTemplate(template, {
        "git": project.git,
        "doc": project.doc,
        "slide": project.slide
      });

      var el = document.createElement('div');
      addClass(el, "projecto");

      el.innerHTML = template;

      document.querySelector('#porfolio-content').appendChild(el);
    });
/*
  	if ('serviceWorker' in navigator) {
  	  navigator.serviceWorker
  	   .register('service-worker.js', {scope: '/'})
  	   .then(function() {
  	      console.log('Service Worker Registered');
  	    });
    }
*/
  }
}
