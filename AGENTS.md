<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Accessibility architecture
- Use the shared layout for the skip link, main landmark, route-change focus, and polite page announcements so all content routes share keyboard behavior.
- Use the existing Radix-based Sheet for mobile navigation so Escape, focus containment, and focus restoration are handled by the accessible primitive.
- Define focus indicators and reduced-motion behavior centrally, and keep reveal content visible before animation so keyboard targets never start invisible.

## Portfolio case studies
- Give each project its own content route and expose it on Home and Work so visitors can find and read the full story without changing the existing navigation.
