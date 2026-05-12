import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { contentItems } from "@/lib/data";

export default function ContentPage() {
  return (
    <section className="py-12">
      <Container className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-white">محتوا</h1>
          <p className="text-lg text-white/75">گزیده‌ای از یادداشت‌ها و تمرین‌های روزمره در BA Lab.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {contentItems.map((item) => (
            <article key={item.title} className="card-base flex flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                {item.tag && (
                  <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-500">
                    {item.tag}
                  </span>
                )}
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
              </div>
              <p className="text-sm leading-relaxed text-white/75">{item.excerpt}</p>
              <div className="mt-auto">
                <Button variant="ghost" className="px-4" aria-label={`خواندن ${item.title}`}>
                  خواندن
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
