// mouse-events-sdk.js
class MouseEventsSDK {
  constructor(maxCapacity = 1000) {
    this.maxCapacity = maxCapacity;
    this.events = [];
    this.isCollecting = false;
  }

  start() {
    if (!this.isCollecting) {
      this.isCollecting = true;
      document.addEventListener('mousemove', this.handleMouseEvent);
      document.addEventListener('click', this.handleMouseEvent);
    }
  }

  stop() {
    if (this.isCollecting) {
      this.isCollecting = false;
      document.removeEventListener('mousemove', this.handleMouseEvent);
      document.removeEventListener('click', this.handleMouseEvent);
    }
  }

  getData() {
    console.log(this.events);
    return JSON.stringify(this.events);
  }

  resetData() {
    this.events = [];
  }

  handleMouseEvent = (event) => {
    if (this.events.length >= this.maxCapacity) {
      // FIFO strategy when max capacity reached
      this.events.shift();
    }
    // tried to be little picky here by adding timestamp, event type and co-ordinates
    this.events.push({
      timestamp: new Date().toISOString(),
      eventType: event.type,
      coordinates: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  }
}

// Singleton pattern for better control over the instance
const sdkInstance = new MouseEventsSDK();

// Export the instance so it can be used in other modules
export default sdkInstance;