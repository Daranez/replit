import { useCountUp } from '@/hooks/useCountUp';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({ end, suffix = '', prefix = '', className = '' }: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp({ end, duration: 2000, isActive: isVisible });

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </div>
  );
}
