const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length) {
    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove("activeClass");
      });
      tabContent[index].classList.add("ativo");
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });

    activeTab(0);
  }
};
initTabNav();

const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    const activeAccordion = (event) => {
      event.currentTarget.classList.toggle(activeClass);
      event.currentTarget.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
};
initAccordion();

const initScrollSuave = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInternos) {
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });
    };

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
};
initScrollSuave();

const initAnimacaoScroll = () => {
  const sections = document.querySelectorAll(`.js-scroll`);

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    const animalScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    };

    animalScroll();

    window.addEventListener("scroll", animalScroll);
  }
};
initAnimacaoScroll();