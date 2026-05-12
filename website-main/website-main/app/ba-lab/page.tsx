import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function BALabPage() {
  return (
    <section className="py-12">
      <Container className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-accent-500">فضای اصلی یادگیری</p>
          <h1 className="text-3xl font-extrabold text-white">BA Lab</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75">
            BA Lab فضایی کاربردی و تصمیم‌محور برای تمرین تحلیل کسب‌وکار است؛ مبتنی بر BABOK و تجربه‌های روزمره
            در پروژه‌های ایرانی، تا ابزار، زبان مشترک و خروجی‌های اجراپذیر برای تیم‌های محصول فراهم شود.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-base p-6">
            <h2 className="text-xl font-bold text-white">برای چه کسانی است؟</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              <ListItem>تحلیلگران و مدیران محصول که نیاز به زبان مشترک با تیم دارند.</ListItem>
              <ListItem>رهبران تیم که به دنبال تصمیم‌سازی سریع و مستند هستند.</ListItem>
              <ListItem>کارشناسان BA که می‌خواهند BABOK را در پروژه‌های واقعی به کار بگیرند.</ListItem>
            </ul>
          </div>

          <div className="card-base p-6">
            <h2 className="text-xl font-bold text-white">خروجی‌ها</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              <ListItem>چک‌لیست‌های آماده برای نیازمندی، تصمیم و پذیرش.</ListItem>
              <ListItem>نمونه‌های مستندات سبک برای هم‌راستایی ذی‌نفعان.</ListItem>
              <ListItem>مسیر یادگیری قدم‌به‌قدم برای استقرار BABOK در تیم.</ListItem>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-accent-500/30 bg-accent-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">درخواست دسترسی / دمو</p>
            <p className="text-sm text-white/70">برای هماهنگی و دریافت جزئیات، پیام بگذارید.</p>
          </div>
          <Button href="/contact" variant="primary" className="self-start sm:self-auto">
            رفتن به صفحه تماس
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-500 shadow-glow" />
      <span>{children}</span>
    </li>
  );
}
