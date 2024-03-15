---
author: ["Navid Madani"]
title: "Enabling Reasoning Capabilities in Large Language Models"
date: "2024-03-15"
tags: ["Reasoning"]
ShowToc: true
draft: true
TocOpen: true
---

# Introduction

In the rapidly evolving landscape of artificial intelligence, Large Language Models (LLMs) have emerged as 
frontrunners in generating text that is not only coherent but also strikingly fluent. At a glance, these models seem 
almost sentient in their ability to weave words together, a capability that has been integral to their widespread adoption in various applications,
from composing emails to drafting articles. However, the crux of their functionality raises a pertinent question:
**when LLMs are essentially designed to predict the next token in a sequence with the goal of minimizing perplexity, 
can we truly say they are capable of reasoning?**

The concept of reasoning, or the ability to make sense of information and draw logical conclusions,
seems at odds with the core operation of LLMs. This disparity brings us to an intriguing proposition:
what if LLMs were to remain the masterful writers they are, while a separate, dedicated module handles the intricate dance of thinking and reasoning?
This reasoning module could very well be another LLM, but fine-tuned to excel not in crafting sentences, but in navigating
the complex pathways of decision-making and logical inference.

In this blog post, we delve into an interesting approach that seeks to bridge this gap between generation and reasoning
in LLMs. **We'll explore the paper "Generating Natural Language Proofs with Verifier-Guided Search"** a piece of work 
that I find particularly compelling for its elegant solution to this problem. By examining this paper, we aim to shed 
light on how the field of AI is advancing towards models that don't just speak, but also think, marking a significant
leap forward in our quest to create truly intelligent systems.
