import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalResources = [
        '/sahej.jpg',
        // Add other critical resources here
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Add loading performance measurement
    const measurePerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
              // You can send this data to analytics
              console.log('Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
            }
          }, 0);
        });
      }
    };

    preloadResources();
    measurePerformance();

    // Clean up function
    return () => {
      // Clean up any event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;