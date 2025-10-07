// Topics array: edit / extend this list
const topics = [
  {
    id: 'foundation-models',
    title: 'Foundation models & LLMs',
    summary: 'Large foundation models and LLMs drive most breakthroughs and industry investment (scaling, efficiency, specialisation).',
    sourceName: 'Stanford HAI — AI Index 2025',
    url: 'https://hai.stanford.edu/ai-index/2025-ai-index-report',
    citeId: 'turn0search18'
  },
  {
    id: 'multimodal',
    title: 'Multimodal models (text + images + more)',
    summary: 'Models that handle text, images, and video are becoming productised (e.g., Google Gemini families and LLaVA-style systems).',
    sourceName: 'Android Central (Google Gemini overview)',
    url: 'https://www.androidcentral.com/apps-software/google-gemini',
    citeId: 'turn0news49'
  },
  {
    id: 'agents',
    title: 'Autonomous / agentic AI',
    summary: 'Agent frameworks that perform multi-step tasks autonomously are expanding but adoption and quality control remain key concerns.',
    sourceName: 'IBM: AI agents 2025',
    url: 'https://www.ibm.com/think/insights/ai-agents-2025-expectations-vs-reality',
    citeId: 'turn0search13'
  },
  {
    id: 'rag',
    title: 'Retrieval-Augmented Generation (RAG)',
    summary: 'RAG couples LLMs with document retrieval to ground answers in real data and reduce hallucinations.',
    sourceName: 'Glean blog — What is RAG?',
    url: 'https://www.glean.com/blog/rag-retrieval-augmented-generation',
    citeId: 'turn1search0'
  },
  {
    id: 'regulation',
    title: 'AI regulation & governance',
    summary: 'Regulatory frameworks (e.g., EU AI Act) are being phased in; compliance for GPAI and high-risk systems is a live requirement in many places.',
    sourceName: 'EU digital strategy (AI regulatory framework)',
    url: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    citeId: 'turn0search3'
  },
  {
    id: 'hardware',
    title: 'AI hardware & on-device inference',
    summary: 'New GPU architectures and edge chips are reshaping feasibility and costs for large models and local inference.',
    sourceName: 'NVIDIA — Blackwell architecture overview',
    url: 'https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/',
    citeId: 'turn1search1'
  },
  {
    id: 'ethics',
    title: 'Responsible AI & safety',
    summary: 'Deepfake detection, audits, and responsible deployment practices are increasingly part of production pipelines.',
    sourceName: 'BSR / industry summaries on AI Act and safety',
    url: 'https://www.bsr.org/en/blog/the-eu-ai-act-where-do-we-stand-in-2025',
    citeId: 'turn0search14'
  }
];

// render
const topicsRoot = document.getElementById('topics');
function makeCard(t){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <h3>${t.title}</h3>
    <p>${t.summary}</p>
    <div class="meta">
      <a class="source" href="${t.url}" target="_blank" rel="noopener">${t.sourceName}</a>
      <small>• cite id: ${t.citeId}</small>
    </div>`;
  return el;
}
function render(list){
  topicsRoot.innerHTML = '';
  if(!list.length){ topicsRoot.innerHTML = '<p style="color:var(--muted)">No topics found.</p>'; return; }
  list.forEach(t => topicsRoot.appendChild(makeCard(t)));
}
render(topics);

// search
const input = document.getElementById('search');
input.addEventListener('input', (e)=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q){ render(topics); return; }
  const filtered = topics.filter(t => (t.title+t.summary+t.sourceName).toLowerCase().includes(q));
  render(filtered);
});
document.getElementById('reset').addEventListener('click', ()=>{
  input.value = ''; render(topics);
});
