document.addEventListener('DOMContentLoaded', function () {
  // ==========================================
  // ส่วนที่ 1: ระบบข้อความต้อนรับผู้เข้าชม (Personalized Welcome)
  // ==========================================
  const visitorName = prompt('กรุณากรอกชื่อของคุณ:');
  const welcomeText = document.getElementById('welcomeText');

  if (welcomeText) {
    if (visitorName && visitorName.trim() !== '') {
      welcomeText.textContent = `ยินดีต้อนรับคุณ ${visitorName.trim()} เข้าสู่เว็บไซต์ Portfolio ของฉัน`;
    } else {
      welcomeText.textContent = 'ยินดีต้อนรับเข้าสู่เว็บไซต์ Portfolio ของฉัน';
    }
  }

  // ==========================================
  // ส่วนที่ 2: ระบบประมาณการค่าบริการพัฒนาเว็บไซต์ (Website Cost Estimator)
  // ==========================================
  const pricePerPage = 500;
  const pageCountDisplay = document.getElementById('pageCountDisplay');
  const totalCostDisplay = document.getElementById('totalCostDisplay');
  const recalculateBtn = document.getElementById('recalculateBtn');

  function estimateWebsiteCost() {
    const pagesInput = prompt('กรุณากรอกจำนวนหน้าเว็บไซต์ที่ต้องการพัฒนา (หน้าละ 500 บาท):');
    const pages = Number(pagesInput);

    // ตรวจสอบว่าผู้ใช้กรอกตัวเลขที่ถูกต้องและมากกว่าหรือเท่ากับ 0
    if (!isNaN(pages) && pages > 0) {
      const totalCost = pages * pricePerPage;
      pageCountDisplay.textContent = pages;
      totalCostDisplay.textContent = totalCost.toLocaleString();
    } else {
      pageCountDisplay.textContent = 0;
      totalCostDisplay.textContent = 0;
    }
  }

  // เรียกใช้งานฟังก์ชันคำนวณทันทีเมื่อโหลดหน้าเว็บ
  estimateWebsiteCost();

  // เผื่อผู้ใช้ต้องการกดคำนวณจำนวนหน้าใหม่อีกครั้ง
  if (recalculateBtn) {
    recalculateBtn.addEventListener('click', estimateWebsiteCost);
  }

  // ==========================================
  // ฟังก์ชันเดิมของเว็บไซต์
  // ==========================================
  const greetingBtn = document.getElementById('greetingBtn');
  const message = document.getElementById('greetingMessage');

  if (greetingBtn && message) {
    greetingBtn.addEventListener('click', function () {
      message.textContent = 'สวัสดีค่ะ ยินดีที่ได้รู้จักค่ะ';
    });
  }

  // ระบบ Smooth Scroll เมื่อคลิกเมนูนำทาง
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});