export function ExperienceBar() {
  return (
    <header className="experience__bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <span className="current__experience"  style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}