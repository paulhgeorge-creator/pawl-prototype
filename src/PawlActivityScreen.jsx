const WALKS = [
  { name: 'Oak Park loop', duration: '45 min', dist: '2.1 mi', intensity: 'Brisk', when: 'Today' },
  { name: 'Beach sprint', duration: '22 min', dist: '1.4 mi', intensity: 'Intense', when: 'Yesterday' },
  { name: 'Evening stroll', duration: '30 min', dist: '1.0 mi', intensity: 'Gentle', when: 'Mon' },
];

const MEALS = [
  { name: 'Breakfast', detail: 'Kibble ½ cup', kcal: 220, time: '7:30', done: true },
  { name: 'Treat', detail: 'Carrot stick', kcal: 12, time: null, done: true },
  { name: 'Lunch', detail: 'Wet food 1 pouch', kcal: 280, time: '12:45', done: true },
  { name: 'Dinner', detail: 'Kibble ½ cup', kcal: null, time: '~18:30', done: false },
];

const ARTICLES = [
  { tag: 'Easy home recipe', title: 'Frozen PB-banana paw pops' },
  { tag: 'Life stage update', title: 'Young adult nutrition shift' },
  { tag: 'Trending', title: 'Why sniff walks tire dogs more' },
];

function Card({ children, style }) {
  return <div style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 10, ...style }}>{children}</div>;
}

function PawlActivityScreen({ petName = 'Aito' }) {
  return (
    <div>
      <div style={{ padding: '8px 0 4px', fontSize: 13, color: '#777' }}>Saturday · Apr 18</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>Activity</div>

      <Card>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Movement · Today</div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 10 }}>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>72%</div><div style={{ fontSize: 12, color: '#777' }}>of goal</div></div>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>8,421</div><div style={{ fontSize: 12, color: '#777' }}>steps</div></div>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>144</div><div style={{ fontSize: 12, color: '#777' }}>active min</div></div>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div><div style={{ fontSize: 18, fontWeight: 700 }}>3.2 mi</div><div style={{ fontSize: 12, color: '#777' }}>distance today</div></div>
          <div><div style={{ fontSize: 18, fontWeight: 700 }}>284 cal</div><div style={{ fontSize: 12, color: '#777' }}>burned</div></div>
        </div>
        <div style={{ fontSize: 12, color: '#4C8C6B', marginTop: 8 }}>↑12% vs last 4 weeks</div>
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>Recent walks</div>
      <Card>
        {WALKS.map((w, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < WALKS.length - 1 ? '1px solid #eee' : 'none' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{w.name}</div>
              <div style={{ fontSize: 12, color: '#777' }}>{w.duration} · {w.dist} · {w.intensity}</div>
            </div>
            <div style={{ fontSize: 12, color: '#999' }}>{w.when}</div>
          </div>
        ))}
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>Nutrition & fuel</div>
      <Card>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Today's fuel</div>
        <div style={{ fontSize: 12, color: '#777', marginBottom: 8 }}>{petName}'s ideal food routine</div>
        {MEALS.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: i < MEALS.length - 1 ? '1px solid #eee' : 'none', opacity: m.done ? 1 : 0.5 }}>
            <div>
              <div style={{ fontWeight: 600 }}>{m.name}</div>
              <div style={{ fontSize: 12, color: '#777' }}>{m.detail}{m.kcal ? ` · ${m.kcal} kcal` : ''}</div>
            </div>
            <div style={{ fontSize: 12, color: '#999' }}>{m.done ? m.time : `scheduled ${m.time}`}</div>
          </div>
        ))}
      </Card>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <div><div style={{ fontWeight: 600 }}>Water</div><div style={{ fontSize: 12, color: '#777' }}>×5 drank · last 14 min ago</div></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div><div style={{ fontWeight: 600 }}>Ate today</div><div style={{ fontSize: 12, color: '#777' }}>×3 · last 3h 20m ago</div></div>
        </div>
        <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #eee' }}>
          <div style={{ fontWeight: 600 }}>Kibble brand</div>
          <div style={{ fontSize: 12, color: '#777' }}>Farmhouse Chicken · 12 days left · auto-reorder on</div>
        </div>
      </Card>

      <div style={{ fontWeight: 700, marginBottom: 4 }}>More to sniff</div>
      {ARTICLES.map((a, i) => (
        <Card key={i} style={{ cursor: 'pointer' }}>
          <div style={{ fontSize: 11, color: '#4C8C6B', fontWeight: 600, marginBottom: 2 }}>{a.tag}</div>
          <div style={{ fontWeight: 600 }}>{a.title}</div>
        </Card>
      ))}
    </div>
  );
}
