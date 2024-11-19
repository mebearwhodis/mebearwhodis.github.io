---
title: 'Physics Engine'
description: 'A small 2D Physics Engine developed in C++'
pubDate: 'Nov 19 2024'
heroImage: '/physicsengine-heroimage.png'
---

## About

This project was developed as part of the coursework at SAE Institute Geneva. The objective was to create a robust 2D physics engine in C++ that simulates various physical phenomena. This involved implementing key features such as force application to objects, collision detection, triggers, and friction. Additionally, we used SDL2 (Simple DirectMedia Layer) for rendering graphics and integrated ImGui for a user interface to facilitate debugging and visualisation.

## Goals

- Develop a math library for physics calculations.
- Create a physics engine capable of simulating basic physical interactions.
- Implement triggers, collisions, and friction.
- Use SDL2 for rendering 2D graphics.
- Incorporate ImGui for debugging and visualisation.

---

## First Scene: Planet System
<div style="text-align: center;">
    <img src="/PlanetSystem.gif" alt="Planet System" width="250" height="auto">
</div>

### Description

The first scene features a **Planet System**, where circles representing planets orbit around a central star. Users can click anywhere in the scene to spawn additional planets.

### Learning Points

- **Newton's Law of Universal Gravitation**: This fundamental principle was implemented to calculate gravitational forces between celestial bodies, allowing the planets to orbit realistically. (Note that in this case, planets are only attracted by the central star, not each other)
  
- **Force Application**: Understanding how different forces affect the motion of objects in a 2D space was crucial for creating a believable simulation of planetary motion.

- **Single Instruction, Multiple Data (SIMD)**: By utilising SIMD, we were able to enhance performance when calculating the movement of multiple planets simultaneously, enabling smoother animations.
```cpp
#include <xmmintrin.h>
    template <>
    FourVec2f FourVec2<float>::operator+(const FourVec2<float>& other) const
    {
        FourVec2<float> result;
        __m128 x1 = _mm_loadu_ps(x.data());
        __m128 x2 = _mm_loadu_ps(other.x.data());
        __m128 y1 = _mm_loadu_ps(y.data());
        __m128 y2 = _mm_loadu_ps(other.y.data());

        __m128 x_res = _mm_add_ps(x1, x2);
        __m128 y_res = _mm_add_ps(y1, y2);

        _mm_storeu_ps(result.x.data(), x_res);
        _mm_storeu_ps(result.y.data(), y_res);

        return result;
    }
```
---

## Second Scene: Trigger System

<div style="text-align: center;">
<img src="/TriggerSystem.gif" alt="Trigger System" width="250" height="auto">
</div>

### Description

The **Trigger System** showcases circles and Axis-Aligned Bounding Boxes (AABBs) moving around the window. These shapes bounce off the edges of the window and change colour upon intersection, illustrating basic trigger mechanics.

### Learning Points 

- **Collider Implementation**: Colliders are used to effectively detect intersections between shapes, an essential part of a physics engine. The colliders are distinct from the bodies.
  
- **Trigger Events**: Functions were created to respond to trigger entry and exit events, allowing for interactive gameplay elements.

- **Quadtree Optimisation**: A Quadtree data structure was implemented to optimise collision detection, significantly improving performance when dealing with numerous objects.
  
  - **Why We Do It**: Using a Quadtree allows for efficient spatial partitioning, reducing the number of collision checks needed and improving the overall performance of the engine.

  - **How It Works**: The Quadtree divides the 2D space into smaller sections, allowing for quick querying of objects that may intersect with each other rather than checking every potential collision.

---

## Third Scene: Collision System

<div style="text-align: center;">
<img src="/CollisionSystem.gif" alt="Collision System" width="250" height="auto">
</div>

### Description

The **Collision System** builds on the previous trigger system. Instead of merely detecting intersections, shapes now bounce off each other and change colour each time they collide, simulating real-world physics interactions.

### Learning Points

- **Momentum Exchange and Conservation**: This scene emphasises the conservation of momentum during collisions, a key principle in physics.
  
- **Collision Resolution**: Required calculating properties of the contact, including penetration depth, contact point, and contact normal.

- **Impulse**: A collision involves applying a force as an impulse rather than over time.

- **Velocity and Position Resolution**: The system resolves velocities and positions post-collision, ensuring that objects behave realistically after colliding.

---

## Fourth Scene: Friction System

<div style="text-align: center;">
<img src="/FrictionSystem.gif" alt="Friction System" width="250" height="auto">
</div>

### Description

In the **Friction System**, an AABB serves as the ground, and users can spawn objects above it. Circles have a random bounciness, while AABBs have none. The system incorporates friction, causing objects to slow down and eventually stop when moving on the ground.

### Issue

<span style="color: red;">**Unfortunately, this scene is currently bugged. The friction is present and working (as seen on the gif, the shapes slow on the x-axis), but shapes pass through the ground or each other after stopping.**</span>

### Learning Points

- **Constant Force Application**: The addition of a constant force, such as gravity, to the system allows to simulate real-world physics more accurately but increases complexity.
  
- **Bounciness and Friction**: Understanding how bounciness (or restitution) and friction influence object behavior was crucial for creating a realistic simulation.

- **Interactions with Static Bodies**: This scene explores how dynamic objects interact with static ones, a fundamental aspect of physics simulations.

---

## Conclusion

This project has been a valuable learning experience in physics simulation and C++ programming. Developing the physics engine has deepened my understanding of the practical applications of physics in game development and I intend to fix the remaining bugs and continue working on it.