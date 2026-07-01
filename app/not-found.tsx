import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p className="text-6xl font-extrabold text-primary-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Stránka sa nenašla</h1>
      <p className="mt-2 max-w-md text-slate-600">
        Ľutujeme, požadovaná stránka neexistuje alebo bola presunutá.
      </p>
      <div className="mt-8">
        <Button href="/">Späť na úvod</Button>
      </div>
    </Container>
  );
}
