import '@testing-library/jest-dom';

// Framer Motion's viewport features rely on IntersectionObserver, which JSDOM doesn't provide.
// For unit tests we don't care about the actual intersection behaviour, so we add a minimal stub.
if (!('IntersectionObserver' in globalThis)) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).IntersectionObserver = class IntersectionObserver {
    callback: IntersectionObserverCallback;
    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }
    observe() {
      // no-op
    }
    unobserve() {
      // no-op
    }
    disconnect() {
      // no-op
    }
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  };
}



