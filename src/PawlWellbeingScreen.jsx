const HEALTH_RECORDS = [
  { label: 'Last vet visit', value: 'Mar 12 · Dr. Alvarez' },
  { label: 'Vaccinations', value: 'Up to date · expires Sep 2025' },
  { label: 'Flea & tick', value: 'NexGard · given Apr 1' },
  { label: 'Heartworm', value: 'Heartgard · given Apr 1' },
];

const BIOMETRICS = [
  { label: 'Weight', value: '22 kg', delta: '−0.5 kg this month' },
  { label: 'Body condition', value: '5/9 · Ideal', delta: null },
  { label: 'Resting HR', value: '68 bpm', delta: '↓4 vs last month' },
];

const ENRICHMENT = [
  { label: 'Mental stimulation', score: 82, note: 'Puzzle toys 3×/wk' },
  { label: 'Social connection', score: 76, note: 'Dog park 2× this week' },
  { label: 'Rest & recovery', score: 91, note: 'Sleep avg 12.4h · on track' },
  { label: 'Bonding', score: 88, note: '14-day streak · Time together' },
];

function Card({ children, style }) {
  return <div style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 10, ...style }}>{children}</div>;
}

function ScoreBar({ score, accent = '#C44C8C' }) {
  return (
    <div style={{ background: '#eee', borderRadius: 4, height: 6, marginTop: 4 }}>
      <div style={{ width: `${score}%`, background: accent, borderRadius: 4, height: 6 }} />
    </div>
  );
}

function PawlWellbeingScreen({ petName = 'Aito' }) {
  return (
    <div>
      <div style={{ padding: '8px 0 4px', fontSize: 13, color: '#777' }}>Saturday · Apr 18</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>Well-being</div>

      <Card>
        <div style={{ fontWeight: 700, marginBottom: 4 }}>Wellness score</div>
        <div style={{ fontSize: 40, fontWeight: 700, color: '#C44C8C' }}>92</div>
        <div style={{ fontSize: 13, color: '#777' }}>{petName} is thriving. Keep the routine going.</div>
        <ScoreBar score={92} />
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>Health record</div>
      <Card>
        {HEALTH_RECORDS.map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: i < HEALTH_RECORDS.length - 1 ? '1px solid #eee' : 'none' }}>
            <div style={{ fontSize: 13, color: '#777' }}>{r.label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{r.value}</div>
          </div>
        ))}
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>Biometrics</div>
      <Card>
        {BIOMETRICS.map((b, i) => (
          <div key={i} style={{ padding: '5px 0', borderBottom: i < BIOMETRICS.length - 1 ? '1px solid #eee' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 13, color: '#777' }}>{b.label}</div>
              <div style={{ fontWeight: 600 }}>{b.value}</div>
            </div>
            {b.delta && <div style={{ fontSize: 11, color: '#4C8C6B' }}>{b.delta}</div>}
          </div>
        ))}
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>Enrichment pillars</div>
      <Card>
        {ENRICHMENT.map((e, i) => (
          <div key={i} style={{ padding: '6px 0', borderBottom: i < ENRICHMENT.length - 1 ? '1px solid #eee' : 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 600 }}>{e.label}</div>
              <div style={{ fontWeight: 700, color: '#C44C8C' }}>{e.score}</div>
            </div>
            <div style={{ fontSize: 12, color: '#777' }}>{e.note}</div>
            <ScoreBar score={e.score} />
          </div>
        ))}
      </Card>
    </div>
  );
}
