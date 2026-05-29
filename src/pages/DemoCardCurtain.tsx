import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtain,
} from '../components/ui/card-curtain-reveal';

import Button from '../components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

export default function DemoCardCurtain() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <CardCurtainReveal className="h-[560px] w-96 border border-neutral-800 bg-neutral-900 text-white shadow">
        <CardCurtainRevealBody>
          <CardCurtainRevealTitle className="text-3xl font-medium tracking-tight">Behind the Curtain</CardCurtainRevealTitle>
          <CardCurtainRevealDescription className="my-4">
            <p className="text-sm text-gray-300">This is an interactive card reveal used as a project card alternative.</p>
          </CardCurtainRevealDescription>
          <Button variant="secondary" className="aspect-square rounded-full"><ArrowUpRight /></Button>
          <CardCurtain className="bg-white/5" />
        </CardCurtainRevealBody>

        <CardCurtainRevealFooter className="mt-auto">
          <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2388&auto=format&fit=crop&ixlib=rb-4.0.3" alt="unsplash" />
        </CardCurtainRevealFooter>
      </CardCurtainReveal>
    </div>
  );
}
