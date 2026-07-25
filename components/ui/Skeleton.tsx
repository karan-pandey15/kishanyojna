type SkeletonProps = {
  className?: string;
};

/** Layout-stable placeholder to avoid CLS while content loads. */
export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-brand-green/10 ${className}`}
      aria-hidden="true"
    />
  );
}

export function PageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 sm:px-6" role="status" aria-label="Loading page">
      <Skeleton className="h-10 w-2/3 max-w-md" />
      <Skeleton className="h-4 w-full max-w-2xl" />
      <Skeleton className="h-4 w-5/6 max-w-xl" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Skeleton className="aspect-[4/3] w-full" />
        <Skeleton className="aspect-[4/3] w-full" />
        <Skeleton className="aspect-[4/3] w-full" />
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

/** Matches contact form field layout to avoid CLS while the client form mounts. */
export function ContactFormSkeleton() {
  return (
    <div
      className="mt-6 space-y-4"
      role="status"
      aria-label="Loading contact form"
    >
      <div>
        <Skeleton className="mb-1 h-4 w-24" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="mb-1 h-4 w-16" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="mb-1 h-4 w-16" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="mb-1 h-4 w-20" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="mb-1 h-4 w-20" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <Skeleton className="h-12 w-full rounded-full" />
      <span className="sr-only">Loading contact form…</span>
    </div>
  );
}
