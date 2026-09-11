
// get eleman in html
const input = document.querySelector(".input");
const div = document.querySelector(".div");
const btn = document.querySelector(".btn");

// گرفتن اطلاعات از بک اند
const BASE_URL = "https://dummyjson.com/products";
let loading = false;

// آرایه ای که اطلاعات بک اند داخلش ریخته میشود
let resultFainal = [];

window.addEventListener("DOMContentLoaded", async () => {
  // گرفتن اطلاعات از بک اند و مرج کردن داخل آرایه
  async function getDaya() {
    loading = true;
    // مدیریت ریسپانس و هندل کردن خطاها
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`error:${response.status}`);
      }

      loading = false;
      // گرفتن دیتا و پارس کردنش
      const result = await response.json();
      // انتقال دیتای پارس شده به آرایه خالی برای نمایش دیتا
      resultFainal = result.products;
      // استفاده از فانکشن برای نمایش اولیه دیتاها
      render(result.products);
    } catch (error) {
      console.log(error.message);
    }
  }
  // فراخوانی فانکشن برای دریافت و نمایش اطلاعات
  await getDaya();

  // get data in api
  resultFainal.forEach((item) => {
    let p = document.createElement("p");
    p.innerText = item.brand || item.title;
    p.classList.add("show");
    div.appendChild(p);
  });
});

// فانکشن برای سرچ مقادیر
function search(value) {
  // فیلتر کردن دیتاهای دریافتی براساس رشته بودن یا نبودن
  const filtered = resultFainal.filter((item) => {
    // چون دیتاها دریافتی بعضی هاششون رشته نبودن اول رشته بودن ان هارو چک کردم که از ارور جلوگیری بشود
    const brand = String(item.brand || "").toLowerCase();
    const title = String(item.title || "").toLowerCase();
    // سرچ بر اساس تایپ کاربر
    return brand.includes(value) || title.includes(value);
  });
  // قرار دادن نتیجه فیلتر شده اصلی در فانکشنی که وظیفه نمایش کلی را دارد
  render(filtered);
}

// فانکشن که وظیفه اصلی نمایش در یوآی رو به عهده دارد
// func get eleman and render
function render(item) {
  div.innerHTML = "";
  item.forEach((p) => {
    div.innerHTML += `<p>${p.brand || p.title}</p>`;
  });
}

//debounce
function debounce(func, delay = 1000) {
  let timer;
  return (...args) => {
    console.log(`timer2:${timer}`);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debounceSearch = debounce(search, 1000);

input.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  debounceSearch(value);
});

btn.addEventListener("click", debounce(clickHandeler, 1000));
function clickHandeler() {
  console.log("cliked");
}
