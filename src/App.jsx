function App() {
  const [tab, setTab] = React.useState('pet');
  const theme = THEMES[tab] || THEMES.pet;

  function renderScreen() {
    switch (tab) {
      case 'pet':        return <PawlPetScreen petName="Aito" ownerName="Artur" onGoTo={setTab} />;
      case 'activity':   return <PawlActivityScreen petName="Aito" />;
      case 'wellbeing':  return <PawlWellbeingScreen petName="Aito" />;
      case 'longevity':  return <PawlLongevityScreen petName="Aito" />;
      default:           return null;
    }
  }

  return (
    <div style={{ background: theme.bg, minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <IOSDevice bgColor={theme.bg} scrimColor={theme.bg}>
        {renderScreen()}
        <TabBar active={tab} onChange={setTab} accent={theme.accent} />
      </IOSDevice>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
