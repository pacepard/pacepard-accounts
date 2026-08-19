/** Strip trailing slashes for active-state and breadcrumb matching. */
export function normalizePathname(pathname: string): string {
    return pathname.replace(/\/+$/, '') || '/';
}

export function isSidebarPathActive(
    pathname: string,
    itemPath: string,
    options: { exact: boolean },
): boolean {
    const p = normalizePathname(pathname);
    const item = normalizePathname(itemPath);
    if (options.exact) return p === item;
    return p === item || p.startsWith(`${item}/`);
}
