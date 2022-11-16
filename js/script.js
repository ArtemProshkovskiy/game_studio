(function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.button_select ');
        const caret = dropdown.querySelector('.sterlka');
        const menu = dropdown.querySelector('.dropdown_menu');
        const options = dropdown.querySelectorAll('.dropdown_menu li');
        const selected = dropdown.querySelector('.btn');

        select.addEventListener('click', () => {
            select.classList.toggle('check');
            caret.classList.toggle('rotate');
            menu.classList.toggle('menu_open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText
                select.classList.remove('check');
                caret.classList.remove('rotate');
                menu.classList.remove('menu_open');

                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });

    const languageSweeden = document.querySelector('.sweeden');
    const languageRu = document.querySelector('.ru');
    const languageUa = document.querySelector('.ua');

    const imgSweeden = document.querySelector('.sweeden-img');
    const imgRu = document.querySelector('.ru-img');
    const imgUa = document.querySelector('.ua-img');

    languageSweeden.addEventListener('click', function (e) {
        imgSweeden.classList.add('show')
        alert('Язык сайта поменялся')
        imgRu.classList.remove('show')
        imgUa.classList.remove('show')
    });
    languageRu.addEventListener('click', function (e) {
        imgRu.classList.add('show')
        alert('Язык сайта поменялся')
        imgSweeden.classList.remove('show') // то закрываем окно навигации, удаляя активный класс
        imgUa.classList.remove('show')
    });
    languageUa.addEventListener('click', function (e) {
        imgUa.classList.add('show')
        alert('Язык сайта поменялся')
        imgSweeden.classList.remove('show')
        imgRu.classList.remove('show')
    });


    const popupsHeaders = document.querySelectorAll('.down-menu_popup');

    popupsHeaders.forEach(popupHeader => {
        const popupButtonHeader = popupHeader.querySelector('.down-menu_button');
        const popupMenu = popupHeader.querySelector(".popup_content");

        popupButtonHeader.addEventListener('click', function (e) {
            popupMenu.classList.toggle('open');

            document.addEventListener('click', (e) => {
                const withinBoundaries = e.composedPath().includes(popupButtonHeader);

                if (!withinBoundaries) {
                    popupMenu.classList.remove('open');
                }
            })


        });
    });

    const swiper = new Swiper('.who-swiper', {
        speed: 500,
        slidesPerView: 12,
        spaceBetween: 10,
        //loop: true,
        initialSlide: 6,
        slideToClickedSlide: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const onSwiperChange = function() {
        const firstPreviewButton = document.querySelector(".who-swiper .swiper-slide-active");

        if (firstPreviewButton) {
            const name = firstPreviewButton.getAttribute("data-name")
            const role = firstPreviewButton.getAttribute("data-role")

            const previewName = document.querySelector(".role-preview__name")
            const previewRole = document.querySelector(".role-preview__role")

            if (previewName && previewRole) {
                previewName.innerHTML = `${name},`
                previewRole.innerHTML = `${role}`
            }
        }
    }

    swiper.on('init', function (){onSwiperChange()});
    swiper.on('slideChange', function (){onSwiperChange()});

    const RolePreview = {
        buttonActiveClass: "role-preview-button_active",
        previewName: ".role-preview__name",
        previewRole: ".role-preview__role",
        init: function () {
            this.handleStart();
            this.handleClick();
        },
        handleStart: function () {
            const firstPreviewButton = document.querySelector(".role-preview-button:first-child");

            if (firstPreviewButton) {
                firstPreviewButton.classList.add(this.buttonActiveClass)

                const name = firstPreviewButton.getAttribute("data-name")
                const role = firstPreviewButton.getAttribute("data-role")

                const previewName = document.querySelector(this.previewName)
                const previewRole = document.querySelector(this.previewRole)

                if (previewName && previewRole) {
                    previewName.innerHTML = `${name},`
                    previewRole.innerHTML = `${role}`
                }
            }
        },
        handleClick: function () {
            const _this = this;
            const rolePreviewButtons = document.querySelectorAll(".role-preview-button");

            rolePreviewButtons.forEach(function (button) {
                button.addEventListener("click", function (e) {
                    rolePreviewButtons.forEach(function (btn) {
                        btn.classList.remove(_this.buttonActiveClass)
                    });

                    e.target.classList.add(_this.buttonActiveClass)

                    const name = e.target.getAttribute("data-name")
                    const role = e.target.getAttribute("data-role")

                    const previewName = document.querySelector(_this.previewName)
                    const previewRole = document.querySelector(_this.previewRole)

                    if (previewName && previewRole) {
                        previewName.innerHTML = `${name},`
                        previewRole.innerHTML = `${role}`
                    }
                })
            });
        }
    }

    //RolePreview.init();
})()





