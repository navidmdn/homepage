---
author: ["Navid Madani"]
title: "From GPT to Kimi: A Visual History of Large Language Models"
date: "2026-08-04"
description: "An evolving, visual field guide to the ideas, systems, and inflection points that shaped modern language models."
summary: "A visual timeline of the breakthroughs that took language models from next-token prediction to reasoning systems."
tags: ["LLMs", "AI History", "Transformers"]
ShowToc: true
TocOpen: false
draft: false
---

<div class="llm-history">
  <header class="llm-hero">
    <div class="llm-hero__eyebrow"><span></span> An evolving visual essay</div>
    <h1 class="llm-hero__title">The road from<br><em>GPT to Kimi</em></h1>
    <p class="llm-hero__dek">A field guide to the research bets, scaling leaps, and product moments that turned language models into a new computing platform.</p>
    <div class="llm-hero__meta">
      <div><b>8 years</b><small>of rapid progress</small></div>
      <div><b>6 eras</b><small>of model development</small></div>
      <div><b>∞ questions</b><small>still left to answer</small></div>
    </div>
    <div class="llm-hero__orb" aria-hidden="true"><span>2018</span><i></i><span>2026</span></div>
  </header>

  <aside class="llm-note">
    <span class="llm-note__icon">✦</span>
    <div>
      <strong>A living document</strong>
      <p>This first edition establishes the story's structure. We will expand it with deeper technical explanations, original diagrams, and carefully sourced comparisons as the series evolves.</p>
    </div>
  </aside>

  <nav class="llm-era-nav" aria-label="Story chapters">
    <a href="#era-01"><span>01</span> Foundations</a>
    <a href="#era-02"><span>02</span> Scale</a>
    <a href="#era-03"><span>03</span> Alignment</a>
    <a href="#era-04"><span>04</span> Open models</a>
    <a href="#era-05"><span>05</span> Reasoning</a>
    <a href="#era-06"><span>06</span> Agents</a>
  </nav>

  <section class="llm-thesis">
    <p class="llm-kicker">The short version</p>
    <h2>Progress did not follow a single curve.</h2>
    <p>Modern LLMs emerged from several compounding curves: more compute, better data, longer context, post-training, tool use, and—most recently—more inference-time computation. The timeline below is designed to show those threads together rather than reduce the story to model size alone.</p>
  </section>

  <figure class="llm-system-map">
    <figcaption><span>THE SYSTEM VIEW</span> What changes when a language model becomes a reasoning system?</figcaption>
    <div class="llm-system-map__flow">
      <div><small>01</small><b>Pre-training</b><span>learn patterns</span></div><i>→</i>
      <div><small>02</small><b>Post-training</b><span>shape behavior</span></div><i>→</i>
      <div><small>03</small><b>Inference</b><span>spend compute</span></div><i>→</i>
      <div><small>04</small><b>Tools</b><span>act on the world</span></div>
    </div>
  </figure>

  <div class="llm-timeline">
    <section class="llm-era" id="era-01">
      <div class="llm-era__rail"><span>2018</span><i></i></div>
      <div class="llm-era__body">
        <p class="llm-kicker">Era 01 · Foundations</p>
        <h2>The general-purpose<br>pre-trained model</h2>
        <p class="llm-era__intro">The first GPT made a deceptively simple proposition feel concrete: learn broad language representations from unlabeled text, then adapt them to many downstream tasks.</p>
        <div class="llm-moment llm-moment--primary">
          <div class="llm-moment__year">2018</div>
          <div><span class="llm-pill">Architecture</span><h3>GPT-1</h3><p>Pre-training and task-specific fine-tuning become one reusable recipe.</p></div>
          <div class="llm-moment__signal"><span>PRE-TRAIN</span><b>→</b><span>ADAPT</span></div>
        </div>
        <div class="llm-moment">
          <div class="llm-moment__year">2019</div>
          <div><span class="llm-pill">Scale</span><h3>GPT-2</h3><p>Coherent generation makes the implications of scaling much harder to ignore.</p></div>
        </div>
      </div>
    </section>

    <section class="llm-era" id="era-02">
      <div class="llm-era__rail"><span>2020</span><i></i></div>
      <div class="llm-era__body">
        <p class="llm-kicker">Era 02 · Scale</p>
        <h2>Prompting becomes<br>the interface</h2>
        <p class="llm-era__intro">At sufficient scale, models begin performing tasks from instructions and examples in the prompt—without updating their weights.</p>
        <div class="llm-moment llm-moment--wide">
          <div class="llm-moment__year">2020</div>
          <div><span class="llm-pill">In-context learning</span><h3>GPT-3</h3><p>Zero-shot and few-shot prompting reveal a new way to program models: through language itself.</p></div>
          <div class="llm-mini-chart" aria-label="Conceptual scale chart"><span style="height:22%"></span><span style="height:39%"></span><span style="height:70%"></span><span style="height:100%"></span><small>scale →</small></div>
        </div>
      </div>
    </section>

    <section class="llm-era" id="era-03">
      <div class="llm-era__rail"><span>2022</span><i></i></div>
      <div class="llm-era__body">
        <p class="llm-kicker">Era 03 · Alignment</p>
        <h2>From completion<br>to conversation</h2>
        <p class="llm-era__intro">Instruction tuning and human feedback reshape a raw text predictor into an assistant—and a research artifact into a mass-market product.</p>
        <div class="llm-quote-card">
          <span>THE INTERFACE SHIFT</span>
          <blockquote>“What should the model predict?” became “What does the user actually want?”</blockquote>
        </div>
        <div class="llm-moment"><div class="llm-moment__year">2022</div><div><span class="llm-pill">Product</span><h3>ChatGPT</h3><p>Dialogue turns prompting into a feedback loop available to everyone.</p></div></div>
        <div class="llm-moment"><div class="llm-moment__year">2023</div><div><span class="llm-pill">Multimodality</span><h3>GPT-4</h3><p>Stronger reasoning and multimodal input widen the frontier of general-purpose systems.</p></div></div>
      </div>
    </section>

    <section class="llm-era" id="era-04">
      <div class="llm-era__rail"><span>2023</span><i></i></div>
      <div class="llm-era__body">
        <p class="llm-kicker">Era 04 · Open models</p>
        <h2>The frontier<br>gets crowded</h2>
        <p class="llm-era__intro">Open-weight releases, efficient fine-tuning, and a global field of labs compress the distance between a frontier result and a model that anyone can adapt.</p>
        <div class="llm-constellation" aria-label="Representative model families">
          <span class="node node--one">Llama</span><span class="node node--two">Mistral</span><span class="node node--three">Qwen</span><span class="node node--four">Gemma</span><span class="node node--five">DeepSeek</span><i></i>
        </div>
      </div>
    </section>

    <section class="llm-era" id="era-05">
      <div class="llm-era__rail"><span>2024</span><i></i></div>
      <div class="llm-era__body">
        <p class="llm-kicker">Era 05 · Reasoning</p>
        <h2>Models learn<br>to spend time</h2>
        <p class="llm-era__intro">The next axis of scaling moves into inference. Instead of producing an answer immediately, reasoning models can use additional computation to search, verify, and revise.</p>
        <div class="llm-compute">
          <div><small>FAST PATH</small><span></span><b>Answer</b></div>
          <div><small>REASONING PATH</small><span></span><span></span><span></span><span></span><b>Answer</b></div>
        </div>
      </div>
    </section>

    <section class="llm-era" id="era-06">
      <div class="llm-era__rail"><span>NOW</span><i></i></div>
      <div class="llm-era__body">
        <p class="llm-kicker">Era 06 · Long context & agents</p>
        <h2>Kimi and the<br>expanding horizon</h2>
        <p class="llm-era__intro">Long context, reasoning, multimodal understanding, and tool use are converging. The model is becoming one component inside a larger system that can plan and act.</p>
        <div class="llm-horizon">
          <div class="llm-horizon__rings"><i></i><i></i><i></i><b>K</b></div>
          <div><span class="llm-pill">Convergence</span><h3>From model to system</h3><ul><li>Context becomes working memory</li><li>Reasoning becomes a compute budget</li><li>Tools turn answers into actions</li></ul></div>
        </div>
      </div>
    </section>
  </div>

  <section class="llm-next">
    <p class="llm-kicker">Where this essay goes next</p>
    <h2>A map for the next iteration</h2>
    <div class="llm-next__grid">
      <div><span>01</span><h3>Deep research</h3><p>Primary sources, model cards, papers, and the people behind each turning point.</p></div>
      <div><span>02</span><h3>Original visuals</h3><p>Parameter, compute, context-window, benchmark, and cost curves on one shared timeline.</p></div>
      <div><span>03</span><h3>Technical layers</h3><p>Optional deep dives for readers who want the mechanisms behind each leap.</p></div>
    </div>
  </section>

  <footer class="llm-sources">
    <span>ORIGIN NOTE</span>
    <p>This essay was inspired by <a href="https://x.com/waterloo_intern/status/2081762065392541951?s=52" rel="noopener noreferrer">this visual history shared by Waterloo Intern on X</a>. The final article will extend that starting point with additional detail, context, and primary sources.</p>
  </footer>
</div>
