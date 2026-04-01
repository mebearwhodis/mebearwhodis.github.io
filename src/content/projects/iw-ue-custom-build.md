---
title: 'Inner Whale - Custom Unreal Engine Build'
description: 'Setting up and working with a custom Unreal Engine build in our 3rd year game, Inner Whale'
pubDate: 'Mar 16 2026'
updatedDate: 'Apr 01 2026'
heroImage: '/innerwhale/iw-big.jpg'
status: "In Progress"
category: "Academic"
tags: ["Unreal Engine"]
---

## About

For this project, we chose to work with a **custom build of Unreal Engine** rather than the standard launcher version. The initial goal was to gain more control over the engine and make certain integrations easier later on, even though in practice we did not end up fully needing that level of control.

This article covers the setup process, motivations, and challenges of working with a custom engine build.

---

## Setup Process

### Description

Setting up a custom Unreal Engine build involves compiling the engine from source code rather than using precompiled binaries.

The main steps were:

* Cloning the Unreal Engine repository,
* Running setup scripts to download dependencies,
* Generating project files,
* Compiling the engine using a C++ toolchain.

In practice, this process was far more time-consuming than expected. Building the engine required several hours, often forcing us to leave machines running overnight. It was not uncommon to come back the next day to a compilation error, requiring fixes and restarting the entire build process.

### Learning Points

* **Compilation Overhead**: Building Unreal Engine from source is extremely time-consuming and requires patience, especially when errors occur late in the process.

* **Debugging Build Errors**: Understanding and fixing build issues became a necessary skill, as even small configuration problems could break the entire process.

* **Planning Ahead**: Long build times forced us to better plan iterations and avoid unnecessary rebuilds.

---

## Custom Build Motivation

### Description

Building Unreal Engine from source resulted in a very large installation size, around **350GB**, which was not feasible for every team member.

To address this, we decided to create a **custom lightweight build** of the engine. The goal was to make the project accessible to everyone, especially game artists who did not need the full engine or all its features.

I worked on reducing the engine size by:

* Removing unused plugins,
* Stripping unnecessary components,
* Creating a tailored build adapted to our project needs.

This process allowed us to reduce the engine size to approximately **26GB**, making it significantly easier to distribute and use across the team.

### Learning Points

* **Engine Modularity**: Unreal Engine can be heavily customised by removing unused modules and plugins.

* **Accessibility Matters**: Reducing setup complexity is crucial in a multidisciplinary team.

* **Ownership of Tools**: Building your own tools (or engine version) gives more control but also more responsibility.

---

## Wwise Integration

### Description

Another goal of the custom build was to integrate **Wwise** directly into the engine, so that team members could open the project without needing to install additional audio middleware.

This was particularly useful for game artists, who did not require audio features for their work and got errors when trying to start the game in the editor if they didn't have Wwise installed.

However, integrating Wwise into the custom engine build proved to be challenging. It introduced multiple compatibility issues and build errors that required time to diagnose and fix.

### Learning Points

* **Middleware Integration**: Integrating third-party tools at the engine level is significantly more complex than at the project level.

* **Cross-Team Needs**: Not all team members require the same toolchain, and simplifying access improves productivity.

### Complications

* **Integration Errors**: Wwise integration caused multiple build failures and required careful troubleshooting.

* **Version Compatibility**: Ensuring compatibility between Unreal Engine and Wwise added another layer of complexity.

---

## Conclusion

Despite the challenges, the custom Unreal Engine build ultimately worked as intended. While the initial motivation did not fully justify the complexity involved or the time it took to set up, the process provided valuable technical insights.

Reducing the engine size and integrating required tools made the project more accessible to the team, even though it came at the cost of significant setup time and effort.
