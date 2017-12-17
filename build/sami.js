
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Class_llibres" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Class_llibres.html">Class_llibres</a>                    </div>                </li>                            <li data-name="class:Connectar" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Connectar.html">Connectar</a>                    </div>                </li>                            <li data-name="class:Prestecs" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Prestecs.html">Prestecs</a>                    </div>                </li>                            <li data-name="class:Usuaris" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Usuaris.html">Usuaris</a>                    </div>                </li>                            <li data-name="class:autors" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="autors.html">autors</a>                    </div>                </li>                            <li data-name="class:generes" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="generes.html">generes</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},
            
            {"type": "Class",  "link": "Class_llibres.html", "name": "Class_llibres", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct", "name": "Class_llibres::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct1", "name": "Class_llibres::__construct1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct2", "name": "Class_llibres::__construct2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct3", "name": "Class_llibres::__construct3", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct4", "name": "Class_llibres::__construct4", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct5", "name": "Class_llibres::__construct5", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct6", "name": "Class_llibres::__construct6", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method___construct7", "name": "Class_llibres::__construct7", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method_getnom", "name": "Class_llibres::getnom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method_getcognom", "name": "Class_llibres::getcognom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method_getnacionalitat", "name": "Class_llibres::getnacionalitat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Class_llibres", "fromLink": "Class_llibres.html", "link": "Class_llibres.html#method_introduirdades", "name": "Class_llibres::introduirdades", "doc": "&quot;&quot;"},
            
            {"type": "Class",  "link": "Connectar.html", "name": "Connectar", "doc": "&quot;Establir una connexi\u00f3 a la base de dades biblioteca, amb l&#039;prestec gru1 i\nclau d&#039;acc\u00e9s grup1, tot aix\u00f2 sobre el servidor localhost. Tamb\u00e9 es defineix\nque el conjunt de car\u00e0cters que ser\u00e0 emprat quan s&#039;env\u00eden dades al servidor\nser\u00e0 UTF8.&quot;"},
                                                        {"type": "Method", "fromName": "Connectar", "fromLink": "Connectar.html", "link": "Connectar.html#method_connexio", "name": "Connectar::connexio", "doc": "&quot;&quot;"},
            
            {"type": "Class",  "link": "Prestecs.html", "name": "Prestecs", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method___construct", "name": "Prestecs::__construct", "doc": "&quot;El constructor es cridat cada cop que l&#039;objecte es creat:\n$prestecs = new Prestecs();\nMitjan\u00e7ant aquest s&#039;inicialitzar\u00e0n els atributs (arguments) de la classe.&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method___construct1", "name": "Prestecs::__construct1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method___construct7", "name": "Prestecs::__construct7", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method___construct8", "name": "Prestecs::__construct8", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getId", "name": "Prestecs::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getDataMaxDevolucio", "name": "Prestecs::getDataMaxDevolucio", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_setDataMaxDevolucio", "name": "Prestecs::setDataMaxDevolucio", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getDataRealDevolucio", "name": "Prestecs::getDataRealDevolucio", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_setDataRealDevolucio", "name": "Prestecs::setDataRealDevolucio", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getNumPrestecs", "name": "Prestecs::getNumPrestecs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_setNumPrestecs", "name": "Prestecs::setNumPrestecs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getMaxPrestecs", "name": "Prestecs::getMaxPrestecs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_setMaxPrestecs", "name": "Prestecs::setMaxPrestecs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getExemplar", "name": "Prestecs::getExemplar", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_setExemplar", "name": "Prestecs::setExemplar", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_getUsuari", "name": "Prestecs::getUsuari", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_setUsuari", "name": "Prestecs::setUsuari", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_llistarPrestecs", "name": "Prestecs::llistarPrestecs", "doc": "&quot;&lt;h2&gt;llistarPrestecs()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;obtenen totes les files disponibles en la taula\nPrestecs (1 fila = 1 prestec), junt a les seves columnes (dades dels prestecs).&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_insertarPrestec", "name": "Prestecs::insertarPrestec", "doc": "&quot;&lt;h2&gt;insertarPrestec()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;inserta un prestec a la base de dades.&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_eliminarPrestec", "name": "Prestecs::eliminarPrestec", "doc": "&quot;&lt;h2&gt;eliminarPrestec()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;elimina un prestec de la base de dades.&quot;"},
                    {"type": "Method", "fromName": "Prestecs", "fromLink": "Prestecs.html", "link": "Prestecs.html#method_editarPrestec", "name": "Prestecs::editarPrestec", "doc": "&quot;&lt;h2&gt;editarPrestec()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;elimina un prestec de la base de dades.&quot;"},
            
            {"type": "Class",  "link": "Usuaris.html", "name": "Usuaris", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method___construct", "name": "Usuaris::__construct", "doc": "&quot;El constructor es cridat cada cop que l&#039;objecte es creat:\n$usuaris = new Usuaris();\nMitjan\u00e7ant aquest s&#039;inicialitzar\u00e0n els atributs (arguments) de la classe.&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method___construct1", "name": "Usuaris::__construct1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method___construct10", "name": "Usuaris::__construct10", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method___construct11", "name": "Usuaris::__construct11", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getId", "name": "Usuaris::getId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getDni", "name": "Usuaris::getDni", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setDni", "name": "Usuaris::setDni", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getNom", "name": "Usuaris::getNom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setNom", "name": "Usuaris::setNom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getCognom", "name": "Usuaris::getCognom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setCognom", "name": "Usuaris::setCognom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getAdreca", "name": "Usuaris::getAdreca", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setAdreca", "name": "Usuaris::setAdreca", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getPoblacio", "name": "Usuaris::getPoblacio", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setPoblacio", "name": "Usuaris::setPoblacio", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getProvincia", "name": "Usuaris::getProvincia", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setProvincia", "name": "Usuaris::setProvincia", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getNacionalitat", "name": "Usuaris::getNacionalitat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setNacionalitat", "name": "Usuaris::setNacionalitat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getEmail", "name": "Usuaris::getEmail", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setEmail", "name": "Usuaris::setEmail", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getTelefon", "name": "Usuaris::getTelefon", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setTelefon", "name": "Usuaris::setTelefon", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_getNaixement", "name": "Usuaris::getNaixement", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_setNaixement", "name": "Usuaris::setNaixement", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_llistarUsuaris", "name": "Usuaris::llistarUsuaris", "doc": "&quot;&lt;h2&gt;llistarUsuaris()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;obtenen totes les files disponibles en la taula\nUsuaris (1 fila = 1 usuari), junt a les seves columnes (dades dels usuaris).&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_insertarUsuari", "name": "Usuaris::insertarUsuari", "doc": "&quot;&lt;h2&gt;insertarUsuari()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;inserta un usuari a la base de dades.&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_eliminarUsuari", "name": "Usuaris::eliminarUsuari", "doc": "&quot;&lt;h2&gt;eliminarUsuari()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;elimina un usuari de la base de dades.&quot;"},
                    {"type": "Method", "fromName": "Usuaris", "fromLink": "Usuaris.html", "link": "Usuaris.html#method_editarUsuari", "name": "Usuaris::editarUsuari", "doc": "&quot;&lt;h2&gt;editarUsuari()&lt;\/h2&gt;\n\n&lt;p&gt;Mitjan\u00e7ant aquesta funci\u00f3 s&#039;elimina un usuari de la base de dades.&quot;"},
            
            {"type": "Class",  "link": "autors.html", "name": "autors", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method___construct", "name": "autors::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method___construct1", "name": "autors::__construct1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method___construct2", "name": "autors::__construct2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method___construct3", "name": "autors::__construct3", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_getnom", "name": "autors::getnom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_getcognom", "name": "autors::getcognom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_getnacionalitat", "name": "autors::getnacionalitat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_introduirdades", "name": "autors::introduirdades", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_eliminardades", "name": "autors::eliminardades", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_mostrardadesid", "name": "autors::mostrardadesid", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "autors", "fromLink": "autors.html", "link": "autors.html#method_Actualitzardades", "name": "autors::Actualitzardades", "doc": "&quot;&quot;"},
            
            {"type": "Class",  "link": "generes.html", "name": "generes", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method___construct", "name": "generes::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method___construct1", "name": "generes::__construct1", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method___construct2", "name": "generes::__construct2", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method_getgenere", "name": "generes::getgenere", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method_getdesc", "name": "generes::getdesc", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method_introduirdades", "name": "generes::introduirdades", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "generes", "fromLink": "generes.html", "link": "generes.html#method_eliminardades", "name": "generes::eliminardades", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


