import * as React from "react";

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = React.useState<string | null>();
  const observer = React.useRef<IntersectionObserver | null>(null);
  const intersectingIds = React.useRef<Set<string>>(new Set());

  React.useEffect(() => {
    const elements = selectors.map((selector) => document.querySelector(selector));

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      // Update the set of intersecting IDs
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (id) {
          if (entry.isIntersecting) {
            intersectingIds.current.add(id);
          } else {
            intersectingIds.current.delete(id);
          }
        }
      });

      // Find the topmost intersecting element by checking all currently intersecting sections
      if (intersectingIds.current.size > 0) {
        let topmostId: string | null = null;
        let topmostTop = Infinity;

        intersectingIds.current.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < topmostTop) {
              topmostTop = rect.top;
              topmostId = id;
            }
          }
        });

        if (topmostId) {
          setActiveId(topmostId);
        }
      }
    }, options);

    elements.forEach((el) => el && observer.current?.observe(el));

    return () => {
      observer.current?.disconnect();
      intersectingIds.current.clear();
    };
  }, [selectors]);

  return activeId;
}
