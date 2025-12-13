


## Node.js:
- Single Threaded
- Dependencies:
 - v8 engine written on C++ and javascript
  - It handles the I/O part
 - Libuv
  - It handles the asynchronous I/O part, OS, network, file access


## It feels like events run “one after another,” so how can Node handle thousands of requests at the same time?

- **Node.js is single-threaded… but NOT single-tasked.**

Meaning:

* It has **one main thread** running JavaScript.
* But it has **a background system** (event loop + thread pool + OS kernel) that handles slow tasks *outside* the main thread.


### The Key: *Node never waits*. It offloads work. Node.js works like this:

```
1) Receive request
2) Start async task (e.g., read file, call DB, hit API)
3) Register a callback / event listener
4) FREE the main thread
5) When async task completes, event loop queues the callback
6) Node runs the callback when the main thread is free
```

➡️ So the main thread **never blocks**.
➡️ It only runs **small pieces of code**, very fast.

This allows thousands of requests to "run" at the same time.

---

### Think of Node like a Restaurant

### Node = One waiter

### Thread Pool = Kitchen

### OS = Delivery service

**How it handles thousands of customers:**

* The waiter (main thread) takes the order fast → doesn’t wait for cooking
* The kitchen (libuv thread pool) cooks in parallel
* The waiter serves the food when the kitchen finishes
* Customers don’t block the waiter

If Node waited for cooking, you'd serve 1 customer at a time.
But Node **doesn’t** wait — it delegates tasks.


### Technical Breakdown

**✔ 1. Event Loop**

Handles callback scheduling
Runs them one-by-one, **very fast**
Each callback is tiny and completes quickly
→ So in 1 second, it can process thousands.

**✔ 2. Thread Pool (libuv)**

Node uses 4 threads by default (can be increased).
Used for heavy async tasks like:

* fs (file reading)
* crypto
* DNS lookup

These run **in parallel** behind the scenes.

**✔ 3. OS Kernel**

Handles socket I/O, networking
Network requests are asynchronous at OS level
→ Kernel notifies Node when data is ready

This is how Node handles **10,000+ concurrent TCP/HTTP requests**.


### But you said “It runs one event after another”

True — the **event loop runs callbacks one-by-one**.
But here's what you’re missing:

➡️ The callbacks are **VERY fast**
➡️ The slow tasks are **not executed in JavaScript**
➡️ They happen **outside** the event loop

So the event loop is like a super-fast message processor.


## Event-Driven Architecture in Node.js

Node.js is built on top of an event-driven and non-blocking system. That means instead of waiting for one task to complete, Node.js keeps listening for events and responds whenever something happens.

Think of it like:

> Node.js is a waiter who doesn’t stand idle — instead, he takes many orders and serves dishes as soon as they are ready.
