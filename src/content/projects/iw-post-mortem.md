---
title: 'Inner Whale - Postmortem'
description: 'An intermediary postmortem of our 3rd year game, Inner Whale'
pubDate: 'Mar 16 2026'
updatedDate: 'Apr 01 2026'
heroImage: '/innerwhale/iw-big.jpg'
status: "In Progress"
category: "Academic"
tags: ["Unreal Engine", "Postmortem", "Game Development"]
---

## Introduction

Inner Whale is the third-year game project developed at SAE Institute Geneva during the school year of 2025-2026. It is a collaborative work between students in Game Programming, Game Art, and Audio Engineering.

In this top-down puzzle-adventure, you play as an anthropomorphic cat armed with a fishing rod that you use to progress through different levels in a deep-sea ambiance.

---

## Technical Report

### What worked well

#### Unreal Blueprint Components & Interfaces (Activables, modular puzzles)

Working with Blueprint Components and Interfaces in Unreal Engine proved very effective for building activable elements and modular puzzle systems. This approach allowed for clean communication between actors and encouraged reusable logic, making it easier to design flexible gameplay mechanics without tightly coupling systems.

<div style="text-align: center;">
    <img src="/innerwhale/iw-blueprints.jpg" alt="Blueprints" width="auto" height="auto">
</div>

---

#### Perforce

Perforce functioned reliably throughout the project, especially with its checkout system and version control features. It helped prevent conflicts, ensured proper file locking, and made collaboration smoother by keeping track of changes and maintaining a stable project structure.

---

#### Custom Build

Creating a custom build pipeline worked particularly well for the art team. It allowed them to access and work on the project without needing to install the full Unreal Engine source, which saved time and reduced setup complexity. This made the workflow more accessible and efficient for programmers and non-programmers alike, enabling artists to focus on their tasks without dealing with heavy technical requirements.

---

#### Persistent World

Implementing a persistent world system worked well because it allowed multiple team members to work on different parts of the world simultaneously. By structuring the world into separate sections, each person could focus on their own area without interfering with others’ work. This improved collaboration, reduced conflicts, and made the overall level production process more efficient.

<div style="text-align: center;">
    <img src="/innerwhale/iw-worldpersistent.jpg" alt="World Persistent" width="auto" height="auto">
</div>

---

#### Game Feel (applied learning)

Diving deeper into the concept of game feel and applying it directly to the project was very beneficial. Adjustments to feedback, timing, and player input responsiveness significantly improved the overall player experience and made interactions more satisfying.

---

#### Level Design (learning and application)

Learning and applying level design principles had a strong positive impact on the project. It helped create more engaging environments, guided player movement effectively, and supported the gameplay mechanics, resulting in clearer and more enjoyable player experiences.

---

### Difficulties and Areas for Improvement

#### No previous experience with Unreal Engine

An obvious problem for this project was that no one among the team knew how to code and create a game using Unreal Engine's blueprints. We had to take a lot of time to understand how it works, the logic behind it, what each specific event represented (on Unity you have "On start"/"On update"/"On fixed update" while on Unreal Engine you have "event begin"/"event play"/"on hit", etc.). We debated the need and possibility to work with C++, which we had prior knowledge of, rather than blueprints, but this ended up causing some troubles of uncertainty and costing us some time.

A downside of the decision to keep blueprints as the main code language was their visibility and cleanliness; it was quite frequent to come back to a work we did a few days ago or a few weeks ago and have to take an hour simply to understand what the logic behind it was and how it worked. Another aspect of this lack of knowledge was the different places where blueprints can be used: not only in blueprints but also in widgets, in level blueprints where the main target is the level or in behavior trees, that work differently and cause issues when trying to share variables between objects and their trees, inducing the need for one or multiple casts and therefore a lack of performances. Materials and Unreal’s Niagara system also have their own blueprints and logic, which work well but in a different way from standard blueprints.

---

#### Lack of a clear design

On top of this issue of language, quickly came the realization that we did not have a clear design from the start on top of an overambitious project; the scope of what we wanted to make was too big and proved too difficult to achieve. No one wanted to take on the role of Game Designer therefore no one had a clear idea of where to go and how to do it.

With this and the lack of prior knowledge, the project became a mess of directions and unnecessary stress. Even when we reduced the scope as the project advanced, it was already too late and some of our early work ended up becoming useless. Said work sometimes had taken multiple weeks to achieve only to end up being left and forgotten in a matter of days or replaced, making some lose interest.

The scope also meant that we sometimes had to spend time on tasks we didn’t really enjoy, only to see the work we did end up erased or being asked to do the exact opposite, which could prove irritating at times.

---

#### Unreal’s custom build setup time

Finally, there was another issue with this project that wasn't thought about when it all began. The issue of the custom build was probably the biggest cause for waste of time in the early months of this project. Our understanding was that having Unreal’s sources was a good idea if, among other things, we wanted to put the game on Steam later on. Not everyone liked the idea of having or had the space for 350Go worth of binaries on their pc simply for this project and the time to compile it.

It also raised issues with the Game Artists and so, it was decided that we’d create a custom Unreal Engine build to reduce the size as much as possible. This process took a lot of time and dedication to end up with a build of ~30Go. From that point forward, the project went on relatively smoothly but this setup took around a month of work simply to set the ground, the engine on which we would all work.

---

## Teamwork Report

### What worked well

#### Day dedicated to the common project in person

The implementation of a day dedicated to team work (in our case, Thursday) when everyone would gather to work in the same room greatly improved the group’s coordination. This shared time allowed us to more easily synchronize our respective progress, quickly resolve blockers, and maintain a shared vision of the project. It also facilitated direct communication, reducing the risk of misunderstandings that often come from written exchanges.

---

#### Discovery of group work

For several members, this project was a first concrete experience of collaboration. It allowed them to better understand group dynamics, particularly task distribution, dependency management, and the importance of good communication. This contributed to a collective improvement in collaborative working methods.

---

#### Back & forth between programmers and artists

Regular exchanges between programmers and artists were particularly beneficial. This iterative back-and-forth process made it possible to quickly adjust both technical and artistic needs, and to avoid potential misinterpretations. This greatly strengthened the overall coherence of the project.

---

#### Collaboration with the Game Artists

Collaboration with the Game Artists was smooth and productive; their involvement in both technical and creative discussions made it possible to achieve visual results consistent with the game mechanics. This synergy strengthened the overall quality of the project and promoted a better mutual understanding of the constraints inherent to each role.

---

#### Intervention of several external contributors from various fields

The support from the different people following our project, as well as the intervention of external experts in various fields (technical, design, etc.), brought valuable critical insight. Their feedback allowed us to identify issues that had not been visible internally and to suggest possible solutions. This contributed to improving the quality of the project and to professionalizing our approach.

---

#### Risk sheet and milestone reviews

The implementation of a risk management sheet made it possible to anticipate several potential issues. Combined with milestone reviews, it encouraged questioning of the choices made and the difficulties encountered during each milestone, as well as discussions on possible areas for improvement.

---

### Difficulties and Areas for Improvement

#### Tasks Distribution

One of the main issues encountered during the project was the lack of a clear leadership. No single person was fully responsible for driving the project forward, which led to inefficiencies in task coordination.

Additionally, the project suffered from contradictory directives between sprints. Objectives and expectations often changed, creating confusion within the team and making it difficult to maintain a consistent workflow.

Finally, during review sessions, there was often a lack of clarity regarding the next steps. This uncertainty slowed down progress and made planning ahead more complicated.

---

#### Individual Motivation & Implication

At the beginning of the project, motivation was low, mainly because the chosen project did not align with the preferences of all team members. This negatively impacted early engagement.

There was also an imbalance in work rigor among team members. Some were highly invested, while others showed less consistency, which created tension within the group.

Moreover, a general lack of discipline from certain members affected the overall team motivation, leading to decreased productivity and cohesion.

---

#### Communication at Certain Levels

Communication issues were another significant challenge. There sometimes were noticeable gaps in communication between different sections of the team, as well as between students and supervisors.

Some feedback and external interventions were perceived as discouraging rather than constructive, which impacted team morale.

Additionally, the introduction of support came too late in the project timeline to be fully effective, limiting its positive impact.

---

## Conclusion
This project was a valuable learning experience both technically and collaboratively. While we faced challenges related to tools, scope, and team organisation, these difficulties helped us better understand the realities of game development in a team environment.

Through iteration, experimentation, and collaboration, we were able to improve both our workflow and the quality of the project. Inner Whale ultimately reflects not only the systems we built, but also the lessons we learned throughout its development.
