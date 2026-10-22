import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

/** Simple accessible overlay panel used by menus and panels. */
export function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/70 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 text-card-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-silver">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 text-lavender hover:bg-muted hover:text-cream">
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
