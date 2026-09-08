/*
 * nav.js
 * Reusable navigation system for all pages.
 */

(() => {
    "use strict";

    const navigation = {

        primary: [
            {
                label: "Home",
                href: "index.html"
            },
            {
                label: "About",
                href: "about.html"
            },
            {
                label: "Projects",
                href: "projects.html"
            },
            {
                label: "Contact",
                href: "contact.html"
            }
        ],

        secondary: [
            {
                label: "Resume",
                href: "resume.html"
            },
            {
                label: "GitHub",
                href: "https://github.com/"
            },
            {
                label: "LinkedIn",
                href: "https://www.linkedin.com/"
            }
        ]
    };


    /* Determine which page the visitor is currently on */

    function getCurrentPage() {

        const fileName =
            window.location.pathname
                .split("/")
                .pop();

        return fileName || "index.html";
    }


    /* Create an individual navigation link */

    function createLink(item, currentPage) {

        const listItem =
            document.createElement("li");

        const link =
            document.createElement("a");

        link.href = item.href;

        link.textContent = item.label;


        /* Highlight the current page */

        if (
            !item.href.startsWith("http") &&
            item.href === currentPage
        ) {

            link.setAttribute(
                "aria-current",
                "page"
            );
        }


        /* Open external websites in a new tab */

        if (item.href.startsWith("http")) {

            link.target = "_blank";

            link.rel = "noopener noreferrer";
        }


        listItem.appendChild(link);

        return listItem;
    }


    /* Build the navigation */

    function buildNavigation(
        selector,
        items,
        navigationName
    ) {

        const container =
            document.querySelector(selector);

        if (!container) {
            return;
        }


        const list =
            document.createElement("ul");

        list.className = "nav-list";


        const currentPage =
            getCurrentPage();


        items.forEach(item => {

            list.appendChild(
                createLink(
                    item,
                    currentPage
                )
            );

        });


        /* Mobile menu button */

        const button =
            document.createElement("button");

        button.className =
            "nav-toggle";

        button.type = "button";

        button.textContent =
            "Menu";

        button.setAttribute(
            "aria-expanded",
            "false"
        );

        button.setAttribute(
            "aria-label",
            `Toggle ${navigationName} navigation`
        );


        button.addEventListener(
            "click",
            () => {

                const isOpen =
                    list.classList.toggle(
                        "is-open"
                    );

                button.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

                button.textContent =
                    isOpen
                        ? "Close menu"
                        : "Menu";
            }
        );


        container.appendChild(button);

        container.appendChild(list);
    }


    /* Initialize both navigation menus */

    function initializeNavigation() {

        buildNavigation(
            "[data-primary-nav]",
            navigation.primary,
            "primary"
        );

        buildNavigation(
            "[data-secondary-nav]",
            navigation.secondary,
            "secondary"
        );
    }


    document.addEventListener(
        "DOMContentLoaded",
        initializeNavigation
    );

})();

