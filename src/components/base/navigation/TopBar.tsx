interface TopBarProps {
    pageTitle?: string;
    showBack?: boolean;
    sticky?: boolean;
}

/** Minimal top bar until full navigation is ported. */
export default function TopBar({ pageTitle, sticky }: TopBarProps) {
    return (
        <header
            className={`w-full border-b border-border bg-background px-8 py-4 ${sticky ? 'sticky top-0 z-20' : ''}`}
        >
            {pageTitle ? (
                <h1 className="text-lg font-semibold text-foreground">{pageTitle}</h1>
            ) : null}
        </header>
    );
}
