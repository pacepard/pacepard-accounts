interface EditorHeaderProps {
    pageTitle?: string;
    showBack?: boolean;
    sticky?: boolean;
}

/** Minimal editor header until full editor chrome is ported. */
export default function EditorHeader({ pageTitle, sticky }: EditorHeaderProps) {
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
