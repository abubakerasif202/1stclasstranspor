# Design system

## Colours

Black `#090A0C`, charcoal `#15181C`, charcoal soft `#20252A`, navy `#102535`, gold `#D5B75E`, gold light `#E4CF83`, red `#F23855`, warm white `#F7F5EF`, soft grey `#E7EAED`, slate `#37434B`, white `#FFFFFF`.

## Typography and spacing

Manrope is used for compact editorial headings; Inter is used for body copy. The layout uses 20px mobile gutters, 32px tablet gutters, 48px desktop gutters, with major section spacing from 80px to 112px.

## Buttons, cards and images

Red is reserved for primary actions; gold provides fine dividers and labels. Cards use simple offset shadows and border hierarchy. Images require controlled dark crops and must never displace readable text.

## Motion and accessibility

Motion is transform and opacity based, restrained, paused by reduced-motion preferences, and avoids touch tilt. The cinematic intro supports visible skip, Escape and scroll restoration, and is shown only once per browser session so it does not repeatedly block returning visitors. Page content itself never depends on an entrance animation to become visible. Pages include landmarks, visible focus, semantic headings, labelled forms, required-field identification, active navigation, keyboard-contained mobile navigation and skip-to-content support. Automated checks are smoke tests, not an assertion of perfect accessibility.
