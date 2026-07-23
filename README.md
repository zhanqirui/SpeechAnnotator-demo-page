# SpeechAnnotator Demo Page

This repository contains a static demo page for:

**SpeechAnnotator: A Context-Aware Multi-Agent Framework and Benchmark for Multidimensional Speech Annotation**

## Web Demo

Open the static page:

- `index.html`

If this repository is served by GitHub Pages, the demo page is displayed directly from the repository root.

## Audio Samples

The page includes three long audio recordings with matching JSON annotations.
The demo automatically presents one continuous 60-second excerpt from each
recording, with synchronized subtitles and full segment metadata.

Audio and annotation files are stored in:

```text
audio/
```

The selected windows and displayed metadata are embedded in `audio-demo.js`.
The corresponding JSON segments are extracted under:

```text
audio/selected_segments/
```

## Contents

- `index.html`: static demo page
- `style.css`: page styling
- `audio-demo.js`: interactive audio players, segment text, and metadata rendering
- `assets/agents-pipeline-1.png`: multi-agent link structure figure
- `assets/audio-captioning.png`: category explanation figure
- `assets/bench-category-distribution.png`: SA-Bench source-format distribution figure
- `audio/`: audio sample folder
- `audio/selected_segments/`: JSON records corresponding to the displayed one-minute excerpts

## Notes For Reviewers

The page summarizes the paper abstract, pipeline, benchmark, evaluation results,
and three labeled audio examples. Each audio example plays a continuous
one-minute excerpt and displays segment text plus all metadata fields below the
player.
