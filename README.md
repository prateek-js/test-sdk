# test-sdk
repo to share test sdk files
**Tasks focused on :-**
  1. capture mouse events on a start sdk button click
  2. capture till stop sdk is clicked
  3. kept maximum capacity of events configurable say if there are 100 events captured next event will behave as FIFO.
  4. reset button to start fresh and delete previous events

**Approach**
1. client html file to test the sdk
2. SDK Js file acting as javascript module which is imported on client side
3. SDK js file has functionality related to what events to capture and process it

**Challenges**
1. In vanilla javascript scoping was little tricky to handle for event listeners function
2. As i tried to use find for callback inside addeventlistener function but then the scope of "this" was getting screwed up and debugging took time there so switched to arrow functions
3. other part was exposing sdk functions where had to use window function to make it global accessible

**TO-DO**
1. writing test case
