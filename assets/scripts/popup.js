function iniciaModal(modalID) {
  var modal = document.getElementById(modalID);
  if (modal) {
    modal.classList.add("mostrar");
    modal.addEventListener("click", (e) => {
      if (e.target.className == "fechar" || e.target.id == modalID) {
        modal.classList.remove("mostrar");
      }
    });
  }
}

const popup1 = document.querySelector("#botao1-1");
popup1.addEventListener("click", () => iniciaModal("modal1"));

const popup2 = document.querySelector("#botao2-2");
popup2.addEventListener("click", () => iniciaModal("modal2"));

const popup3 = document.querySelector("#botao3-3");
popup3.addEventListener("click", () => iniciaModal("modal3"));

const popup4 = document.querySelector("#botao4-4");
popup4.addEventListener("click", () => iniciaModal("modal4"));

const popup5 = document.querySelector("#botao5-5");
popup5.addEventListener("click", () => iniciaModal("modal5"));

const popup6 = document.querySelector("#botao6-6");
popup6.addEventListener("click", () => iniciaModal("modal6"));

const popup7 = document.querySelector("#botao7-7");
popup7.addEventListener("click", () => iniciaModal("modal7"));

const popup8 = document.querySelector("#botao8-8");
popup8.addEventListener("click", () => iniciaModal("modal8"));

const popup9 = document.querySelector("#botao9-9");
popup9.addEventListener("click", () => iniciaModal("modal9"));

const popup10 = document.querySelector("#botao10-10");
popup10.addEventListener("click", () => iniciaModal("modal10"));

const popup11 = document.querySelector("#botao11-11");
popup11.addEventListener("click", () => iniciaModal("modal11"));

const popup12 = document.querySelector("#botao12-12");
popup12.addEventListener("click", () => iniciaModal("modal12"));

const popup13 = document.querySelector("#botao13-13");
popup13.addEventListener("click", () => iniciaModal("modal13"));

const popup14 = document.querySelector("#botao14-14");
popup14.addEventListener("click", () => iniciaModal("modal14"));

const popup15 = document.querySelector("#botao15-15");
popup15.addEventListener("click", () => iniciaModal("modal15"));

const popup16 = document.querySelector("#botao16-16");
popup16.addEventListener("click", () => iniciaModal("modal16"));

const popup17 = document.querySelector("#botao17-17");
popup17.addEventListener("click", () => iniciaModal("modal17"));

const popup18 = document.querySelector("#botao18-18");
popup18.addEventListener("click", () => iniciaModal("modal18"));

const popup19 = document.querySelector("#botao19-19");
popup19.addEventListener("click", () => iniciaModal("modal19"));

const popup20 = document.querySelector("#botao20-20");
popup20.addEventListener("click", () => iniciaModal("modal20"));

const popup21 = document.querySelector("#botao21-21");
popup21.addEventListener("click", () => iniciaModal("modal21"));

const popup22 = document.querySelector("#botao22-22");
popup22.addEventListener("click", () => iniciaModal("modal22"));

const popup23 = document.querySelector("#botao23-23");
popup23.addEventListener("click", () => iniciaModal("modal23"));

const popup24 = document.querySelector("#botao24-24");
popup24.addEventListener("click", () => iniciaModal("modal24"));


