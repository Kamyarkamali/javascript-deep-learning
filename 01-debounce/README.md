# Debounce

## چیه؟
Debounce یک تکنیک برای محدود کردن تعداد اجرای یک تابع است. تابع فقط زمانی اجرا می‌شه که ورودی‌ها برای مدت مشخصی متوقف شده باشن.

## چرا مهمه؟
- کاهش بار سرور در جستجوی زنده
- بهینه‌سازی رویدادهای resize و scroll
- جلوگیری از اجرای مکرر توابع سنگین

## پیاده‌سازی
فایل [`debounce.js`](./debounce.js) رو ببین.

## نکات کلیدی
- باید `this` و `args` رو با `apply` حفظ کنم
- `clearTimeout` قلب debounce هست
- فرقش با throttle: debounce صبر می‌کنه، throttle محدود می‌کنه

## منابع
- [MDN - setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
