// Recreated from rendered text captured via headless browser audit (not original source).
const ROUTINE = [
  { name: 'Breakfast', detail: 'Kibble · ½ cup', time: '7:30' },
  { name: 'Morning walk', detail: '45 min · Oak Park', time: '9:00' },
  { name: 'Sniff & seek', detail: 'Hide the duck · 10 min', time: '13:00' },
  { name: 'Play session', detail: 'Tug of war · 15 min', time: '14:00' },
];

const HORIZON = [
  { title: 'Milo turns 5!', detail: "Aito's best Golden friend. Plan a park meet-up?", when: 'In 3 days · Apr 21' },
  { title: 'Annual vet check-in', detail: 'Dr. Alvarez · full exam', when: 'In 2 wk · May 2' },
  { title: 'Restock kibble', detail: 'Auto-order arrives Apr 24', when: 'In 6 d · Apr 24' },
  { title: 'Home weigh-in', detail: 'Monthly tracking', when: 'Next Sun · Apr 20' },
  { title: 'Annual groom & nail trim', detail: 'Book with Paws & Claws', when: 'In 2 wk · May 5' },
];

const SUPERPOWER_ACTIONS = [
  { name: 'Sniff & seek', detail: 'Hide a toy, let them find', mins: 10 },
  { name: 'Scent trail', detail: 'Drag a treat path outside', mins: 15 },
  { name: 'Name that toy', detail: 'Fetch by name from a pile', mins: 8 },
];

function Card({ children }) {
  return <div style={{ background: '#fff', borderRadius: 16, padding: 14, marginBottom: 10 }}>{children}</div>;
}

function PawlPetScreen({ petName = 'Aito', ownerName = 'Artur', onGoTo }) {
  const [quizDismissed, setQuizDismissed] = React.useState(false);

  return (
    <div>
      <div style={{ padding: '8px 0 4px', fontSize: 13, color: '#777' }}>Saturday · Apr 18</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>Hello, {ownerName}</div>
      <Card>
        <div style={{ fontWeight: 700 }}>{petName}</div>
        <div style={{ fontSize: 13, color: '#777' }}>Australian Shepherd · 1 yr · 22 kg</div>
        <div style={{ fontSize: 13, color: '#777' }}>Young adult stage · ♂ Intact</div>
        <div style={{ marginTop: 8 }}>{petName} is doing great. Energy up 12% this week — keep the routine going.</div>
      </Card>

      <Card>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Today at a glance · Live</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>72%</div><div style={{ fontSize: 12 }}>Activity goal</div></div>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>512 kcal</div><div style={{ fontSize: 12 }}>of 800 today</div></div>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>92</div><div style={{ fontSize: 12 }}>Wellness score</div></div>
          <div><div style={{ fontSize: 22, fontWeight: 700 }}>+1.2 yr</div><div style={{ fontSize: 12 }}>Vs. breed average</div></div>
        </div>
      </Card>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
        <span>Today's routine</span><span style={{ fontWeight: 400, color: '#777' }}>See all</span>
      </div>
      <Card>
        {ROUTINE.map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <div><div style={{ fontWeight: 600 }}>{r.name}</div><div style={{ fontSize: 12, color: '#777' }}>{r.detail}</div></div>
            <div style={{ fontSize: 12, color: '#777' }}>{r.time}</div>
          </div>
        ))}
      </Card>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
        <span>On the horizon · Next 2 mo</span>
      </div>
      <Card>
        {HORIZON.map((h, i) => (
          <div key={i} style={{ padding: '8px 0', borderBottom: i < HORIZON.length - 1 ? '1px solid #eee' : 'none' }}>
            <div style={{ fontWeight: 600 }}>{h.title}</div>
            <div style={{ fontSize: 12, color: '#777' }}>{h.detail}</div>
            <div style={{ fontSize: 12, color: '#999' }}>{h.when}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <button style={{ fontSize: 12 }}>Complete</button>
              <button style={{ fontSize: 12 }}>Archive</button>
            </div>
          </div>
        ))}
        <button style={{ fontSize: 13, marginTop: 6 }}>View history</button>
      </Card>

      <div style={{ fontWeight: 700 }}>{petName}'s superpowers!</div>
      <Card>
        <div style={{ fontWeight: 600 }}>Smell</div>
        <div style={{ fontSize: 13, color: '#777' }}>Aussies have ~220M scent receptors. {petName}'s top-5% breed trait.</div>
        <div style={{ fontWeight: 600, marginTop: 10 }}>Train the superpower</div>
        {SUPERPOWER_ACTIONS.map((a, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
            <div><div style={{ fontWeight: 600 }}>{a.name}</div><div style={{ fontSize: 12, color: '#777' }}>{a.detail}</div></div>
            <div style={{ fontSize: 12, color: '#777' }}>{a.mins} min</div>
          </div>
        ))}
      </Card>

      {!quizDismissed && (
        <Card>
          <div style={{ fontWeight: 600 }}>Tip of the day</div>
          <div style={{ fontSize: 13, color: '#777', margin: '6px 0' }}>
            Aussies are natural workers — a short "job" each morning (fetch-and-drop, sit-to-wait)
            channels that herding drive and settles them for the rest of the day.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setQuizDismissed(true)}>Save</button>
            <button onClick={() => setQuizDismissed(true)}>Not now</button>
          </div>
        </Card>
      )}
    </div>
  );
}
