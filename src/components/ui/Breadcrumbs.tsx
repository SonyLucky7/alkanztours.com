import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.label} className="flex items-center">
              {isLast || !item.href ? (
                <span className="text-white" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              )}
              
              {!isLast && (
                <span className="mx-2 text-[var(--color-primary)]">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
