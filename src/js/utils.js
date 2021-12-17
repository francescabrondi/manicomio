import "jquery/dist/jquery.min.js";

const utils = {
    /**
     * check se l'elemento è entrato in viewport
     * utile per animazioni o altro
     * @param el
     * @returns {boolean}
     */
    isInViewport: function (el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= 0 /*or $(window).height() */;
    },

    /**
     * Check se siamo a fine pagina.
     * utile per esempio in caso di infinite scroll
     * @returns {boolean}
     */
    isBottomVisible: function () {
        const scrollY = window.scrollY;
        const visible = document.documentElement.clientHeight;
        const pageHeight = document.documentElement.scrollHeight;
        const bottomOfPage = visible + scrollY >= pageHeight;
        return bottomOfPage || pageHeight < visible;
    },

    /**
     * Check se siamo su device mobile
     * @returns {boolean}
     */
    isMobileDevice: function () {
        let bool =
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1;
        //console.log(bool);
        return (
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1
        );
    },

    /**
     * getParameterByName
     * vanno passati il nome del parametro (obbligatorio) e la url totale (opzionale. se non c'è prende la location)
     * @returns il valore di un parametro in get dell'url se presente.
     * */
    getParameterByName: function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },

    getWindowSize: function () {
        let sizes = {
            vw: Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
            ),
            vh: Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
            ),
        };
        return sizes;
    },

    /**
	 * Smartmail: per creare un link to mail in js, prevenendo che gli spider fottano gli indirizzi scritti in chiaro
	 <a class="smartmail" data-smartmailuser="xyz" data-smartmaildom="gmail.com" href="javascript:void(0);">scrivici</a>
	 **/
    smartmail: function (selector) {
        let cta = document.querySelectorAll(selector);
        cta.forEach(function (el) {
            el.addEventListener("click", function () {
                let u = el.dataset.smartmailuser;
                let d = el.dataset.smartmaildom;
                console.log(u, d);
                window.open("mailto:" + u + "@" + d, "_blank");
            });
        });
    },

    /**
     * anchorHandler: scroll animato su href se chiama un ID.
     * ATTENZIONE. non è plain js, usa jQuery.
     */
    // anchorHandler: function (offsetElement = null) {
    //     $("a[href^=\\#]").on("click", function (event) {
    //         let offset =
    //             offsetElement != null ? offsetElement.clientHeight : "";
    //         event.preventDefault();
    //         console.log($(this.hash));
    //         if ($(this.hash).length > 0) {
    //             $("html,body").animate(
    //                 { scrollTop: $(this.hash).offset().top - offset },
    //                 500
    //             );
    //         } else {
    //             //console.log("no anchor with #"+this.hash);
    //         }
    //     });
    // },

    /**
	 * scrollHandler: per verificare se ho scrollato oltre l'header (o una certa altezza),
	 * e se sto scrollando UP o DOWN
	 * gestendo classi sul body di conseguenza
	 * @param: h
	 *
	 * Per attivarla:

	 let header = document.getElementsByClassName('site-header')[0];
	 let h = header.clientHeight;
	 window.addEventListener('scroll',(e)=>{
		utils.scrollHandler(h);
	});

	 * */
    scrollPos: 0,
    scrollHandler: function (offsetElement) {
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        let h = offsetElement.clientHeight;
        if (top > h / 4) {
            //document.body.style.paddingTop = h+'px';
            document.body.classList.add("pre-scrolled");
        } else {
            //document.body.style.paddingTop = 0;
            document.body.classList.remove("pre-scrolled");
        }
        if (top > h) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }

        // Scroll direction
        // detects new state and compares it with the new one
        if (document.body.getBoundingClientRect().top > this.scrollPos) {
            document.body.classList.add("scrolling-up");
            document.body.classList.remove("scrolling-down");
        } else {
            document.body.classList.add("scrolling-down");
            document.body.classList.remove("scrolling-up");
        }
        // saves the new position for iteration.
        this.scrollPos = document.body.getBoundingClientRect().top;
    },

    /**
     * per aggiungere classi all'elemento stesso e al body per apertura e chiusura menu
     * il parametro classe è da passare senza il punto
     * @param triggerClass
     */
    toggleMenu: function (triggerClass = "toggle-menu") {
        let trigger = document.getElementsByClassName(triggerClass)[0];
        if (typeof trigger !== "undefined") {
            trigger.addEventListener("click", function (e) {
                this.classList.toggle("is-active");
                document.body.classList.toggle("main-nav-open");
            });
        }
    },

    autocloseMenu: function (
        menuClass = "site-navigation",
        triggerClass = "toggle-menu"
    ) {
        //is-active - main-nav-open
        var menu = document.getElementsByClassName(menuClass)[0];
        var menuItems = [...menu.getElementsByTagName("a")];
        var toggle = document.getElementsByClassName(triggerClass)[0];
        menuItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                if (toggle.classList.contains("is-active")) {
                    toggle.click();
                }
            });
        });
    },

    /**
     * GOT from https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
     * @param elem -> il punto di partenza
     * @param selector -> il parent da trovare
     * @returns {*}
     */

    getClosest: function (elem, selector) {
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;
    },

    /**
     * Attacca/stacca la classe indicata da un certo elemento passato in parametro
     * @param selector
     * @param toggledClass
     */
    toggleClass: function (selector, toggledClass, target = "") {
        let items = document.querySelectorAll(selector);
        for (var item of items) {
            item.addEventListener(
                "click",
                function (e) {
                    if (target == "") {
                        e.currentTarget.classList.toggle(toggledClass);
                    } else {
                        var ts = document.querySelectorAll(target);
                        for (var tg of ts) {
                            tg.classList.toggle(toggledClass);
                        }
                    }
                }.bind(this)
            );
        }
    },

    /**
     * pagePerc: ritorna il punto di scorrimento a cui sono in pagina.
     * da mettere in ascolto in un listener di scroll
     * @returns {string}
     */
    pagePerc: function () {
        let top =
            (window.pageYOffset || document.documentElement.scrollTop) -
            (document.documentElement.clientTop || 0);
        let perc = (
            (top /
                (document.documentElement.scrollHeight - window.innerHeight)) *
            100
        ).toFixed(2);
        return perc;
    },

    /**
     * scrollo l'elemento in parallasse riferito al suo contesto.
     * @param context
     * @param element
     * @param coefficient
     */
    setParallax(context, element, coefficient) {
        var doc = document.documentElement;

        window.addEventListener("scroll", () => {
            if (this.isInViewport(context)) {
                let top =
                    (window.pageYOffset || doc.scrollTop) -
                    (doc.clientTop || 0);
                element.style.transform =
                    "translateY(" + top * coefficient + "px)";
                element.classList.remove("exit");
            } else {
                element.classList.add("exit");
            }
        });
    },
};

export default utils;
