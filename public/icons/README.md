# Icons Directory

This directory contains custom icon assets for the WHY Q University landing pages.

## Primary Icon Solution

The project uses **Lucide React** as the primary icon library. Most icons are imported directly from the package:

```tsx
import { GraduationCap, Users, BookOpen } from 'lucide-react'
```

## Custom Icons (SVG)

This directory is for custom icons not available in Lucide React:

### Recommended Custom Icons
- `whyq-emblem.svg` - University emblem/crest
- `naac-badge.svg` - NAAC accreditation badge
- `nba-badge.svg` - NBA accreditation badge
- `ugc-badge.svg` - UGC recognition badge
- `aicte-badge.svg` - AICTE approval badge

### Company/Recruiter Logos (if not in /images/)
- Small icon versions of company logos for compact displays

## SVG Guidelines

1. **Optimization**: Run SVGs through SVGO or SVGOMG before adding
2. **ViewBox**: Ensure proper viewBox attribute for scaling
3. **Colors**: Use currentColor for theme-compatible icons
4. **Size**: Keep file size minimal (< 10KB each)
5. **Accessibility**: Include title/desc elements for screen readers

## Example SVG Structure

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <title>Icon Description</title>
  <path d="M..." />
</svg>
```

## Usage in Components

### Direct Import
```tsx
import Icon from '@/public/icons/whyq-emblem.svg'

<Icon className="w-6 h-6" />
```

### As Image
```tsx
<Image src="/icons/naac-badge.svg" alt="NAAC A++" width={64} height={64} />
```

## Lucide React Icons Used

Reference of icons already used in the project:
- `GraduationCap` - Education/courses
- `Users` - Community/students
- `BookOpen` - Library/learning
- `Trophy` - Achievements/placements
- `Home` - Hostel/accommodation
- `Coffee` - Cafeteria/dining
- `Heart` - Health/wellness
- `Lightbulb` - Innovation/research
- `Flask` - Laboratory/science
- `Building2` - Campus/infrastructure
- `Phone`, `Mail`, `MapPin` - Contact info
- `Facebook`, `Twitter`, `Instagram`, `Linkedin`, `Youtube` - Social media
- `Menu`, `X` - Navigation
- `ChevronDown`, `ChevronRight` - UI controls
- `Loader2` - Loading states
- `Check`, `AlertCircle` - Form validation

## Notes

- Most icons should be handled by Lucide React
- Only add custom SVGs for brand-specific or unique icons
- Keep consistent sizing (24x24px for UI icons, 64x64px for badges)
