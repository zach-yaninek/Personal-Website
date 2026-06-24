import { whoIAm } from "@/lib/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WhoIAmSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <h2 className="mb-8 text-2xl font-medium tracking-wide text-foreground">
        Who I Am
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {whoIAm.map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <Badge variant="default">{item.label}</Badge>
              <CardTitle className="mt-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
