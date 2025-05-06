const ArabForm = document.getElementById("Ar-form");
const EnglishForm = document.getElementById("En-form");

document.getElementById("En-btn").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  return SumbitEnglishForm(e);
});

document.getElementById("Arab-btn").addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  return SumbitArabicForm(e);
});

async function SumbitEnglishForm(e) {
  try {
    const formData = new FormData(EnglishForm);

    console.log(formData.get("fileToUpload"));
    const result = await fetch(
      "https://form-backend-red.vercel.app/submit",

      {
        method: "POST",
        body: formData,
      }
    );
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
      "https://form-backend-pi.vercel.app/submit",

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
