---
title: 'Inner Whale - 3C Implementation'
description: 'Character, Camera, Controls in our 3rd year game, Inner Whale'
pubDate: 'Mar 16 2026'
updatedDate: 'Apr 01 2026'
heroImage: '/innerwhale/iw-big.jpg'
status: "In Progress"
category: "Academic"
tags: ["Unreal Engine", "3C", "Gameplay"]
---

## About

In any game, the **3C (Character, Camera, Controls)** form the foundation of the player experience. Regardless of how polished the visuals or systems are, if the 3C are not responsive and intuitive, the game will feel unsatisfying.

This article focuses on how we designed and implemented the 3C in our project, as well as the challenges we encountered along the way.

---

## Goals

* Create a responsive and readable character controller.
* Ensure smooth and intuitive camera behavior.
* Design controls that feel natural and consistent.
* Maintain tight feedback between player input and in-game response.

---

## Character & Movement

### Description

The character controller was designed around **readability and responsiveness**, while still fitting the constraints of our game design.

Movement is restricted to **8 directions**, meaning the character can only move in increments of 45°. To achieve this, we implemented functions that map player input to the nearest valid direction, ensuring consistent and predictable movement.

We also spent significant time fine-tuning:

* Base movement speed and sprint speed to match the scale of the environment.
* A jump system that evolved over time to feel more **snappy and reactive**.

Additional mechanics include but are not limited to:

* **Dodge**: A fast evasive movement enhanced with VFX and a simple animation that was initially a placeholder but ended up fitting the game well.
* **Fishing / Grappling Mechanic**: A core gameplay feature where the player pulls objects using a fishing rod. This involves:

  * A small QTE (rotating the joystick clockwise),
  * Camera zoom,
  * VFX and rumble feedback,
  * Strong visual emphasis to highlight the interaction.

### Learning Points

* **Directional Constraints**: Limiting movement to 8 directions improves clarity but requires careful input mapping to avoid frustration.

* **Game Feel Iteration**: The jump mechanic required multiple iterations, combining physics tuning with animation techniques like **stretch and squash** and VFX.

* **Feedback is Key**: Adding VFX, camera effects, and controller rumble significantly improved the perceived responsiveness of actions.

### Complications

* **Angle Snapping**: Mapping analog input to discrete directions can feel unnatural if not handled carefully.

* **Balancing Speed**: Movement speed had to be aligned with level scale to avoid making the world feel too small or too slow.

* **Multi-System Interactions**: The grappling mechanic required synchronisation between input, camera, VFX, and gameplay logic.

* **Allowing QTE with any joystick**: During our playtests, different players tried to reel in using different joysticks, which allowed us to see that our indication of which one to turn was not clear enough. We ended up allowing the QTE to be completed with any joystick as long as the rotation direction is correct.

<div style="text-align: center;">
    <img src="/innerwhale/iw-snappeddirection.jpg" alt="Blueprints" width="auto" height="auto">
</div>

---

## Camera

### Description

Our game uses an **almost top-down camera with an angle**, allowing players to perceive depth while maintaining a clear view of the environment.

Achieving the right feel required extensive tuning of:

* Camera angle,
* Distance from the player,
* Field of View (FOV).

We implemented a **custom camera system** with the following features:

* The camera follows a **point in front of the character**, rather than the character itself, improving visibility in the movement direction.
* Movement is **smoothed over time**, avoiding abrupt transitions.
* Contextual **zoom effects** during certain actions (such as interactions or grappling) to focus the player’s attention.

### Learning Points

* **Framing Matters**: Small adjustments to angle and FOV drastically change how readable the environment feels.

* **Look-Ahead Camera**: Following a point ahead of the player improves anticipation and navigation.

* **Smoothing**: Interpolating camera position and rotation prevents jitter and enhances overall polish.

### Complications

* **Camera Lag vs Responsiveness**: Too much smoothing makes the camera feel sluggish, while too little causes jitter.

* **Contextual Transitions**: Switching between default view and zoomed states required careful blending to avoid jarring effects.

---

## Controls

### Description

Controls were designed to be simple, responsive, and consistent across all gameplay systems.

We focused on:

* Clear input mapping for movement and actions,
* Immediate visual and mechanical feedback,
* Consistency between exploration and interaction systems.

### Learning Points

* **Input Abstraction**: Separating input handling from gameplay logic made iteration easier.

* **Consistency Across Systems**: Movement, dodge, and grappling all needed to feel like part of the same control scheme.

* **Reinforced Feedback**: Combining animation, VFX, camera effects, and rumble created a stronger connection between player input and in-game response.

### Complications

* **Input Priority**: Handling overlapping inputs (movement, dodge, interaction) required clear prioritisation rules.

* **QTE Integration**: The grappling mechanic introduced a different type of input system that had to remain intuitive and not break flow.

---

## Conclusion

Working on the 3C highlighted how critical they are to the overall feel of a game. Even small adjustments can significantly impact the player experience.

This process was highly iterative, involving constant testing and refinement. Systems such as movement, camera behavior, and interaction mechanics evolved together, reinforcing the importance of treating the 3C as a unified system rather than separate components.










