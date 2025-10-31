let container = document.getElementById("container");
let results = document.getElementById("results");
let gender = document.getElementById("gender");
let genApi = document.getElementById("genApi");
let genCustom = document.getElementById("genCustom");

// مقاطع لتوليد أسماء خيالية
let start = ["را", "شي", "مار", "لو", "زا", "كو"];
let mid = ["ا", "ي", "و", "ين", "ور"];
let end = ["ان", "ون", "يل", "وس", "ار"];

// دالة توليد اسم خيالي
function makeCustomName() {
  const s = start[Math.floor(Math.random() * start.length)];
  const m = Math.random() < 0.5 ? mid[Math.floor(Math.random() * mid.length)] : "";
  const e = end[Math.floor(Math.random() * end.length)];
  return s + m + e;
}

// عرض الاسم في واجهة المستخدم
function showName(name, source) {
  const dev = document.createElement("div");
  dev.className = 'name-box'; // تصحيح اسم الكلاس
  dev.innerHTML = `
    <div><b>${name}</b></div>
    <small>${source}</small><br>
    <button class="copy-btn">نسخ</button>
  `;
  dev.querySelector(".copy-btn").onclick = () => {
    navigator.clipboard.writeText(name);
    alert("تم النسخ ✅");
  };
  results.appendChild(dev);
}

// جلب أسماء من API 
async function getApiNames() {
  results.innerHTML = "";
  const genderV = gender.value;
  const url = `https://randomuser.me/api/?results=3${genderV ? "&gender=" + genderV : ""}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.results.forEach(u => {
      const fullName = `${u.name.first} ${u.name.last}`;
      showName(fullName, "من API");
    });
  } catch (err) {
    console.error("فشل جلب الأسماء:", err);
    showName("خطأ في جلب الأسماء", "API"); // ملاحظة للمستخدم
  }
}

// توليد أسماء خيالية
function getCustomNames() {
  results.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    showName(makeCustomName(), "خيالي");
  }
}

// ربط الأزرار
genApi.onclick = getApiNames;
genCustom.onclick = getCustomNames;
