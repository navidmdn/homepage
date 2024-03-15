---
author: ["Navid Madani"]
title: "Enabling Reasoning Capabilities in Large Language Models"
date: "2024-03-15"
tags: ["Reasoning"]
ShowToc: true
draft: false
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
leap forward in our quest to create truly intelligent systems. We will go over the code and the paper to understand the
approach and possibly use their insights for improving our own models.

Since this work was implemented using an older version on pytorch lightning, I had to clone the project in 
another github repo and make some changes to make the code work. Here is the link to the repo and the paper


<div align="center">
	<a href="https://github.com/navidmdn/llm_reasoning">
	    <img src="/homepage/images/github-mark.png" width="40" height="40" alt="Github">
	</a>
	<a href="https://arxiv.org/abs/2205.12443">
	    <img src="/homepage/images/paper.png" width="40" height="40" alt="Paper">
	</a>
</div>

# Generating Natural Language Proofs with Verifier-Guided Search

## The Idea

 this work introduces a novel method named NLProofS, which stands for Natural Language Proof Search.
 This method distinguishes itself by generating proof steps in a sequential manner, conditioned on the given hypothesis,
 thereby ensuring the relevance of each step to the overarching logical argument.
The brilliance of NLProofS lies in its integration of an independent verifier, a component trained to assess the validity
 of each proof step. This verifier plays a crucial role in the method's ability to minimize errors commonly seen in other
 models, such as the generation of illogical or irrelevant proof steps—a phenomenon often referred to as "hallucination" 
 in AI language models. By leveraging the verifier's assessments, NLProofS employs a search strategy that doesn't just
 sequentially generate proof steps but seeks out paths through the proof that are maximized for their overall validity,
 according to the verifier's judgment.

The paper reports that NLProofS sets new benchmarks in performance on challenging datasets such as **EntailmentBank and RuleTaker**,
illustrating its efficacy in generating complex, human-like proofs. The method's success is particularly notable in 
scenarios involving distractors or in cases requiring the model to sift through a large corpus to identify relevant 
supporting facts. This not only showcases the model's ability to maintain logical coherence in proofs but also 
its adeptness at handling real-world complexities where irrelevant information may exist.

To sum up, the overall task of NLProofS is to generate an entailment tree that represents a logical proof, 
where each node in the tree corresponds to an argument or a rule and the root of the tree represents the hypothesis:

![NLProofS](/homepage/images/nlproofs.png)

## Step-wise Prover

At the core of NLProofS is a model which is responsible for generating proofs step by step. The first step in building 
the whole pipeline of their proposed system is to understand how we this component works. In this work the authors experiment
with a T5 and Bart models to generate the proof steps. But first, let's understand the way they preprocess the data for
fine-tuning these models.

### 