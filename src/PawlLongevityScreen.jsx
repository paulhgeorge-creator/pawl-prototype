const PILLARS = [
  { label: 'Nutrition', score: 84, tip: 'Switch to adult formula at 18 mo' },
  { label: 'Exercise', score: 79, tip: 'Maintain 45+ min activity daily' },
  { label: 'Mental health', score: 88, tip: 'Enrichment on track' },
  { label: 'Bonding', score: 88, tip: '14-day streak · keep it up' },
];

const WHAT_TO_WORK_ON = [
  { rank: 1, label: 'Exercise consistency', detail: 'Avg 38 min/day · goal 45 min' },
  { rank: 2, label: 'Nutrition upgrade', detail: 'Young adult formula due in 2 mo' },
  { rank: 3, label: 'Vet dental check', detail: 'Last cleaning 14 mo ago' },
];

const MILESTONES = [
  { label: '1 year old', date: 'Mar 15 · achieved', done: true },
  { label: 'First full health exam', date: 'Mar 12 · achieved', done: true },
  { label: 'Adult weight reached', date: 'In ~3 mo · est. Jul 2025', done: false },
  { label: '5 years old', date: 'Mar 2030 · projected', done: false },
];

function Card({ children, style }) {
  return <div style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 10, ...style }}>{children}</div>;
}

function ScoreBar({ score, accent = '#E08A3C' }) {
  return (
    <div style={{ background: '#eee', borderRadius: 4, height: 6, marginTop: 4 }}>
      <div style={{ width: `${score}%`, background: accent, borderRadius: 4, height: 6 }} />
    </div>
  );
}

function PawlLongevityScreen({ petName = 'Aito' }) {
  return (
    <div>
      <div style={{ padding: '8px 0 4px', fontSize: 13, color: '#777' }}>Saturday · Apr 18</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>Longevity</div>

      <Card>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>Human years</div>
        <div style={{ fontSize: 13, color: '#777', marginBottom: 8 }}>Aussie Shepherd · 1 yr · 22 kg</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <div><div style={{ fontSize: 32, fontWeight: 700, color: '#E08A3C' }}>~15</div><div style={{ fontSize: 12, color: '#777' }}>human years today</div></div>
          <div><div style={{ fontSize: 32, fontWeight: 700, color: '#4C8C6B' }}>+1.2 yr</div><div style={{ fontSize: 12, color: '#777' }}>vs. breed average</div></div>
        </div>
        <div style={{ marginTop: 10, fontSize: 13, color: '#777' }}>
          Projected lifespan: <strong>14.2 yr</strong> · Breed avg 13.0 yr
        </div>
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>4 pillars</div>
      <Card>
        {PILLARS.map((p, i) => (
          <div key={i} style={{ padding: '6px 0', borderBottom: i < PILLARS.length - 1 ? '1px solid #eee' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 600 }}>{p.label}</div>
              <div style={{ fontWeight: 700, color: '#E08A3C' }}>{p.score}</div>
            </div>
            <div style={{ fontSize: 12, color: '#777' }}>{p.tip}</div>
            <ScoreBar score={p.score} />
          </div>
        ))}
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>What to work on</div>
      <Card>
        {WHAT_TO_WORK_ON.map((w, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: i < WHAT_TO_WORK_ON.length - 1 ? '1px solid #eee' : 'none' }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#E08A3C', minWidth: 24 }}>{w.rank}</div>
            <div>
              <div style={{ fontWeight: 600 }}>{w.label}</div>
              <div style={{ fontSize: 12, color: '#777' }}>{w.detail}</div>
            </div>
          </div>
        ))}
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>Milestones</div>
      <Card>
        {MILESTONES.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: i < MILESTONES.length - 1 ? '1px solid #eee' : 'none', opacity: m.done ? 1 : 0.6 }}>
            <div style={{ fontWeight: m.done ? 600 : 400 }}>{m.done ? '✓ ' : ''}{m.label}</div>
            <div style={{ fontSize: 12, color: '#999' }}>{m.date}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}
