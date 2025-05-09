const ArabForm = document.getElementById("Ar-form");
const EnglishForm = document.getElementById("En-form");

EnglishForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  return SumbitEnglishForm(e);
});

ArabForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();
  return SumbitArabicForm(e);
});

async function SumbitEnglishForm(e) {
  try {
    const formData = new FormData(EnglishForm);

    console.log(formData.get("fileToUpload"));
    const result = await fetch(
      "https://form-backend-kohl.vercel.app/submit",

      {
        method: "POST",
        body: formData,
      }
    );
    console.log(result);
    EnglishForm.style.display = "none";
    document.getElementById("en-message").classList.add("show");
  } catch (error) {
    console.log(error, "Error");
  }
}

async function SumbitArabicForm(e) {
  try {
    const formData = new FormData(ArabForm);

    console.log(formData.get("fileToUpload"));
    const result = await fetch(
      "https://form-backend-kohl.vercel.app/submit",

      {
        method: "POST",
        body: formData,
      }
    );
    ArabForm.style.display = "none";
    document.getElementById("ar-message").classList.add("show");
  } catch (error) {
    console.log(error, "Error");
  }
}
