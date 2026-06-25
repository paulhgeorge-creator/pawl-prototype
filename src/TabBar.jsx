// Bottom nav. Confirmed from live audit: 4 tabs, order Pet / Activity / Wellbeing / Longevity.
const TABS = [
  { id: 'pet', label: 'Pet' },
  { id: 'activity', label: 'Activity' },
  { id: 'wellbeing', label: 'Wellbeing' },
  { id: 'longevity', label: 'Longevity' },
];

function TabBar({ active, onChange, accent }) {
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      display: 'flex', justifyContent: 'space-around', padding: '10px 8px 18px',
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
      borderTop: '1px solid rgba(0,0,0,0.06)',
    }}>
      {TABS.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)} style={{
          border: 'none', background: 'none', fontSize: 13, fontWeight: 600,
          color: active === t.id ? accent : '#999', cursor: 'pointer', padding: '4px 10px',
        }}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
