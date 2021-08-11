import { QueryList, ElementRef } from '@angular/core';

export const mapElements = (
  elementRefs: QueryList<ElementRef>
): HTMLElement[] => {
  const result: HTMLElement[] = elementRefs.map(
    (elementRef: ElementRef) => elementRef.nativeElement
  );
  return result;
};
