const pipelineStages = [
  {
    eyebrow: "01",
    title: "Input Audio",
    body: "Long-form speech recordings from heterogeneous formats enter a locally deployable processing stack.",
  },
  {
    eyebrow: "02",
    title: "Frontend Modules",
    body: "FullSubNet enhances speech; MOSS-Transcribe-Diarize estimates speaker-homogeneous intervals and transcripts.",
  },
  {
    eyebrow: "03",
    title: "Transcript Refinement",
    body: "Qwen3-Omni refines MOSS segment transcripts before records are written into the shared segment table.",
  },
  {
    eyebrow: "04",
    title: "Prior Evidence",
    body: "DataSpeech, Emotion2vec, and SED attach pitch, energy, affective, paralinguistic, and scene cues by segment key.",
  },
  {
    eyebrow: "05",
    title: "Planning Agent",
    body: "The planner converts local audio evidence, speaker history, neighboring turns, and recording context into field contracts.",
  },
  {
    eyebrow: "06",
    title: "Labeling Agent",
    body: "Contract-guided multimodal prediction fills directly observable attributes for each segment.",
  },
  {
    eyebrow: "07",
    title: "Review Agent",
    body: "A bounded review loop checks evidence support and cross-segment consistency, then relabels only conflicting fields.",
  },
  {
    eyebrow: "08",
    title: "Final JSON",
    body: "Deterministic output modules normalize speaker identifiers, schema fields, captions, and contextual inference.",
  },
];

const schemaGroups = [
  ["Semantic Understanding", "caption", "contextual inference"],
  ["Speaker Profile", "perceived gender", "perceived age", "accent"],
  ["Prosody and Delivery", "pitch", "speed", "rhythm", "tone"],
  ["Voice Quality and Articulation", "texture", "pronunciation"],
  ["Affective and Paralinguistic Cues", "emotion", "paralinguistic cues"],
  ["Acoustic Scene", "environment", "background sound"],
];

const timelineRows = [
  ["SpeechAnnotator", "12.42", "28.16", "33.69"],
  ["MOSS-Transcribe-Diarize", "12.84", "28.70", "34.08"],
  ["Seed2.0 Lite", "13.90", "33.62", "53.61"],
  ["Qwen3.5-Omni-plus", "14.17", "26.31", "56.25"],
  ["Gemini 3.1 Pro Preview", "23.06", "42.58", "67.18"],
  ["Gemini 2.5 Pro", "20.51", "37.80", "69.59"],
];

const resultHighlights = [
  ["Timeline recovery", "12.42% CER", "Lowest character error rate on SA-Bench."],
  ["Long-context timing", "33.69% tcpCER", "19.92 points below the strongest commercial baseline."],
  ["Attribute macro score", "81.27%", "Second overall under fixed-timeline evaluation."],
  ["Best fields", "7 / 15", "Top score on tone, pitch, speed, rhythm, texture, pronunciation, and paralinguistic cues."],
];

const audioGroups = [
  {
    title: "Timeline Recovery Samples",
    rows: [
      ["Live Commentary", "Original recording", "Diarized segment output", "Speaker-aware transcript"],
      ["Broadcast News", "Original recording", "Diarized segment output", "Speaker-aware transcript"],
      ["Dialogue and Sales", "Original recording", "Diarized segment output", "Speaker-aware transcript"],
    ],
  },
  {
    title: "Multidimensional Annotation Samples",
    rows: [
      ["Prosody", "Segment audio", "Speed / pitch label", "Review note"],
      ["Affective Cue", "Segment audio", "Emotion label", "Evidence support"],
      ["Acoustic Scene", "Segment audio", "Environment label", "Background sound label"],
    ],
  },
  {
    title: "Cross-Format Benchmark Samples",
    rows: [
      ["Audiobook Narration", "Source clip", "Reviewed annotation", "Final JSON preview"],
      ["Political Debate", "Source clip", "Reviewed annotation", "Final JSON preview"],
      ["Film and Review", "Source clip", "Reviewed annotation", "Final JSON preview"],
    ],
  },
];

function AudioSlot({ label }: { label: string }) {
  return (
    <div className="audio-slot">
      <div className="audio-label">{label}</div>
      <audio controls preload="none" aria-label={label}>
        Your browser does not support the audio element.
      </audio>
      <code>src: /audio/replace-me.wav</code>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="top-nav" aria-label="Page sections">
        <a href="#abstract">Abstract</a>
        <a href="#pipeline">Pipeline</a>
        <a href="#benchmark">Benchmark</a>
        <a href="#results">Results</a>
        <a href="#audio">Audio Demo</a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <p className="kicker">Speech annotation demo page</p>
          <h1>SpeechAnnotator</h1>
          <p className="subtitle">
            A Context-Aware Multi-Agent Framework and Benchmark for
            Multidimensional Speech Annotation
          </p>
          <div className="hero-actions">
            <a href="#pipeline">View Pipeline</a>
            <a href="#audio">Audio Placeholders</a>
          </div>
          <div className="hero-stats" aria-label="Key results">
            <div>
              <strong>8.87 h</strong>
              <span>SA-Bench audio</span>
            </div>
            <div>
              <strong>15</strong>
              <span>evaluated attributes</span>
            </div>
            <div>
              <strong>81.27%</strong>
              <span>attribute macro score</span>
            </div>
          </div>
        </div>
      </section>

      <section id="abstract" className="section">
        <div className="section-heading">
          <span>Abstract</span>
          <h2>Locally deployable speech annotation with evidence-aware agents.</h2>
        </div>
        <div className="abstract-card">
          <p>
            Recent controllable speech generation requires fine-grained training
            data that describes speaker traits, prosody, emotion, paralinguistic
            cues, acoustic scenes, and surrounding context. Existing workflows
            often rely on manual correction, paid hosted multimodal services, or
            fixed processing chains, limiting scalable annotation through cost,
            external-service dependence, and weak cross-stage recovery.
          </p>
          <p>
            SpeechAnnotator is a locally deployable, context-aware multi-agent
            framework built from open-source models and tools. Frontend modules
            construct speaker-aware segments and refined transcripts, prior
            extractors attach heterogeneous segment-level cues, and three
            specialist agents coordinate through shared state: Planning creates
            field-specific contracts, Labeling performs contract-guided
            multimodal prediction, and Review checks evidence support plus
            cross-segment consistency through a bounded field-level relabeling
            loop.
          </p>
          <p>
            The paper also introduces SA-Bench, 8.87 hours of human-annotated
            audio across nine source formats, and SA-Eval, which separates
            Timeline-Eval, Closed-Eval, and Open-Eval. Experiments show that
            SpeechAnnotator provides a competitive local alternative to
            commercial audio-capable systems while improving multidimensional
            annotation through evidence- and context-aware recovery.
          </p>
        </div>
      </section>

      <section id="pipeline" className="section pipeline-section">
        <div className="section-heading">
          <span>Pipeline</span>
          <h2>End-to-end annotation chain.</h2>
        </div>
        <div className="pipeline">
          {pipelineStages.map((stage, index) => (
            <article className="pipeline-card" key={stage.title}>
              <div className="stage-number">{stage.eyebrow}</div>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              {index < pipelineStages.length - 1 ? (
                <div className="connector" aria-hidden="true">
                  -&gt;
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <div className="review-loop">
          <div>
            <span>Bounded review loop</span>
            <strong>Review -&gt; targeted relabeling -&gt; accepted field</strong>
          </div>
          <p>
            Unsupported background sounds, emotion-prosody mismatches,
            speaker-trait drift, and context conflicts are handled as local
            revision actions instead of full pipeline regeneration.
          </p>
        </div>
      </section>

      <section id="benchmark" className="section">
        <div className="section-heading">
          <span>SA-Bench & SA-Eval</span>
          <h2>One benchmark, three complementary evaluation views.</h2>
        </div>
        <div className="benchmark-grid">
          <article>
            <h3>Source Coverage</h3>
            <p>
              SA-Bench covers Chinese-dominant audio from live commentary,
              knowledge talks, cartoons, broadcast news, film and review,
              dialogue and sales, personal monologue, audiobook narration, and
              political debate.
            </p>
          </article>
          <article>
            <h3>Evaluation Split</h3>
            <p>
              Timeline-Eval measures transcription, speaker attribution, and
              timing; Closed-Eval scores finite-set attributes; Open-Eval uses
              hidden-state semantic similarity for natural-language fields.
            </p>
          </article>
        </div>
        <div className="schema-grid">
          {schemaGroups.map(([title, ...items]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{items.join(" / ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="results" className="section results-section">
        <div className="section-heading">
          <span>Results</span>
          <h2>Strong timeline recovery and competitive attribute annotation.</h2>
        </div>
        <div className="highlight-grid">
          {resultHighlights.map(([title, value, detail]) => (
            <article key={title}>
              <span>{title}</span>
              <strong>{value}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <div className="table-wrap">
          <table>
            <caption>Speaker-aware timeline results on SA-Bench. Lower is better.</caption>
            <thead>
              <tr>
                <th>System</th>
                <th>CER lower</th>
                <th>cpCER lower</th>
                <th>tcpCER lower</th>
              </tr>
            </thead>
            <tbody>
              {timelineRows.map(([system, cer, cpcer, tcpcer]) => (
                <tr key={system}>
                  <th>{system}</th>
                  <td>{cer}</td>
                  <td>{cpcer}</td>
                  <td>{tcpcer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="ablation">
          <h3>Ablation summary</h3>
          <p>
            Context-aware planning, prior evidence, and the bounded review loop
            contribute 1.48, 1.20, and 0.85 points respectively to the average
            attribute score, showing that the system benefits from both local
            acoustic evidence and long-context consistency checks.
          </p>
        </div>
      </section>

      <section id="audio" className="section audio-section">
        <div className="section-heading">
          <span>Audio Demo</span>
          <h2>Audio sample slots with labels ready for replacement.</h2>
        </div>
        <p className="audio-note">
          Drop your files into <code>public/audio/</code>, then replace each
          placeholder source path with the corresponding filename.
        </p>
        {audioGroups.map((group) => (
          <div className="audio-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="audio-table">
              <div className="audio-header">Sample</div>
              <div className="audio-header">Audio A</div>
              <div className="audio-header">Audio B</div>
              <div className="audio-header">Label / Output</div>
              {group.rows.map(([sample, first, second, label]) => (
                <div className="audio-row" key={`${group.title}-${sample}`}>
                  <div className="sample-name">{sample}</div>
                  <AudioSlot label={`${sample}: ${first}`} />
                  <AudioSlot label={`${sample}: ${second}`} />
                  <div className="label-box">{label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
