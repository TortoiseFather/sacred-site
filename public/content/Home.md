Autonomous trains are often described as if the problem is simply technical: build better sensors, automate the cab, remove the driver, and the railway becomes autonomous.

This research starts from a different position.

Railway safety is not produced by the cab alone. It emerges from the interaction between the train, the driver or onboard system, the signaller, the timetable, the infrastructure, the rules, the weather, the route, and the people around the railway. A train may be the thing that moves, but it moves inside an ecosystem.

This project asks:

- How should autonomous railway operation be understood for safety assurance?
- Is the train best treated as an ego-vehicle, as part of a system-of-systems, or as an ego-vehicle within a railway ecosystem?
- How can route-specific railway knowledge be turned into measurable safety requirements?
- What happens when the assumptions needed for safe autonomous operation no longer hold?
- Given the current state of technology, what kind of autonomous railway operation can actually be justified?

The central argument is simple:

**Autonomous railway safety cannot be credibly assured by bounding the cab in isolation. It must be grounded in the railway ecosystem, expressed through route-specific operational limits, and supported by explicit failure management.**

---

## What is SACRED?

SACRED stands for **Safe Autonomy of Complex Railway Environments within a Digital space**.

It is a methodology for describing, analysing, and bounding autonomous railway operation before claims about safety are made.

Put simply, SACRED is a way of getting from:

> **“We want an autonomous train”**

to:

> **“Here is the route, here are the assumptions, here are the hazards, here are the measurable limits, here is what the system must do when those limits are broken, and here is the safe operating concept that follows.”**

SACRED does not try to replace existing railway standards, automation classifications, or assurance frameworks. It sits before them. Its purpose is to produce the operational artefacts that later safety arguments need.

The two core outputs are:

### Operational Domain Model

The **Operational Domain Model**, or ODM, describes the railway environment in which the system is expected to operate. This includes infrastructure, signals, stations, junctions, environmental conditions, operational rules, route-specific features, and the hazards that may arise within that environment.

In short:

> The ODM describes what the railway environment permits, constrains, and demands.

### Safe Operating Concept

The **Safe Operating Concept**, or SOC, describes the conditions under which autonomous operation may be claimed. It sets out what must be true for the system to operate safely, what must be monitored, and what the system must do when those conditions no longer hold.

In short:

> The SOC describes how the autonomous system must behave to remain safe within the railway environment.

SACRED connects these two artefacts through seven steps:

1. Define the concept and scope of operation.
2. Identify hazards across the train and wider railway ecosystem.
3. Validate those hazards and turn them into requirements.
4. Convert requirements into measurable operational metrics.
5. Define what happens when those metrics are breached.
6. Compare the required behaviour against the contemporary state of the art.
7. Consolidate the result into a Safe Operating Concept.

---

## Motivation

A train is constrained by track, signalling, timetable, braking distance, route knowledge, operational rules, and communication with the wider railway. Many safety-critical decisions depend on information that exists outside the cab. This means that a cab-only view of autonomy misses the very things that make railway operation safe.

SACRED was developed to address that gap.

It provides a railway-specific way to ask:

> What must be true about this route, this system, this environment, and this ecosystem before autonomous operation can be considered safe?

---

## What is this website?

This website is the companion to my PhD research on railway safety.

The thesis gives the full academic argument. This website presents the methodology in a more direct and explorable form.

Here, you can walk through each step of SACRED, see the artefacts it produces, and follow examples based on real railway contexts. The site is intended to make the methodology easier to navigate than a thesis chapter: less linear, more visual, and more focused on how the pieces connect.

The website includes:

- an overview of the SACRED methodology;
- step-by-step explanations of each stage;
- diagrams showing how the process develops;
- examples from railway case studies;
- definitions of key artefacts such as the ODM, SOC, hazard register, metrics, and TRAP table;
- supporting material from the wider research.

---

## A PhD about trains

At its core, this is a project about how to make emerging technology legible to railway safety.

Autonomous trains are not just trains with AI in the cab. They are trains operating inside a dense, historical, human, technical, procedural, and environmental system.

SACRED is an attempt to make that system explicit.

It asks what the railway already knows, what the autonomous system needs to know, what the ecosystem must continue to provide, and where the boundary of safe operation should be drawn.

That boundary is where the safety argument begins.