---
author: ["Navid Madani"]
title: "Enhancing Domain-Specific Question Answering with Logical Programming and Large Language Models"
date: "2024-03-11"
tags: ["KGQA"]
ShowToc: true
TocOpen: true
---

# Making Computers Understand Us Better: A Cool Trick with Questions and Answers Over Knowledge Graphs

Ever wondered it is not the responsibility of the LLM to come up with the reasoning and it might be better for the LLM to only understand the linguistic side of the question? This work tries to explore this aspect by separating reasoning from linguistics of the knowledge graph question answering task. **In this work we show that following this idea and using a T5-small model and only 1000 samples of MetaQA dataset (less than 0.01% of the training set) you can build a model that answers all of the test set questions perfectly.**

 For more details, find the paper and code here:

<div align="center">
	<a href="https://github.com/navidmdn/logic_based_qa">
	    <img src="/homepage/images/github-mark.png" width="40" height="40" alt="Github">
	</a>
	<a href="https://openreview.net/pdf?id=ohixFcMzEr">
	    <img src="/homepage/images/paper.png" width="40" height="40" alt="Paper">
	</a>
</div>

## The Idea

At the heart of our method is the idea that delegating reasoning to an exact reasoning engine and using LLMs only to overcome linguistic nuances is the way to answer knowledge graph questions in a specific domain. Most of the previous work tried to find a distribution over the whole knowlege graph for the answer to a question but this work mainly proposes a neuro-symbolic approach that separates the task of comprehending the question and multi-hop reasoning.

## Our Approach

Instead of asking the LLM to do everything at once, we try to delegate the task of reasoning steps to a logical programming language which is similar to a natural language syntax (Prolog in our case) and we leave the nuances of comprehending the question and transforming it to prolog language to a LLM. This way, we know for sure that if the language model is able to transform the question to query, then the rest of it is an exact solution that can't go wrong. 

### Transforming questions to queries

MetaQA dataset is a huge synthetic dataset of question answer pairs over a knowledge graph in movie domain. Each question is accomponied with a path connecting the entity in question to an answer in the knowledge graph. We wrote functions to translate these paths to prolog queries by defining a mapping between each relation and a first order predciate. Then we trained an encoder-decoder model (we experimented with T5) to translate the questions. 

### Representing the whole graph in predicate format

We represented the whole graph using Prolog language and constructed predicates to show each triple in the graph. This helps us to later query graph using the generated queries by our translator model

### Overal pipeline and experiments

![Pipeline of our approach](/homepage/images/aaai24.drawio.png)

Above picture shows the full pipeline of our approach as described above. For more details refer to the [original paper](https://openreview.net/pdf?id=ohixFcMzEr). We found that using this simple approach and by using a very limited number of training samples we can train a model that fully solves this dataset. To be more specific, using a T5-small model and only 1000 training samples our model learns to answer all of the questions in the test dataset. 





