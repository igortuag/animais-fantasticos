export default function initTooltip() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  if (tooltip) {
    tooltip.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });

    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);

      onMouseMove.tooltipBox = tooltipBox;
      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;

      this.addEventListener("mousemove", onMouseMove);
      this.addEventListener("mouseleave", onMouseLeave);
    }

    function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const text = element.getAttribute("aria-label");
      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
    };

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };
  }
}
