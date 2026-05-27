interface HeaderProps {
  organizer: string
}

export function Header({ organizer }: HeaderProps) {
  return (
    <header className="header">
      <span className="header-organizer">{organizer}</span>
    </header>
  )
}
