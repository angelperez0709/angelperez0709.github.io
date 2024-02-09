let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.addEventListener("load", () => {
  document.querySelectorAll("#accesos-burguer li").forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector("input[type='checkbox']").checked = false;
    });
  });
  showSlides(slideIndex);
  document.querySelectorAll("input").forEach((element) => {
    element.addEventListener("input", (e) => {
      if (e.target.value !== "") {
        element.classList.remove("bg-gray-700");
        element.classList.add("bg-white");
        element.classList.remove("text-white");
        element.classList.add("text-black");
      } else {
        element.classList.add("bg-gray-700");
        element.classList.remove("bg-white");
        element.classList.add("text-white");
        element.classList.remove("text-black");
      }
    });
  });
  document.querySelector("textarea").addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.classList.remove("bg-gray-700");
      e.target.classList.add("bg-white");
      e.target.classList.remove("text-white");
      e.target.classList.add("text-black");
    } else {
      e.target.classList.add("bg-gray-700");
      e.target.classList.remove("bg-white");
      e.target.classList.add("text-white");
      e.target.classList.remove("text-black");
    }
  });

  document.querySelector("form").addEventListener("submit", (e) => {
    handleSubmit(e);
  });
});

function handleSubmit(e) {
  e.preventDefault();
  callSender();
}

function callSender() {
  showModal();
  // fetch("http://localhost:3000/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*", // Allow requests from any origin
  //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Allow specific HTTP methods
  //     "Access-Control-Allow-Headers": "Content-Type", // Allow specific headers
  //   },
  //   body: JSON.stringify({
  //     name: document.querySelector("#name").value,
  //     email: document.querySelector("#email").value,
  //     message: document.querySelector("#message").value,
  //   }),
  // })
  //   .then((data) => {
  //     showModal();
  //   if(data.status===200){
  //     alert("Mensaje enviado correctamente");
  //   }else if(data.status===500){
  //     alert("Error al enviar el mensaje");
  //   }})
  //   .catch((err) => {
  //     alert("Error al enviar el mensaje");
  //   });
}

function showModal(){
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal(){
  document.getElementById('modal').classList.add('hidden');
}
