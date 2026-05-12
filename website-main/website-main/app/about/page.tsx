import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function AboutPage() {
  return (
    <section className="py-12">
      <Container className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-white">درباره من</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75">
            من مهدی اشتری هستم؛ تحلیلگر و راهبر محصول با تمرکز بر تصمیم‌سازی اجراپذیر. در پروژه‌های مختلف دیجیتال
            کمک کرده‌ام تیم‌ها از داده، نیازمندی و ذی‌نفعان، تصویر مشترک بسازند و خروجی قابل تحویل بگیرند.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-white/75">
            BA Lab را به عنوان آزمایشگاه تمرین روزمره طراحی کردم تا مفاهیم BABOK و تحلیل کسب‌وکار به زبان ساده و عملی
            برای مدیران و کارشناسان اجرا شود.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-base p-6">
            <h2 className="text-xl font-bold text-white">روش کار من</h2>
            <ul className="mt-4 space-y-3 text-white/75">
              <ListItem>تبدیل مسئله به تصمیم قابل اندازه‌گیری.</ListItem>
              <ListItem>هم‌راستایی ذی‌نفعان با مستندات سبک و شفاف.</ListItem>
              <ListItem>پیشبرد تدریجی و داده‌محور برای کاهش ریسک.</ListItem>
              <ListItem>آموزش حین عمل برای تیم‌های محصول.</ListItem>
            </ul>
          </div>
          <div className="card-base p-6">
            <h2 className="text-xl font-bold text-white">حوزه‌های تخصصی</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-accent-500">
              {["BABOK", "تصمیم‌سازی", "نیازمندی", "BPMN", "Discovery", "Product Ops"].map((tag) => (
                <span key={tag} className="rounded-full bg-accent-500/10 px-4 py-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-bold text-white">برای همکاری یا گفتگو</p>
              <p className="text-sm text-white/70">پیام بگذارید تا در کوتاه‌ترین زمان هماهنگ کنیم.</p>
            </div>
            <Button href="/contact" variant="primary" className="self-start sm:self-auto">
              رفتن به تماس
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 block h-2 w-2 rounded-full bg-accent-500" />
      <span>{children}</span>
    </li>
  );
}
