// Recreated phone-frame wrapper. Original implementation wasn't recoverable from the
// saved file (referenced but not embedded) — this reproduces the observed behavior:
// fixed iPhone-sized frame, status bar with live time, scrollable content area.
function IOSDevice({ width = 390, height = 820, bgColor = '#fff', scrimColor = '#fff', children }) {
  const [time, setTime] = React.useState(() =>
    new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false })
  );
  React.useEffect(() => {
    const id = setInterval(
      () => setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false })),
      30000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      width, height, margin: '24px auto', borderRadius: 40, overflow: 'hidden',
      background: bgColor, boxShadow: '0 0 0 10px #111, 0 20px 60px rgba(0,0,0,0.35)',
      position: 'relative', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', padding: '14px 24px 4px',
        fontSize: 15, fontWeight: 600, background: scrimColor,
      }}>
        <span>{time}</span>
        <span>●●● 📶 🔋</span>
      </div>
      <div style={{ height: 'calc(100% - 38px)', overflowY: 'auto', padding: '0 16px 90px' }}>
        {children}
      </div>
    </div>
  );
}
